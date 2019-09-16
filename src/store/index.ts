/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

let composeEnhancers: any = compose;

if (__DEV__) {
  // @ts-ignore __REDUX_DEVTOOLS_ がwindowに無い
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// const store = createStore(reducers, composeEnhancers(), compose(applyMiddleware(thunk)))
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
