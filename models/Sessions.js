const {Schema, model} = require('mongoose')

const sessionSchema = new Schema({
    id_film: {type: Schema.ObjectId, ref: "Films"},
    date: Number,
    hall: {type: Schema.ObjectId, ref: "Halls"}
},
{
    versionKey: false
})

module.exports = model('Sessions', sessionSchema)