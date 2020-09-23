const router = require('express').Router();

router.use('/films',require('./films'));
router.use('/halls',require('./halls'));

module.exports = router;