const mongoose = require('mongoose');

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err) => {
    if (err) throw err;
    console.log('Successfully connected');
});

module.exports = mongoose;