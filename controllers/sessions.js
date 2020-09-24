const mongoose = require('mongoose');
Session = mongoose.model('Session')

async function listSession(req, res) {
    await Session.find()
      .then(sessions => res.send(sessions))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
      });
};

async function addSession(req, res) {
    const newSession = await new Session(req.body);
    newSession.save()
        .then(session => res.send(session))
        .catch(error => {
            res.status(500).send({
                message: error.message
            })
            res.send(error)
        })
}

async function sessionById(req, res) {
    await Session.findById(req.params.id)
      .then(session => res.send(session))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
}

async function sessionByFilm(req, res) {
    await Session.find({id_film: req.params.id})
      .then(session => res.send(session))
      .catch(error => {
        res.status(500).send({
          message: error.message
        });
        res.send(error);
      });
}

module.exports = {
    listSession,
    addSession,
    sessionById,
    sessionByFilm
}
