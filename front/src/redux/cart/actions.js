import cartActionTypes from "./actionTypes";

export const addProductToCart = (payload) => ({
  type: cartActionTypes.ADD_PRODUCT,
  payload,
});

export const cancelCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});