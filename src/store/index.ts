import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const composeEnhancers = compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
