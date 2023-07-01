 const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true",{
    dbName:"dash-board"
}).then(()=>{
    console.log("connect")
}).catch((e)=>{
console.log(e)
}) 