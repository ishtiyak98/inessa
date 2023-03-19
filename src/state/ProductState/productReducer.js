import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cartShow: false,
  myCart: [],
  filterShow: false,
  rangeFilter: [150, 450],
  searchKeywords: "",
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
      const checkDuplicate = state.myCart.find(
        (item) => item.id === action.payload.id
      );
      console.log(checkDuplicate);
      if (checkDuplicate) {
        if (action.payload.quantity >= 5) {
          return state;
        } else {
          return {
            ...state,
            myCart: [
              ...state.myCart.filter((item) => item.id !== checkDuplicate.id),
              {
                ...checkDuplicate,
                quantity: action.payload.trigger
                  ? action.payload.quantity
                  : checkDuplicate.quantity + 1,
                buyingPrice:
                  action.payload.current_price * (checkDuplicate.quantity + 1),
              },
            ],
          };
        }
      } else {
        return {
          ...state,
          myCart: [
            ...state.myCart,
            {
              ...action.payload,
              quantity: action.payload.quantity ? action.payload.quantity : 1,
              buyingPrice: action.payload.current_price,
              cartPosition: state.myCart.length + 1,
            },
          ],
        };
      }

    case actionTypes.CART_ITEM_QTY_DECREASE:
      const updatedQtyItem = state.myCart.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        myCart: [
          ...state.myCart.filter((item) => item.id !== updatedQtyItem.id),
          {
            ...updatedQtyItem,
            quantity: updatedQtyItem.quantity - 1,
            buyingPrice:
              action.payload.current_price * (updatedQtyItem.quantity - 1),
          },
        ],
      };

    case actionTypes.CART_ITEM_REMOVE:
      return {
        ...state,
        myCart: [
          ...state.myCart.filter((item) => item.id !== action.payload.id),
        ],
      };
    case actionTypes.SET_RANGE_FILTER:
      return {
        ...state,
        rangeFilter: [...action.payload],
      };
    case actionTypes.SET_SEARCH_KEYWORDS:
      return {
        ...state,
        searchKeywords: action.payload,
      };
    case actionTypes.ClEAR_SEARCH_KEYWORDS:
      return {
        ...state,
        searchKeywords: "",
      };
    default:
      return state;
  }
};
