import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const Login = () => {
    const navigation=useNavigate()
    const [email,setemail]=useState("")
    const [password,setpass]=useState("")
    useEffect(()=>{
        const outh=localStorage.getItem("user")
        if(outh){
    navigation("/home")
        }
      },[])
    const data=async()=>{
        // console.warn(name,email,pass);
        const result=await fetch("http://localhost:5000/login",{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                'content-type':'application/json'
            }
        })
        let data=await result.json();
        console.log(data)
        if(data.auth){
            localStorage.setItem("user",JSON.stringify(data.use))
        localStorage.setItem("token",JSON.stringify(data.auth))
        navigation("/home")
          }
        else{
            alert("Invalid User  Password")
        }
        // localStorage.setItem("user",JSON.stringify(data))
        // if(data){
        //    navigation('/home')
        // }
    }
  return (
   
    <div className="register">
      <h1>Login</h1>
      {/* <input  className="imputbox "  value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter Your Name" /> */}
      <input className="imputbox "  value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder="Enter your Email"  />
      <input  className="imputbox "  value={password} onChange={(e)=>setpass(e.target.value)} type="password" placeholder="Enter your password" />
    <button onClick={data}  className="button">Login</button>
    </div>
  )
}

export default Login
