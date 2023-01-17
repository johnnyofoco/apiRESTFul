const ProductsModel = require('../models/productsModel')

async function get(req, res){
    const products = await ProductsModel.find()

    res.send(products)
}

module.exports = {
    get,
}