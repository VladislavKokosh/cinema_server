const router = require('express').Router();
const filmController = require('../controllers/films');

router.route("/")
  .post(filmController.addMovie)

module.exports = router;