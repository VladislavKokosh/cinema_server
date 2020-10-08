const {Schema, model} = require('mongoose')

const placeSchema = new Schema({
    id_session: {type: Schema.ObjectId, ref: "Session"},
    row: Number,
    place: Number,
    id_user: {type: Schema.ObjectId, ref: "User"}
},
{
    versionKey: false
})

module.exports = model('Place', placeSchema)
