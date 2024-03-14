import rootReducer from "../rootReducer";

export const selectProductsCount = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce((acc, curr) => acc + curr.amount, 0);
}