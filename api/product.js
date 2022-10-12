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
        return res.status(500).send("Server error");k
    }
});

module.exports = router; 
