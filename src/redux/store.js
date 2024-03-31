import { configureStore } from "@reduxjs/toolkit";
import categoryDataReducer from "./slices/categorySlice";

export default configureStore({
  reducer: {
    categoryDataReducer,
  },
});
