const express = require('express');
const router = express.Router();
const Vendor = require('../models/vendorModel');

router.get('/getallvendors', async (req, res) => {
    try {
        const vendors = await Vendor.find({});
        res.send(vendors);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;