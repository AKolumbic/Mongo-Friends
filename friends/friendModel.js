const mongoose = require('mongoose');

const localHost = 'localhost:27017';
const database = 'frienddb';
mongoose
    .connect(`mongod://${localHost}/${database}`)
    .then(response => {
        console.log("Connection Successful")
    })
    .catch(error => {
        console.log("Connection Failed")
    });
const schema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true, }, // should be an integer between 1 and 120
    createdOn: { type: Date, required: true, default: Date.now }
})

const model = mongoose.model('Friend', schema)

module.exports = model