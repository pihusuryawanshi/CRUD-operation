import React from 'react';
import './App.css';
import ItemList from './component/itemList';
import ItemForm from './component/itemForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditItemForm from './component/editItemForm';
import Item from './component/item';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/items/create" element={<ItemForm />} />
            <Route path="/items/:id" element={<Item />} />
            <Route path="/items/:id/edit" element={<EditItemForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
