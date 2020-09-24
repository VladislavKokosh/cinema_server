const mongoose = require('mongoose');
Film = mongoose.model('Film')

async function listFilm(req, res) {
    await Film.find()
        .then(films => res.send(films))
        .catch(error => {
        res.status(500).send({
            message: error.message
        });
    });
};

async function addFilm(req, res) {
    const newFilm = await new Film(req.body);
    newFilm.save()
        .then(film => res.send(film))
        .catch(error => {
        res.status(500).send({
            message: error.message
        });
        res.send(error);
    });
};

async function searchFilm(req, res) {
    await Film.findById(req.params.id)
        .then(film => res.send(film))
        .catch(error => {
        res.status(500).send({
            message: error.message
        });
        res.send(error);
    });
};

module.exports = {
    listFilm,
    addFilm,
    searchFilm
}