import { configureStore } from "@reduxjs/toolkit";
import userinforeducer from "../features/userinfoSlice"
const store = configureStore({
  reducer: userinforeducer,
});

export default store;
