const express = require("express");
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));

app.listen(port,() => console.log("El servidor esta corriendo en http://localhost:"+ port));

app.get('/',(req, res) => res.sendfile(path.join(__dirname,'views','index.html')));

app.get('/login',(req, res) => res.sendfile(path.join(__dirname,'views','login.html')));

app.get('/productcart',(req, res) => res.sendfile(path.join(__dirname,'views','productCart.html')));

app.get('/productdetail',(req, res) => res.sendfile(path.join(__dirname,'views','productDetail.html')));

app.get('/register',(req, res) => res.sendfile(path.join(__dirname,'views','register.html')));

app.get('/comunity',(req, res) => res.sendfile(path.join(__dirname,'views','comunity.html')));

app.get('/contact',(req, res) => res.sendfile(path.join(__dirname,'views','contact.html')));

app.get('/store',(req, res) => res.sendfile(path.join(__dirname,'views','store.html')));