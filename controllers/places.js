const mongoose = require('mongoose');
Place = mongoose.model('Place')

async function listPlace(req, res) {
    await Film.find()
      .then(places => res.send(places))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
    });
};

async function addPlace(req, res) {
    const newPlace = await new Places(req.body);
    newPlace.save()
      .then(place => res.send(place))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
};


module.exports = {
    listPlace,
    addPlace
}