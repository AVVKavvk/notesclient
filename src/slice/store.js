import { configureStore } from "@reduxjs/toolkit";
import appConfigReducer from "./appConfigSlice";

export default configureStore({
  reducer: {
    appConfigReducer,
  },
});
