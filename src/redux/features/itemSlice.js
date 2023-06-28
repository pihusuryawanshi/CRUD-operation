import { createSlice } from '@reduxjs/toolkit';
import { dummyData } from '../../Data';

const initialState = {
  items: dummyData,
  item: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    id: "",
  },
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    getItem: (state, action) => {
      state.item = state.items.filter(item => item.id == action.payload)
      // console.log("======>", state, action);
    },
    addItem: (state, action) => {
      // state.items = state.items.push(action.payload);
      state.items = [action.payload, ...state.items];
    },
    updateItem: (state, action) => {
      state.items =  state.items.map((item) => item.id == action.payload.id ? action.payload : item)
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const { addItem, updateItem, deleteItem, getItem } = itemsSlice.actions;
export default itemsSlice.reducer;