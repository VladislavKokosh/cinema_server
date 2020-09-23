const router = require('express').Router();
const filmController = require('../controllers/films');

router.route("/")
    .get(filmController.listFilm)
    .post(filmController.addFilm)

module.exports = router;