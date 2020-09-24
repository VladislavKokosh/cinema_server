const mongoose = require('mongoose');
User = mongoose.model('User')

async function listUser(req, res) {
    await User.find()
        .then(users => res.send(users))
        .catch(error => {
        res.status(500).send({
            message: error.message
        });
    });
};

async function addUser(req, res) {
    const newUser = await new User(req.body);
    newUser.save()
        .then(user => res.send(user))
        .catch(error => {
        res.status(500).send({
            message: error.message
        });
        res.send(error);
    });
};

module.exports = {
    listUser,
    addUser
}