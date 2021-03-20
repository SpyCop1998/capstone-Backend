module.exports=(app)=>{
    var users=require('../cont/user.cont.js')

    app.post('/users',users.create)

    app.get('/users',users.findAll)

}