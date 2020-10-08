const mongoose = require('mongoose');
Place = mongoose.model('Place');
const deleteBoughtSeats = require('./selectedPlaces').deleteBoughtsSeats

async function listPlace(req, res) {
    await Place.find()
        .then(places => res.send(places))
        .catch(error => {
        res.status(500).send({
            message: error.message
        });
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

async function addBoughtSeat(req, res) {
  const newBoughtSeat = await new Place(req.body);
  newBoughtSeat.save()
    .then(boughtSeat => {
      deleteBoughtSeats(
        req.body.id_session,
        req.body.row,
        req.body.place,
        req.body.cost,
        req.body.id_user
      );
      res.send(boughtSeat)
    })
    .catch(error => {
      res.status(500).send({
        message: error.message
      });
      res.send(error);
    });
};


module.exports = {
    listPlace,
    placesBySessionId,
    addBoughtSeat
}