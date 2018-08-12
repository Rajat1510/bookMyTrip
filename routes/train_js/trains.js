const route = require('express').Router();

route.get('/',(req,res)=>{
    res.render('trains');
})
module.exports=route;