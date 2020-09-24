const router = require('express').Router();
const sessionController = require('../controllers/sessions');

router.route("/")
    .get(sessionController.listSession)
    .post(sessionController.addSession)

router.route("/:id")
    .get(sessionController.sessionById)

router.route("/byFilm/:id")
    .get(sessionController.sessionByFilm)


module.exports = router;