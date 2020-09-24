const router = require('express').Router();
const placeController = require('../controllers/places');

router.route("/")
    .get(placeController.listPlace)
    .post(placeController.addPlace)

router.route("/:id")
    .get(placeController.placesBySessionId)

module.exports = router
