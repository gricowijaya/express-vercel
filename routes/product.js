const express = require('express')
const router = express.Router();
const controller = require('../controllers/index')

router.get('/api', async(req, res) => { 
    try {
        return res.status(200).json({
            status: true,
            message: "Get Data Successfully"
        });
    } catch (error) {
        return res.status(500).send(err)
    }
});

router.get('/api/delete-user', async(req, res) => { 
    try {
        return res.status(200).json({
            status: true,
            message: "Get Data Successfully"
        });
    } catch (error) {
        return res.status(500).send(err)
    }
});

module.exports = router; 
