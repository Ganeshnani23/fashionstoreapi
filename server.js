const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors')
const { json, static } = require('express');
const port = process.env.PORT || 8080;


app.use(cors())
app.use(json())
app.use(static('./public'));
app.use('/assets/fashionproductsimages', express.static('./assets/fashionproductsimages'));

const listofCategory = require('./data/category.json');
const getAllFashionProducts = require('./controller/getAllFashionProducts')
const getFashionProductById = require('./controller/getFashionProductById')
const getFashionProductByCategory = require('./controller/getFashionProductByCategory')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/documentpage.html'));
});


app.get("/category", (req, res) => {
    res.send(listofCategory)
})

app.get("/getallfashionproducts", (req, res) => {
    res.send(getAllFashionProducts());
});


app.get("/fashion/:category", (req, res) => {
    let category = req.params.category;
    res.send(getFashionProductByCategory(category));
})


app.get("/getfashionproductsbyid/:id", (req, res) => {
    let id = req.params.id;
    res.send(getFashionProductById(id))
})


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("app is listening on " + port)
    }

})
