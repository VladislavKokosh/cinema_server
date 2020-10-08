const {Schema, model} = require('mongoose')

const selectedPlaceSchema = new Schema({
    id_session: {type: Schema.ObjectId, ref: "Session"},
    row: Number,
    place: Number,
    cost: Number,
    id_user: {type: Schema.ObjectId, ref: "User"}
},
{
    versionKey: false
})

module.exports = model('SelectedPlace', selectedPlaceSchema)