import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='container d-flex justify-content-around mt-5 bg-light p-5 rounded-5 fs-1 '>
      <Link className='text-decoration-none' to="/">Home</Link>
      {/* <Link to="/edit">Edit</Link> */}
      <Link className='text-decoration-none' to="/form">Form</Link>
    </div>
  )
}

export default Navbar
