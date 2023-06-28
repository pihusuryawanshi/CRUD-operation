import React, {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getItem} from "../redux/features/itemSlice"

const Item = ({ item }) => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const singleData = useSelector(state => state.itemsSlice.item)

  useEffect(() => {
    dispatch(getItem(param.id))
  },[])

  const handleRedirect = () => {
    navigate("/")
  }

  return (
    <div className='box-wrapper'>
      <h1>Detail View</h1>
      {singleData.length && singleData?.map((item, index) => {
        return (
          <ul>
            <li><p>First Name : <strong> {item.firstName} </strong></p></li>
            <li><p>Last Name : <strong>{item.lastName} </strong></p></li>
            <li><p>Email : <strong>{item.email}</strong></p></li>
            <li><p>Address : <strong>{item.address}</strong></p></li>
            <li><p>Phone : <strong>{item.phone}</strong></p></li>
          </ul>
        )
      })}
      <button onClick={handleRedirect}>Back</button>
    </div>
  );
};

export default Item;