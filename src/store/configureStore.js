import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import photo from "./photo";
import token from "./token";
import user from "./user";

const reducer = combineReducers({ photo, token, user });
const middleware = [...getDefaultMiddleware()];

const store = configureStore({ reducer, middleware });

export default store;
