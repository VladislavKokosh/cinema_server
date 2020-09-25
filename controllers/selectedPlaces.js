const mongoose = require('mongoose');
SelectedPlace = mongoose.model('SelectedPlace')

let timer = '';
const timerTime = 10000;

async function addSelectedPlace(req, res) {
    const place = await SelectedPlace.findOne({
        session_id: req.body.choisePlace.session_id,
        seats: {
            $elemMatch: {row: req.body.choisePlace.row },
            $elemMatch: {place: req.body.choisePlace.place },
            $elemMatch: {cost: req.body.choisePlace.cost },
            $elemMatch: {id_user: req.body.choisePlace.user }
        }
    })
    if(!place) {
        const newSelectedPlace = await new SelectedPlaces(req.body.choisePlace);
        newSelectedPlace.save()
        .then(selectedSeat => {
            timer = setTimeout(() => {SelectedSeats.deleteMany({seats:{$elemMatch: selectedSeat.seats.user}})
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
        await SelectedSeats.findOneAndDelete({
            session_id: req.body.choisePlace.session_id,
                seats: {
                    $elemMatch: {row: req.body.choisePlace.row },
                    $elemMatch: {place: req.body.choisePlace.place },
                    $elemMatch: {cost: req.body.choisePlace.cost },
                    $elemMatch: {id_user: req.body.choisePlace.user }
                }
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

module.exports = {
    addSelectedPlace
}