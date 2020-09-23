const router = require('express').Router();

router.use('/films',require('./films'));
router.use('/halls',require('./halls'));
router.use('/sessions', require('./sessions'))

module.exports = router;