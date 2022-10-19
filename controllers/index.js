module.exports = {
    index: async(req, res) => {
        try {
            res.status(200).json({
                status : true,
                message: "Get Data Successfully",
            })

        } catch (err) { 
            console.error(err);
            return res.status(500).send("Server error");
        }
    },

    delete: async(req, res) => {
        try {
            res.status(200).json({
                status : true,
                message: "Deleted User Data Successfully",
            })

        } catch (err) { 
            console.error(err);
            return res.status(500).send("Server error");
        }
    },
}
