const route = require('express').Router();

route.get('/',(req,res)=>{
    res.render('hotel');
})
module.exports=route;