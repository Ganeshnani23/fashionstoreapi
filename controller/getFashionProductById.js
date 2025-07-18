const fashionProductsData = require('../data/fashionproducts.json');

function getFahionProductById(id){
   const product = fashionProductsData.filter((data)=>{
        return data.id == id;
    })
    if(product.length >0){
        return product;
    }else{
        return("no product found in data base")
    }
}

module.exports = getFahionProductById;
