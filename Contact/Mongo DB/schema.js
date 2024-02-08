const mongoose = require('mongoose');
const schema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Email:{
        type:Array,
        required:true
    },
    DOB:{
        type:Array,
        required:true
    },
})

module.exports=mongoose.model('Sri',schema)