const mongoose = require('mongoose');

const vendorSchema = mongoose.Schema({
    name:{type: String, require},
    cusine_type: [],
    prices: [],
    rating:{type: String, require} ,
    category:{type: String, require} ,
    image: {type: String, require}
},{timestamps:true});

const vendormodel = mongoose.model('vendor_datas', vendorSchema);

module.exports = vendormodel;