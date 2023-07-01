const express=require('express')
require('./db/config')
const cors=require("cors")
const jwt=require("jsonwebtoken")
const user = require("./db/user")
const product = require("./db/product")
const key="dash"
const app=express();
app.use(express.json());
app.use(cors())
app.post("/register",async(req,res)=>{
    const{name,email,password}=req.body;
    let use=new user(req.body)
    let result=await use.save()
    // const use=await user.create({name,email,password})
    result=use.toObject();
    delete result.password
    // console.log(use)
    jwt.sign({result},key,{expiresIn:"2h"},(error,token)=>{
        if(error){
            res.send({result:'No User Found'})   
        }
        res.send({result,auth:token})
    })
    // res.send(result)
})
app.post("/login",async(req,res)=>{
    let use=await user.findOne(req.body).select("-password")
    if(use){
        // res.send(use);
        jwt.sign({use},key,{expiresIn:"2h"},(error,token)=>{
            if(error){
                res.send({result:'No User Found'})   
            }
            res.send({use,auth:token})
        })
    }
    else{
        res.send({result:'No User Found'})
    }
// res.send(use) 
})
app.post("/add-product",verify,async(req,res)=>{
let use=new product(req.body);
let result=await use.save();
res.send(result)
})
app.get("/all-products",verify,async(req,res)=>{
let use=await product.find()
if(use.length>0){
    res.send(use);
}
else{
    res.send({result:"No products found"})
}
})
app.delete("/product/:id",verify,async(req,res)=>{
const result=await product.deleteOne({_id:req.params.id})
    res.send(result)
})
app.get("/product/:id",verify,async(req,res)=>{
let result=await product.findOne({_id:req.params.id})
if(res){
    res.send(result)
}
else{
    res.send({result:"No records found"})
}
})
app.put("/product/:id",verify,async(req,res)=>{
    let result=await product.updateOne(
        {_id:req.params.id},
        {$set:req.body}
    )
    res.send(result)
})
app.get("/search/:key",verify,async(req,res)=>{
    let result=await product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {price:{$regex:req.params.key}},
        ]
    })
    res.send(result)
})
function verify(req,res,next){
    let token=req.headers['authorization']
    if(token){
token=token.split(" ")[1]
// console.log(token[1])
jwt.verify(token,key,(error,sucess)=>{
if(error){
    res.status(401).send("plaese rovide vail token")
}
else{
next();
}
})
    }
    else{
res.status(401).send("plaese add token with header")
    }
    // console.log("verify",token)
    // next()
}
app.listen(5000,()=>{
    console.log("connect")
})