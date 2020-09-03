import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { getFirebase } from 'react-redux-firebase'

const middlewares = [thunk.withExtraArgument(getFirebase)];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);

export default store;
