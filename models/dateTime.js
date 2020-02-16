const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dateTime = new Schema({
    _id: {
        type: String,
        required: true
    },
    datetime: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

var DateTimes = mongoose.model('Datetime', dateTime);
module.exports= DateTimes;