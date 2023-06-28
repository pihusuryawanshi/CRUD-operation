import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from "./features/itemSlice"


const store = configureStore({
  reducer: {
    itemsSlice : itemsSlice
  },
});

export default store;