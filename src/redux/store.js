import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./reducer";

export default configureStore({
  reducer: {
    currentNumber: numberReducer,
  },
});
