const route = require('express').Router();

route.get('/',(req,res)=>{
    res.render('SignUp');
})
module.exports=route;