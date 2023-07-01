import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Add = () => {
    const navigation = useNavigate();
    const [name,setname]=useState("")
    const [price,setprice]=useState("")
    const [category,setcategory]=useState("")
    // const [id,setid]=useState("")
    const [company,setcompany]=useState("")
    const [error,seterror]=useState("")
    // const navigation = useNavigate();

//   useEffect(()=>{
//     const outh=localStorage.getItem("user")
//     if(outh){
// navigation("/")
//     }
//   },[])
    const data=async()=>{
        if(!name || !price || !category || !company){
            seterror(true);
            return false;
        }
        const userId=JSON.parse(localStorage.getItem("user"))._id;
        const result=await fetch("http://localhost:5000/add-product",{
            method:"POST",
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                'content-type':'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        let data=await result.json();
        console.log(data)
        // localStorage.setItem("user",JSON.stringify(data))
        // if(data){
        //    navigation('/home')
        // }
    }
  return (
    <div className="register">
    <h1>ADD-Product</h1>
    <input  className="imputbox "  value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter Your Name" />
   { error && !name && <span className="invalid">Enter valid name</span>}
    <input className="imputbox "  value={price} onChange={(e)=>setprice(e.target.value)} type="text" placeholder="Enter your Price"  />
    { error && !price && <span className="invalid">Enter valid price</span>}
    <input  className="imputbox "  value={category} onChange={(e)=>setcategory(e.target.value)} type="text" placeholder="Enter your Category" />
    { error && !category && <span className="invalid">Enter valid category</span>}
    {/* <input  className="imputbox "  value={id} onChange={(e)=>setid(e.target.value)} type="text" placeholder="Enter your Id" /> */}
    <input  className="imputbox "  value={company} onChange={(e)=>setcompany(e.target.value)} type="text" placeholder="Enter your Company" />
    { error && !company && <span className="invalid">Enter valid company</span>}
  <button onClick={data}  className="button">Add Product</button>
  </div>
  )
}

export default Add
