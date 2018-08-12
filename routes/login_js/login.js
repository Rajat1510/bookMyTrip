const route = require('express').Router();

route.get('/',(req,res)=>{
    res.render('Login');
})
module.exports=route;