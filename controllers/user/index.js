const router = require('express').Router();
const controller = require('./controller');

router.get('/test', controller.test);

module.exports = router;
