import React from 'react'
import {Navigate,Outlet} from "react-router-dom"
import {useNavigate} from 'react-router-dom';
const Private = () => {
    const navigation = useNavigate();
    const outh=localStorage.getItem("user")
  return outh?<Outlet/>: navigation('/sign')
}

export default Private
