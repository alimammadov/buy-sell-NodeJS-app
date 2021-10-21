const fs = require('fs');
const getProducts =  () => 'Your all produtcs..';


//Add product to DB
const addProduct = (title, description, price) => {
    const products = loadProducts();
    const duplicateProduct = products.filter((p) => p.title === title)

    if (duplicateProduct.length === 0) {
        products.push({
            title: title,
            description: description,
            price: price
        })
        saveProduct(products)

        console.log('New product added!')
    } else {
        console.log('Product already have!')
    }
}
//Remove product
const removeProduct = (title) => {
    const products = loadProducts();
    const productsToKeep = products.filter((p) => p.title !== title)

    if (products.length > productsToKeep.length) {
        console.log('Product removed!')
        saveProduct(productsToKeep)
    } else {
        console.log('Product not found!')
    }

}
//Save product 
const saveProduct = (products) => {
    const dataJson = JSON.stringify(products);
    fs.writeFileSync('products.json', dataJson)
}

//Get products
const loadProducts = () => {
    try {
        const data = fs.readFileSync('products.json');
        const dataJson = data.toString();
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }

}

//Get All Products
const getAllProducts = ()=>{ 
    const products = loadProducts();
    console.log(products)
}


module.exports = {
    getProducts: getProducts,
    addProduct: addProduct,
    removeProduct: removeProduct,
    getAllProducts: getAllProducts
}