const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'),'utf-8'));

module.exports = {
    store: (req, res) => {
        return res.render('products/store',{
            title: 'Store', /* Aca se ven todos los productos */
            products: products,
        })
    },
    search: (req, res) => {
        return res.render('products/search',{
            title: 'Search',  /* Aca se muestra lo buscado */
            filtar,/* filtrar para encontrar lo que se busca */
        })
    },
    detail: (req, res) => {
        let product = products.find(product => product.id === +req.params.id);

        return res.render('products/detail',{
            title: 'Product', /* Aca se ve el detalle de producto */
            products: products,
            product
        })
    },
    /* Puede que lo movamos*/
    cart: (req, res) => {
        return res.render('products/cart',{
            title: 'Cart' /* Vista carrito */
        })
    }
}