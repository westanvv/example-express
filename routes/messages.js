const express = require('express');
const router = express.Router();

const messagesController = require('../controllers/messages');

router.get('/', messagesController.getData);
router.get('/sequelize', messagesController.getDataS);

module.exports = router;
