const express = require('express');
const { send } = require('process');
const db = require('./db');
const vendormodel = require('./models/vendorModel');
const vendorRoute = require('./routes/vendorRoute');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');

// const userRoute = require('./routes/orderRoute');


const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Server Working Fine');
});

app.use('/api/vendors/',vendorRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);

// app.use('/api/order/', orderRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)});

