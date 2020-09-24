const router = require('express').Router();
const usersController = require('../controllers/users');

router.route("/")
    .get(usersController.listUser)
    .post(usersController.addUser)

module.exports = router
