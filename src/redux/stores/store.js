import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer, 
  middleware: [thunk, ...getDefaultMiddleware()],  
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;





