// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
  const navigation=useNavigate()
  const outh=localStorage.getItem("user")
  const logout=()=>{
    localStorage.clear();
    navigation("/sign");

  }
  return (
    <div>
      { outh?<ul className="list">
        <li><Link to="/home">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link to="/update">Update Products</Link></li>
        {/* <li><Link to="/logout">Logout</Link></li> */}
        <li><Link to="/profile">Profile</Link></li>
        <li><Link onClick={logout} to="/sign">Logout ({JSON.parse(outh).name})</Link></li>
        </ul>:
        <ul className="list right">
          <li><Link to="/sign">Sign UP</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
}
    </div>
  )
}

export default Nav
