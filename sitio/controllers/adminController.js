const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'),'utf-8'));
const categories = require('../data/categories.json');
const capitalizarPrimeraLetra = require('../src/public/javascripts/capitalizeOneLetter.js');



module.exports = {
    index: (req, res) => {
        return res.render('admin/index',{
            title: 'admin',
            products
        })
    },
    add: (req, res) => {
        return res.render('admin/add',{
            title: 'add product', /* Aca agregamos un producto */
            categories,
            capitalizarPrimeraLetra,
        })
        
    },
    store: (req, res) => {
        const {name,description, price, discount, category} = req.body;
        product = {
            id : products[products.length - 1].id + 1,
            name: name.trim(),
            description : description.trim(),
            price : +price,
            discount : +discount,
            category : category,
            fav: false,
            image : req.file ? req.file.filename : 'art-default.png',
            sold: false,
            status : discount>0 ? "in-sale" : "new"
        }
        products.push(product),
        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(products,null,2),"utf-8")
        res.redirect("/admin")
    },
    edit: (req, res) => {
        return res.render('admin/edit',{
            title: 'Edit product' /* Aca editamos un producto */
        })
    },
    update: (req, res) => {
        return res.render('admin/update',{
            title: 'Update product'/* Aca editamos el producto */
        })
    },
    destroy: (req, res) => {
        return res.render('admin/destroy',{
            title: 'delete product' /* Aca deletamos un producto */
        })
    },
}