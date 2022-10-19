const express = require('express')
const router = express.Router();
const controller = require('../controllers/index')

router.get('/', async(req, res) => { controller.index });

router.get('/delete-user', async(req, res) => { controller.delete() });

module.exports = router; 
