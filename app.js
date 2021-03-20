var express=require('express')
var bodyParser=require('body-parser')
var app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var dbConfig=require('./config/database.config')
var mongoose=require('mongoose')

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("Successfull connected to the database");
}).catch(err=>{
    console.log('failed to connect to the database',err)
    process.exit()
})

require('./routes/user.routes')(app)


app.get('/',(req,res)=>{
    res.json({'message':'whatsapp dawgs'})
})

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Server is live Dawg");
})
