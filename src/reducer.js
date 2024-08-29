export const initialState = {
  basket: [],
};

export function getBasketTotal(basket) {
  return basket.reduce((acc, item) => acc + item.price, 0);
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "Remove":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
