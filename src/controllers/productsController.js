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

module.exports = {
  get,
};
