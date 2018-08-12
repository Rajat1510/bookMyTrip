const route = require('express').Router();

route.get('/',(req,res)=>{
    res.render('bus');
})
module.exports=route;