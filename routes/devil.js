var express = require('express');
const devil_controlers= require('../controllers/devil'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', devil_controlers.devil_view_all_Page ); 

router.get('/detail', devil_controlers.devil_view_one_Page);
router.get('/create', secured, devil_controlers.devil_create_Page); 
router.get('/update', secured, devil_controlers.devil_update_Page);
router.get('/delete', secured, devil_controlers.devil_delete_Page);

module.exports = router;
