const {Schema, model} = require('mongoose')

const placeSchema = new Schema({
    id: {type: Schema.ObjectId, ref: "Session"},
    seats: [{
        row: Number,
        place: Number,
        user: String
    }]
},
{
    versionKey: false
})

module.exports = model('Places', placeSchema)