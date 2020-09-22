const {Schema, model} = require('mongoose')

const sessionSchema = new Schema({
    id_film: {type: Schema.ObjectId, ref: "Film"},
    date: Number,
    hall: {type: Schema.ObjectId, ref: "Hall"}
},
{
    versionKey: false
})

module.exports = model('Session', sessionSchema)