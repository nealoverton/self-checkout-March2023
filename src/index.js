// 1- As a user, I would like to be able to scan an item using barcode so its details can be found from products list (test data).

// 2 - As a user, I would like to be able to add an item to my basket.

// 3 - As a user, I would like to be able to see the total price of all items in my basket.

// 4 - As a user, I would like to be able to remove an item from my basket.
const { orange, pineapple, kiwi, apple, banana, catalogue } = require("../data");

const basket = [];

function findProduct(barcode){
    const results = catalogue.find((product) => {
        return barcode == product.barcode;
    });
    return results
}

function addProductToBasket(barcode){
    basket.push(findProduct(barcode));
    return basket;
}

function basketTotal(){
    return basket.reduce((accumulator, product) =>{
        return accumulator + product.price;
    }, 0);
}

module.exports = {findProduct, addProductToBasket, basketTotal};