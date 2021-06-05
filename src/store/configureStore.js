import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import photo from "./photo";

const reducer = combineReducers({ photo });
const middleware = [...getDefaultMiddleware()];

const store = configureStore({ reducer, middleware });

export default store;
