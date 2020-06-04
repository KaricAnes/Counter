import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import thunk from "redux-thunk"; //bez thunk-a u index.js-u javlja gresku da fali midlleware

//Preko ovoga mergamo dva reducera u jedan:
const rootReducer = combineReducers({
  kaunter: counterReducer,
  rezultat: resultReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //ReduxDevTools

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(/*logger,*/ thunk))
); // konektovanje middleware sa storom

//Provider je helper component koja nam omogucava da injectamo nas store
//u React componente
//Da bismo povezali nasu Provider komponentu sa nasim storom ovdje,
//Moramo mu dodati special property store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
