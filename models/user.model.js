var mongoose=require('mongoose')
var UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
        
    },
    latt:{
        type:String,
        required:true
    },
    long:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    }
    // valid:{
    //     type:Boolean,
    //     required:true
    // }
})

module.exports=mongoose.model('User',UserSchema)