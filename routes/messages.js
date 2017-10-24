const express = require('express');
const router = express.Router();
const messages = require('../controllers/messages');

router.get('/', messages.getData);

module.exports = router;