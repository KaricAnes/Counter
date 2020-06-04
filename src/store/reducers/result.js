/*reducer kao i uvijek prima 2 argumenta a to su prevState i action
ovdje cemo takodjer postaviti i initialState i settati ga na ovaj argument state u reduceru
tako da ne bude undefined

sve constante smo storali u objekat actionTypes
DOBRO DA IZBJEGNEMO MISSTYPING, sada kada bi pogrijesli u kucanju, vidjeli bismo tacno gdje je greska*/

import * as actionTypes from "../actions/actionsTypes";

import { updateObject } from "../utility";

const initialState = {
  //initially empty array
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result * 2,
        }),
      });

    /*concat vraca novi array koji je stari array plus argument koji dodamo u concat,
     concat je immutable way updajtovanja arraya by adding an item.
     push manipulira sa originalnim value-om, sa pushom bismo dirali originalne results propertije u originalnom state-u cak i sa 
     spread operatorima. Push se ne preporucuje u ovim slucajevima nikako.
     */

    case actionTypes.DELETE_RESULT:
      /*
      filter metoda ne dira stari, nego vraca novi array
      filter uzima function kao input, a ta funkcija je executana na svaki element u arrayu
       a zove se filter zato sto odluci za svaki element da li je prosao kroz funkciju i zaodovoljio
      i da li zasluzuje da bude clan tog novog Arraya: newArray2
      ovo result je input, mozemo ga nazvati kako zelimo, bukvalno clan starog arraya
      a onda na drugom mjestu moramo vratiti true ili false
      ovo dole unutar filtera je skracena arrow funkcija, ne moramo pisati return
      ako napisemo true, onda ce filter vratiti svaki clan i samo cemo napraviti kopiju originalnog: const newArray = [...state.results] eh ovo 
      Mi ne zelimo da nam vrati true za svaki elmenat, nego samo za one koji nemaju odredjeni id(id elementa koji ce biti deleted)
      const newArray2 = state.results.filter(result => true);
      dodaj result u newArray2 ako je id starog elemnta drugaciji od id-a onog koji je stigao preo payloada preko akcije
      ovaj result je elemenat iz originalnog state-a iz rezultata
      action.resultElId dolazi iz akcije preko payloada
      */

      const newArray2 = state.results.filter(
        (result) => result.id !== action.resultElId
      );

      return {
        ...state,
        results: newArray2,
      };
  }

  /*Ako nije postavljen state ni preko jednog od ovih case-ova iznad. Onda ovaj stet ispod vraca initial state
  ili onaj koji je bio i prije*/
  return state;
};

export default reducer;
