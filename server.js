const express = require('express');
const db = require('./db');


const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Server Working Fine');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)});

