const {Schema, model} = require('mongoose')

const filmSchema = new Schema({
    name: String,
    cover: String,
    about: String,
    duration: Number
},
{
    versionKey: false
})

module.exports = model('Film', filmSchema)
