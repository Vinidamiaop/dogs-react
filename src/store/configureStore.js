import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

const contador = () => 0;

const reducer = combineReducers({ contador });
const middleware = [...getDefaultMiddleware()];

const store = configureStore({ reducer, middleware });

export default store;
