"use strict";
const printProductSummary = (product) => {
    console.log(`${product.name} $${product.price}`);
};
printProductSummary({ price: 30, name: 'Silk', quantity: 22 });
