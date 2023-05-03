const {findProduct, addProductToBasket, basketTotal} = require('./src/index.js');
const { orange, pineapple, kiwi, apple, banana, catalogue } = require('./data.js')

describe('findProduct', ()=> {
    it('finds product with that barcode', () => {
        expect(findProduct(123)).toBe(apple);
        expect(findProduct(789)).toBe(orange);
        expect(findProduct(5367)).toBe(pineapple);   
    })
})

describe('addProductToBasket', () => {
    it('adds a product to the basket', () => {
        expect(addProductToBasket(123)).toEqual([apple]);
    })
})

describe('basketTotal', () => {
    it('adds up price of all products in the basket', () => {
        addProductToBasket(789);
        addProductToBasket(5367);
        expect(basketTotal()).toEqual(92);
    })
})