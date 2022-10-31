export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const DELETE = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};

//decrease item
export const DES = (item) => {
  return {
    type: "DEC_CART",
    payload: item,
  };
};
