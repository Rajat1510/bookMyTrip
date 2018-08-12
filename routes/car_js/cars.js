const route = require('express').Router();

route.get('/',(req,res)=>{
    res.render('cars');
})
module.exports=route;