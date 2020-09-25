const router = require('express').Router();
const selectedPlaceController = require('../controllers/selectedPlaces');

router.route("/")
    .post(selectedPlaceController.addSelectedPlace)

module.exports = router
