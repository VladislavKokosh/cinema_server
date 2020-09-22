const {Schema, model} = require('mongoose')

const hallSchema = new Schema({
    id: Number,
    title: String,
    seats: [{
        row: Number,
        count: Number,
        cost: Number
    }]
},
{
    versionKey: false
})

module.exports = model('Films', hallSchema)