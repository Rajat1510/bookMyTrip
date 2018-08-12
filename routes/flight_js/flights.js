const route = require('express').Router();

route.get('/',(req,res)=>{
    res.render('flights');
})
module.exports=route;