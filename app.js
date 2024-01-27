const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const path = require('path');
const router = require('./routes/router');
const hbs = require('hbs');
require('./database/db');

app.use(express.json());

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'partials'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about-api', (req, res) => {
    res.render('about')
})

app.use('/quotes', router);

// For Testing Purpose
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => console.log(`The app is live at http://localhost:${port}`));
