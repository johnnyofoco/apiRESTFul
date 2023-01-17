const ProductsModel = require("../models/productsModel");

async function get(req, res) {
  const { id } = req.params;
  
  // se tiver id atribuiu o id ao obj caso contrário envia null
  // assim o find() irá funcionar pra retornar todos os itens
  // como tbm apenas um único item
  const obj = id ? { _id: id} : null

  const products = await ProductsModel.find(obj);

  res.send(products);
}

async function post(req, res){
    const {name, brand, price,} =  req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'Product registred'
    })
}

async function put(req, res){
    const {id} = req.params
    
    //atualiza porém retorna o produto atualizado na resposta
    const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, { new: true})
    
    res.send({
        message: "product updated",
        product,
    }) 

    // Metódo que atualiza porém retorna o produto antigo na resposta
 /*
    const product = await ProductsModel.findOne({_id: id})
     await product.updateOne(req.body)
*/  
    
}

module.exports = {
  get,
  post,
  put,
};
