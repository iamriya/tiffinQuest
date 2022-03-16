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

router.post('/addpackage', async (req, res) => {
    try {
        
        const addpackage = req.body.addpackage
        
        const oldPackage = await Vendor.findOne({'name': addpackage.uname})
        const newPackage = oldPackage
        const k1 = addpackage.cusine_type
        const pr = oldPackage.prices[0]
        pr[k1] = addpackage.prices
        
        newPackage.name = oldPackage.name    
        newPackage.cusine_type =  oldPackage.cusine_type.concat(addpackage.cusine_type),
        newPackage.prices =  pr,
        newPackage.category = addpackage.category,
        newPackage.image =  oldPackage.image
       
        await newPackage.save()
        res.send('New Pizza Added Successfully');  
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;