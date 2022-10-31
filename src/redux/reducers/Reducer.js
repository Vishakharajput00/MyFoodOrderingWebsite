const INIT_STATE = {
  carts: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "REMOVE_CART":
      const data = state.carts.filter((ele) => ele.id !== action.payload);

      return {
        ...state,
        carts: data,
      };

    case "DEC_CART":
      const itemIndexdec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemIndexdec].quantity >= 1) {
        const dltItem = (state.carts[itemIndexdec].quantity -= 1);
        console.log([...state.carts, dltItem]);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndexdec].quantity === 1) {
        const data = state.carts.filter((ele) => ele.id !== action.payload);

        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};
