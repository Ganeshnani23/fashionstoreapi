const fashionProductsData = require('../data/fashionproducts.json');

function getFashionProductByCategory(category) {
    const products = fashionProductsData.filter((data) => {
        return data.category == category;
    })
    if (products.length > 0) {
        return products;
    } else {
        return ("no product found in data base")
    }
}

module.exports = getFashionProductByCategory
