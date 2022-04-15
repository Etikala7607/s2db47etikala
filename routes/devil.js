var express = require('express');
const devil_controlers= require('../controllers/devil'); 
var router = express.Router();

/* GET home page. */
router.get('/', devil_controlers.devil_view_all_Page ); 

module.exports = router;
