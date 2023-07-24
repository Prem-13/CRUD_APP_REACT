import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



const Update = () => {
  
  const [data, setData] = useState([''])
  const {id} = useParams()
  const navigate = useNavigate()

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(()=> {
    axios.get('http://localhost:3000/user/' + id,)
    .then(res =>setValues(res.data))
    .catch(err => console.log(err))
         
   }, [id])
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3000/user/' + id, values)
    .then(res => setData(res.value))
    navigate('/')
  }


 


  return (
    <div className="p-2 w-50 border border-dark shadow-lg p-2 bg-body-tertiary rounded position-absolute top-50 start-50 translate-middle">
      <form className="d-flex p-2 flex-column" onSubmit={handleSubmit}>
        <h4>Update User</h4>

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
          Update
        </button>
      </form>

      <Link to={'/'}data style={{marginLeft:'150px', marginTop:'-80px'}} className="btn btn-sm btn-secondary me-2 w-25 p-2">
          Back
        </Link>
    </div>
  )
}

export default Update