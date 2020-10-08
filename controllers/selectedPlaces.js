const mongoose = require('mongoose');
SelectedPlace = mongoose.model('SelectedPlace')

let timer = '';
const timerTime = 100000;

async function addSelectedPlace(req, res) {
  const seat = await SelectedPlace.findOne({
    id_session: req.body.id_session,
    row: req.body.row,
    place: req.body.place,
    cost: req.body.cost,
    id_user: req.body.id_user
  })
  if(!seat) {
    const newSelectedSeat = await new SelectedPlace(req.body);
    newSelectedSeat.save()
      .then(selectedSeat => {
        timer = setTimeout(() => {SelectedPlace.deleteMany({id_user: selectedSeat.id_user})
        .then(result => {
              res.send(result);
            })
            .catch(error => {
              res.status(500).send({
                message: error.message
              });
              res.send(error);
            });
        }, timerTime);
        res.send(selectedSeat);
      })
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
  } else {
    await SelectedPlace.findOneAndDelete({
      id_session: req.body.id_session,
      row: req.body.row,
      place: req.body.place,
      cost: req.body.cost,
      id_user: req.body.id_user
    })
      .then(deleteSeat => res.send(deleteSeat))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
  }
};

async function deleteBoughtsSeats(id_session, row, place, cost, id_user) {
  await SelectedPlace.findOneAndDelete({
    id_session,
    row,
    place,
    cost,
    id_user
  })
}

async function listSelectedPlace(req, res) {
  await SelectedPlace.find()
      .then(places => res.send(places))
      .catch(error => {
      res.status(500).send({
          message: error.message
      });
  });
};

module.exports = {
    addSelectedPlace,
    listSelectedPlace,
    deleteBoughtsSeats
}