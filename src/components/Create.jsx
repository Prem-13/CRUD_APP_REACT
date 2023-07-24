import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/user', values)
    .then(res => setValues(res))
    navigate('/')
  }

  return (
    <div className="p-2 w-50 border border-dark shadow-lg p-2 bg-body-tertiary rounded position-absolute top-50 start-50 translate-middle">
      <form className="d-flex p-2 flex-column" onSubmit={handleSubmit}>
        <h4>Add a User</h4>

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          className="w-75 m-2"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          className="w-75 m-2"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <label>Phone</label>
        <input
          type="text"
          placeholder="Enter Phone"
          className="w-75 m-2"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-sm btn-success w-25 p-2"
        >
          Submit
        </button>
      </form>

      <Link to="/" style={{marginLeft:'150px', marginTop:'-80px'}} className="btn btn-sm btn-secondary me-2 w-25 p-2">
          Back
        </Link>
    </div>
  );
};

export default Create;
