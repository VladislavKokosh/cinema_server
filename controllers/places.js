const mongoose = require('mongoose');
Place = mongoose.model('Place')

async function listPlace(req, res) {
    await Place.find()
      .then(places => res.send(places))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
    });
};

async function addPlace(req, res) {
    const newPlace = await new Place(req.body);
    newPlace.save()
      .then(place => res.send(place))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
};

async function placesBySessionId(req, res) {
    await Place.find({id_session: req.params.id})
      .then(place => res.send(place))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
}


module.exports = {
    listPlace,
    addPlace,
    placesBySessionId
}