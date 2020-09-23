const router = require('express').Router();
const filmController = require('../controllers/films');

router.route("/")
  .post(filmController.addFilm)

module.exports = router;