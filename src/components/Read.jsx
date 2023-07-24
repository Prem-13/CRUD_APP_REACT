import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Read = () => {
  const [data, setData] = useState([''])
  const {id} = useParams()

  useEffect(()=> {
    axios.get('http://localhost:3000/user/' + id)
    .then(res =>setData(res.data))
    .catch(err => console.log(err))
         
   }, [id])

  return (
    <div className="m-1 p-4 container border border-secondary-subtle w-50 position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <h3>Details of the user</h3>
      <div className='m-1'>
         <strong>Name:{data.name}</strong>
      </div>
      <div className='m-1'>
         <strong>Email:{data.email}</strong>
      </div>
      <div className='m-1'>
         <strong>Phone:{data.phone}</strong>
      </div>
       
       <Link to={`/update/${id}`} className='btn btn-success me-2 m-1'>Edit</Link>
       <Link to={'/'} className='btn btn-primary'>back</Link>

    </div>
  )
}

export default Read