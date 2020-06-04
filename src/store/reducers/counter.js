//reducer kao i uvijek prima 2 argumenta a to su prevState i action
//ovdje cemo takodjer postaviti i initialState i settati ga na ovaj argument state u reduceru
//tako da ne bude undefined

//sve constante smo storali u objekat actionTypes
//DOBRO DA IZBJEGNEMO MISSTYPING, sada kada bi pogrijesli u kucanju, vidjeli bismo tacno gdje je greska
import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        /*

//Eh ovako nije pravilno, This is not how we do it
//Na ovaj nacin mutiramo old State
//u ovom slucaju newState bi bio samo pokazivac na stari originalni State

const newState = state;
newState.counter = state.counter + 1;
returnnewState;

*/

        /*

*Moze se i ovako uraditi, ovo je isto tacno: immutable way, pravilno kloniranje objebta

 * const newState = Object.assign({}, state);
 * newState.counter = state.counter + 1;
 * return newState;
 
 */

        /*Ovo sa ...spreadOperatorom je najlaksi nacin kako da kloniramo neki objekat na immutable way */
        ...state,
        counter: state.counter + 1,
      };

    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });

    case actionTypes.SUB:
      return updateObject(state, { counter: state.counter - action.val });
    //state je stari objekat, a drugi argument je updatedValues koji je definisan u utility.js

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };
  }

  //Ako nije postavljen state ni preko jednog od ovih case-ova iznad. Onda ovaj stet ispod vraca initial state
  //ili onaj koji je bio i prije
  return state;
};

export default reducer;
