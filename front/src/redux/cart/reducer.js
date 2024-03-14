import cartActionTypes from "./actionTypes";

const initialState = {
  products: [],
  productsTotalPrice: 0,
  productsTotalTax: 0,
  productsTotalAmount: 0,
  
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT:
      //   return { ...initialState, products: [...state.products, action.payload] };
      const productIsAlreadyInCart = state.products.some(
        (product) => product.code === action.payload.code
      );
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.code === action.payload.code
              ? //   ? { ...product, amount: product.amount + action.payload.amount }
                { ...product, amount: product.amount + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, amount: 1 }],
      };
    default:
      return state;
  }
};
// switch (action.type) {
//     case "ADD_PRODUCT":
//         const product = action.payload;
//         const products = state.products;
//         const index = products.findIndex((prod) => prod.code === product.code);
//         if (index === -1) {
//             products.push(product);
//         } else {
//             products[index].amount += product.amount;
//         }
//         const productsTotalPrice = products.reduce((acc, prod) => acc + prod.price * prod.amount, 0);
//         const productsTotalTax = products.reduce((acc, prod) => acc + prod.tax * prod.amount, 0);
//         const productsTotalAmount = products.reduce((acc, prod) => acc + prod.amount, 0);
//         return { ...state, products, productsTotalPrice, productsTotalTax, productsTotalAmount };
//     case "REMOVE_PRODUCT":
//         const productsFiltered = state.products.filter((prod) => prod.code !== action.payload);
//         const productsTotalPriceFiltered = productsFiltered.reduce((acc, prod) => acc + prod.price * prod.amount, 0);
//         const productsTotalTaxFiltered = productsFiltered.reduce((acc, prod) => acc + prod.tax * prod.amount, 0);
//         const productsTotalAmountFiltered = productsFiltered.reduce((acc, prod) => acc + prod.amount, 0);
//         return { ...state, products: productsFiltered, productsTotalPrice: productsTotalPriceFiltered, productsTotalTax: productsTotalTaxFiltered, productsTotalAmount: productsTotalAmountFiltered };
//     case "CLEAR_CART":
//         return { ...state, products: [], productsTotalPrice: 0, productsTotalTax: 0, productsTotalAmount: 0 };
//     default:
//         return state;
// }

export default cartReducer;