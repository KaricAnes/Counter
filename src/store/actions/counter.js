import * as actionTypes from "./actionsTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: actionTypes.ADD,
    val: value,
    //val se mora podudarati sa onim valom u reduceru u switchu action.val
  };
};

export const sub = (value) => {
  return {
    type: actionTypes.SUB,
    val: value,
    //val se mora podudarati sa onim valom u reduceru u switchu   action.val
  };
};
