import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {getItem, updateItem} from "../redux/features/itemSlice"

const EditItemForm = () => {
  const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const singleData = useSelector(state => state.itemsSlice.item)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        // id: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    useEffect(() => {
      dispatch(getItem(param.id))
    },[])

    const fId = singleData.length && singleData?.map((item)=> item.id);
    const fName = singleData.length && singleData?.map((item)=> item.firstName);
    const fLname = singleData.length && singleData?.map((item)=> item.lastName);
    const fAddress = singleData.length && singleData?.map((item)=> item.address);
    const fPhone = singleData.length && singleData?.map((item)=> item.phone);
    const fEmail = singleData.length && singleData?.map((item)=> item.email);

    useEffect(() => {
      setFormData({
        firstName: fName?.toString(),
        lastName: fLname?.toString(),
        email: fEmail?.toString(),
        address: fAddress?.toString(),
        phone: fPhone?.toString(),
        id: fId?.toString(),
      });
    }, [singleData]);

    // console.log("formData", singleData.map((item)=> item.firstName));
    console.log("formData",formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getItem(param.id))
        dispatch(updateItem({ id: formData.id, firstName: formData.firstName, lastName: formData.lastName, email: formData.email, address: formData.address, phone: formData.phone}));
        setFormData('');
        navigate("/");
    };

    return (
        <div className='box-wrapper'>
            <h1>Edit Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        value={formData.firstName}
                        id='firstName'
                        onChange={(e) => handleChange(e)}
                        name="firstName"
                        placeholder="First Name"
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={formData.lastName}
                        id='lastName'
                        onChange={(e) => handleChange(e)}
                        name="lastName"
                        placeholder="Last Name"
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        name="email"
                        id='email'
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleChange(e)}
                        name="address"
                        id='address'
                        placeholder="Address"
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => handleChange(e)}
                        name="phone"
                        id='phone'
                        placeholder="Phone"
                    />
                </div>
                <button type="submit">Update Item</button>
                <button onClick={()=>navigate(`/`)}>Back</button>
            </form>
        </div>
    );
};

export default EditItemForm;
