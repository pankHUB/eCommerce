const Product = require("../models/product");

const addProducts = (req,res) =>{
  console.log(req.body);
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const productDetails = req.body.productDetails;
  const product = new Product({
    title: title,
    price: price,
    productDetails: productDetails,
    imageUrl: imageUrl
  });
  product
    .save()
    .then(result => {
      console.log('Created Product');
    })
    .catch(err => {
      console.log(err);
      res.end({"status":err})
    });

  res.json({"status":'product created'})
}


const getproductsList = async(req,res) => {
  const prod = await Product.find({});
  res.json(prod);
}


module.exports = {
  getproductsList,
  addProducts
}