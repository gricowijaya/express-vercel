const express = require('express')
const router = express.Router();

router.get('/', async(req, res) => { 
    try {
        res.json({
            status : 200,
            message: "Get Data Successfully",
        })

    } catch (err) { 
        console.error(err);
        return res.status(500).send("Server error");
    }
});

router.get('/delete-user', async(req, res) => { 
    try {
        res.json({
            status : 200,
            message: "Deleted User Data Successfully",
        })

    } catch (err) { 
        console.error(err);
        return res.status(500).send("Server error");
    }
});

module.exports = router; 
