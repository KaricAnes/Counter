import * as actionTypes from "./actionsTypes";

/*ovo iznad sam moramo uraditi dsa bi u ovim fajlovima mogao korstiti : 

type: actionTypes.DECREMENT npr
*/

export const saveResult = (res) => {
  //const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res, //updatedResult
  };
};

//na storeResult-u ispod zelimo da simuliramo odlazak do servera
// i da se state updajtuje tek nakon odredjenog vremena
//dakle nakon dvije sekunde
//asinq kod

export const storeResult = (res) => {
  //return dispatch => {
  return (dispatch, getState) => {
    //-> executamo getState da dobijemo currentState
    setTimeout(() => {
      //saveResult ustvari updajtuje state, jer je tako definisano u reduceru
      const oldCounter = getState().kaunter.counter;
      //.kaunter.counter; potice iz kontejnera Vounter.js iz mapStateToprops; zahvaljuci ovom getState-u mogu doci do Countera iz state-a
      //a getState mozemo koristiti zahvaljuvi Redux Thunk-u
      //ovo se ne preporucuje previse za koristenje

      console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id,
    //resultElId se mora podudarati sa onim resultElId-em u reduceru u switchu
  };
};
