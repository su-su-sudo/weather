const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


const publicPath = path.join(__dirname, 'public');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(publicPath));

app.get('/', function(req, res){
    res.send("hi");
})


const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log('Node Server Started.')});