import React, { useState } from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css';
const Signup = () => {
    const navigation = useNavigate();
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpass]=useState("")
    // const navigation = useNavigate();
  useEffect(()=>{
    const outh=localStorage.getItem("user")
    if(outh){
navigation("/")
    }
  },[])
    const data=async()=>{
        // console.warn(name,email,pass);
        const result=await fetch("http://localhost:5000/register",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{
                'content-type':'application/json'
            }
        })
        let data=await result.json();
        console.log(data)
        localStorage.setItem("user",JSON.stringify(data.result))
        localStorage.setItem("token",JSON.stringify(data.auth))
       navigation("/home")
    }
  return (
    // const [name,setname]=useState("")
    <div className="register">
      <h1>Register</h1>
      <input  className="imputbox "  value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter Your Name" />
      <input className="imputbox "  value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder="Enter your Email"  />
      <input  className="imputbox "  value={password} onChange={(e)=>setpass(e.target.value)} type="password" placeholder="Enter your password" />
    <button onClick={data}  className="button">Sign Up</button>
    </div>
  )
}

export default Signup
