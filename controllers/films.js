const mongoose = require('mongoose');
Film = mongoose.model('Film')

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

module.exports = {
    addFilm
}