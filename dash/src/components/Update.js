import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
const Update = () => {
    const navigate=useNavigate()
    const [name,setname]=useState("")
    const [price,setprice]=useState("")
    const [category,setcategory]=useState("")
    // const [id,setid]=useState("")
    const [company,setcompany]=useState("")
    const data=async()=>{
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
              }
        })
        result=await result.json();
        setname(result.name);
        setprice(result.price);
        setcategory(result.category);
        setcompany(result.company)
    }
    const params=useParams()
    useEffect(()=>{
       data();
    },[])
    const updatedata=async()=>{
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"Put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'content-type':"application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        result=await result.json();
        console.log(result)
        navigate("/home")
    }
  return (
    <div className="register">
    <h1>Update-Product</h1>
    <input  className="imputbox "  value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter Your Name" />
   {/* { error && !name && <span className="invalid">Enter valid name</span>} */}
    <input className="imputbox "  value={price} onChange={(e)=>setprice(e.target.value)} type="text" placeholder="Enter your Price"  />
    {/* { error && !price && <span className="invalid">Enter valid price</span>} */}
    <input  className="imputbox "  value={category} onChange={(e)=>setcategory(e.target.value)} type="text" placeholder="Enter your Category" />
    {/* { error && !category && <span className="invalid">Enter valid category</span>} */}
    {/* <input  className="imputbox "  value={id} onChange={(e)=>setid(e.target.value)} type="text" placeholder="Enter your Id" /> */}
    <input  className="imputbox "  value={company} onChange={(e)=>setcompany(e.target.value)} type="text" placeholder="Enter your Company" />
    {/* { error && !company && <span className="invalid">Enter valid company</span>} */}
  <button onClick={updatedata}  className="button">Update Product</button>
  </div>
  )
}

export default Update
