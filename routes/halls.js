const router = require('express').Router();
const hallController = require('../controllers/halls');

router.route("/")
    .post(hallController.addHall)

module.exports = router;