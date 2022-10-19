const express = require('express')
const router = express.Router();
const controller = require('../controllers/index')

router.get('/api',  controller.index);

router.get('/api/delete-user',  controller.delete);

module.exports = router; 
