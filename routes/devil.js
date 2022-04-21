var express = require('express');
const devil_controlers= require('../controllers/devil'); 
var router = express.Router();

/* GET home page. */
router.get('/', devil_controlers.devil_view_all_Page ); 

router.get('/detail', devil_controlers.devil_view_one_Page);
router.get('/create', devil_controlers.devil_create_Page); 
router.get('/update', devil_controlers.devil_update_Page);
router.get('/delete', devil_controlers.devil_delete_Page);

module.exports = router;
