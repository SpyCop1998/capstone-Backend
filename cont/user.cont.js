var User=require('../models/user.model')

exports.create=(req,res)=>{
    if(!req.body.name && !res.body.mobile){
        return res.status(400).send({
            message:"User can not be empty"
        })
    }

    var user=new User({
        name:req.body.name,
        mobile:req.body.mobile,
        latt:req.body.latt,
        long:req.body.long,
        profession:req.body.profession,
        // valid:false
    })

    user.save().then(data=>{
        // res.sendStatus(201)
        res.status(201).send(data)
        // res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Failed"
        })
    })
}

exports.findAll=(req,res)=>{
    User.find().then(users=>{
        res.status(201).send(users)
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Failed"
        })
    })
}

// exports.AllowUser=(req,res)=>{

// }