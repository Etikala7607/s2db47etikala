var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Devil_controller = require('../controllers/devil'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Devil ROUTES /// 
 
// POST request for creating a Devil.  
router.post('/devils', Devil_controller.Devil_create_post); 
 
// DELETE request to delete Devil. 
router.delete('/devils/:id', Devil_controller.Devil_delete); 
 
// PUT request to update Devil. 
router.put('/devils/:id', Devil_controller.Devil_update_put); 
 
// GET request for one Devil. 
router.get('/devils/:id', Devil_controller.Devil_detail); 
 
// GET request for list of all Devil items. 
router.get('/devils', Devil_controller.Devil_list); 
 
module.exports = router; 