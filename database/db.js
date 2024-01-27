const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/quotes-api')
    .then(v => console.log('Connected'))
    .catch(err => console.log(err.message))