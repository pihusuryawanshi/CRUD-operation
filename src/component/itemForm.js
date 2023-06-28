import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../redux/features/itemSlice';

const ItemForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        id: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem({ id: Date.now(), firstName: formData.firstName, lastName: formData.lastName, email: formData.email, address: formData.address, phone: formData.phone }));
        setFormData('');
        navigate("/");
    };

    return (
        <div className='box-wrapper'>
            <h1>Add Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        value={formData.firstName}
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
                        placeholder="Phone"
                    />
                </div>
                <button type="submit">Add Item</button>
                <button onClick={()=>navigate(`/`)}>Back</button>
            </form>
        </div>
    );
};

export default ItemForm;
