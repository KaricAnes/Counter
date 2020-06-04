import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

//increment je funkcija

class Counter extends Component {
  state = {
    objekat: {
      ime: "Anes",
    },
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr /*this.state.counter */} />
        <CounterControl
          label="Increment"
          clicked={
            this.props
              .onIncrementCounter /*() => this.counterChangedHandler( 'inc' )*/
          }
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Subtract 15" clicked={this.props.onSubCounter} />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />

        <hr />
        <button
          style={{ margin: "0 auto", display: "block" }}
          onClick={() => this.props.onStoreResult(this.props.ctr)}
        >
          STORE RESULT
        </button>

        <ul>
          {this.props.storedResults.map((str) => (
            <div>
              <li
                key={str.id}
                onClick={() => this.props.onDeleteResult(str.id)}
              >
                {str.value}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
/*dobro mu je dati ovo ime, jer se ono obicno i koristi, ima ga na raznim tutorijalima: mapStateToProps
ovdje definsiemo state koji zelimo dobiti sa naseg store-a
A state koji je storan u Reduxu je onaj koji je postavljen u reduceru. A reducer i store su povezani u index.js-u.
mapStateToProps je funkcija koja ocekuje state stored in Redux
*/

//1. konfiguracija
const mapStateToProps = (state) => {
  return {
    //eh sad je u ovaj ctr postavljen counter iz reducera
    //kaunter, rezultat poticu iz index.js-a iz merganja 2 reducera,sprjecava name konflikte
    ctr: state.kaunter.counter,
    storedResults: state.rezultat.results,
  };
};

//2. konfiguracija

/*Akcije salju podatke na reducer.js
Salju mu type i ostale propertije(optional)*/

const mapDispatchToProps = (dispatch) => {
  return {
    //returnat cemo JS objekat u kojem mozemo definisati neke prop names
    //koji ce cuvati u sebi reference to a function koja ce biti executana da izvrsi action
    //Mozemo izabraty prop name po zelji
    //sada ovaj prop cuvavalue, a taj value treba da bude anonymus function
    //ova funkcija ce od sada biti dostupna preko ovog prop name-a: onIncrementCounter
    //Mi sada ovu prop: onIncrementCounter mozemo vezati npr. za onClick() neki. I kada god kliknemo na
    //njega, ova dispatch funkcija ce se okinuti.
    //ovo type imam objasnjeno u redux-basics.js
    //Sa typom sam dobio property increment npr., koji mugu koristiti i usvom containeru
    //Tacnije, to cumoci uraditi kada proslijedim ovu funkciju kao 2. argument u connect

    //onIncrementCounter: ()=> dispatch({type: actionTypes.INCREMENT}),
    //ovo ispod je novi nacin rada sa akcijama, a ovo iznad stari. Akciju dole odmah i executamo sa ()

    onIncrementCounter: () => dispatch(actionCreators.increment()),

    onDecrementCounter: () => dispatch(actionCreators.decrement()),

    onSubCounter: () => dispatch(actionCreators.sub(15)),

    //Cesto se koristi payload umjesto ovog val. Mozemo imati koliko god zelim propertya poered typa
    //Ovom valu pristupamo preko action.val u reducer.js-u
    onAddCounter: () => dispatch(actionCreators.add(10)),

    //value u payloadu bi trebala biti trenutna vrijednost Countera
    //payload nismo morali slati jer imamo vec u reduceru state i u njemu counter
    onStoreResult: (resul) => dispatch(actionCreators.storeResult(resul)),

    //payload mora iamti isto ime u reduceru i u akciji ovdje
    onDeleteResult: (idAAA) => dispatch(actionCreators.deleteResult(idAAA)),
  };
};

//connect je funkcija koja vraca HOC - higher order comp
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//Ako nam treba samo dispatch akcije, a ne treba nam nikakav slice of data onda uradimo ovako
//export default connect(null, mapDispatchToProps)(Counter);

//Ako nemamo akcija u svom containeru nikako ostavimo ovako
//export default connect(mapStateToProps)(Counter);
