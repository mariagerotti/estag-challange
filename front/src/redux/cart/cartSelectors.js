export const selectProductsCount = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce((acc, curr) => acc + curr.amount, 0);
}

export const selectProductsTotalPrice = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce((acc, curr) => acc + curr.price * curr.amount, 0);
}

export const selectProductsTotalTax = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce((acc, curr) => acc + curr.tax * curr.amount, 0);
}