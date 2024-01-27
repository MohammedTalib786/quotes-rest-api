const express = require('express');
const router = express.Router();
const Quote = require('../schema/quotes');


// Post Quotes
router.post('/', async (req, res) => {
    try {
        const create = new Quote(req.body);
        const result = await create.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err.message)
    }
})


// Getting all Quotes
router.get('/', async (req, res) => {
    try {
        const reed = await Quote.find({}, { _id: 0, __v: 0 }).sort({ sr_no: 1 });
        res.status(200).send(reed);
    } catch (err) {
        res.status(400).send(err.message);
    }
})


// Getting Specific Users by id (For Devs)
// router.get('/:id', async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const reed = await Quote.findById({ _id: _id })
//         res.status(200).send(reed)
//     } catch (err) {
//         res.status(400).send(err.message)
//     }
// })


// Getting Specific Users by Sr no: (eg: 1,2,3)
router.get('/:srno', async (req, res) => {
    try {
        const sr_no = req.params.srno;
        const reed = await Quote.findOne({ sr_no: sr_no })
        res.status(200).send(reed);
    } catch (err) {
        res.status(400).send(err.message)
    }
})


// To handle the patch and delete requests we need to uncomment the
// (get id for specific req) and comment the (get sr no specific req)
// Because :id is used to handle patch and delete reqs
// and we just uncomment the sr no get req for user purpose

// Pathc Req 
router.patch('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const update = await Quote.findByIdAndUpdate({ _id: _id }, req.body, { new: true });
        res.status(200).send(update);
    } catch (err) {
        res.status(400).send(err.message);
    }
})


// Delete Req
router.delete('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const del = await Quote.findByIdAndDelete({ _id: _id });
        res.status(200).send(del);
    } catch (err) {
        res.status(400).send(err.message)
    }
})
module.exports = router;