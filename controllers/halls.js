const mongoose = require('mongoose');
Hall = mongoose.model('Hall')

async function listHall(req, res) {
    await Hall.find()
      .then(hall => res.send(hall))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
      });
};


async function addHall(req, res) {
    const newHall = await new Hall(req.body);
    newHall.save()
        .then(hall => res.send(hall))
        .catch(error => {
            res.status(500).send({
                message: error.message
            })
            res.send(error)
        })
}

async function hallById(req, res) {
    await Hall.findById(req.params.id)
      .then(hall => res.send(hall))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
}

module.exports = {
    listHall,
    addHall,
    hallById
}
