const express = require('express');
const app=express();
var cors = require('cors')
const mongoose = require('mongoose');
const Sri = require('./schema');
mongoose.set('strictQuery', true);
app.use(express.json());
app.use(cors())
mongoose.connect('mongodb://localhost:27017/ContactDetails',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('DB Connected');
    }
})
app.get('/',async(req,res)=>{
   const a= await Sri.find();
   res.json(a)
})
app.post('/',async(req,res)=>{
    const a= await Sri({
        Name:req.body.Uname,
        Phone:req.body.PhNum,
        Email:req.body.email,
        DOB:req.body.Dob
    })
    a.save()
    res.json(a)
})
app.get('/:id',async(req,res)=>{
    const{id}= req.params;
    const a= await Sri.findById(id);
    res.json(a)
})
app.delete('/:id',async(req,res)=>{
    const {id}= req.params;
    await Sri.findByIdAndDelete(id);
    res.json("Deleted")
})
app.put('/:id',async(req,res)=>{
    const{id}=req.params;
    const a= await Sri.findById(id)
    a.Name= req.body.Uname;
    a.Phone=req.body.PhNum;
    a.Email=req.body.email;
    a.dob=req.body.Dob;
    a.save()
    res.json("Updated")
})
app.listen(222,()=>console.log("Running!"))