import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cartShow: false,
  myCart: [],
  filterShow: false,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.CART_OPEN:
      return {
        ...state,
        cartShow: !state.cartShow,
      };
    case actionTypes.CART_CLOSE:
      return {
        ...state,
        cartShow: false,
      };
      case actionTypes.FILTER_OPEN:
      return {
        ...state,
        filterShow: !state.filterShow,
      };
    case actionTypes.FILTER_CLOSE:
      return {
        ...state,
        filterShow: false,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        myCart: [...state.myCart, { ...action.payload, quantity: 1 }],
      };
    default:
      return state;
  }
};
