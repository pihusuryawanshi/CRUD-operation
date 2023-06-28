import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./style.css"
import { Link, useNavigate } from 'react-router-dom';
import { deleteItem } from '../redux/features/itemSlice';

const ItemList = () => {
  const navigate = useNavigate();
  const items = useSelector(state => state.itemsSlice.items);
  console.log("items", items);
  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div>
      <h2>Item List</h2>
      {items?.length === 0 ? (
        <>
        <p className='no-data'>No items found.</p>
        <h4>Please Add Data</h4></>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Delete</th>
                <th>Edit</th>
                <th>Read</th>
              </tr>
            </thead>
            {items.map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                    <td><button onClick={() => navigate(`/items/${item.id}/edit`)}>Edit</button></td>
                    <td><Link to={`/items/${item.id}`}>View</Link></td>
                  </tr>
                </tbody>
              )
            })}
          </table>
        </div>
      )}
      <div>
        <Link to={"/items/create"}>Add Item</Link>
      </div>
    </div>
  );
};

export default ItemList;