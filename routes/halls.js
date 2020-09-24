const router = require('express').Router();
const hallController = require('../controllers/halls');

router.route("/")
    .post(hallController.addHall)
    .get(hallController.listHall)

router.route("/:id")
    .get(hallController.hallById)

module.exports = router;