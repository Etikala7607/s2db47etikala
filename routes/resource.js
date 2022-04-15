var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var devil_controller = require('../controllers/devil'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/devil', devil_controller.devil_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/devil/:id', devil_controller.devil_delete); 
 
// PUT request to update Costume. 
router.put('/devil/:id', devil_controller.devil_update_put); 
 
// GET request for one Costume. 
router.get('/devil/:id', devil_controller.devil_detail); 
 
// GET request for list of all Costume items. 
router.get('/devil', devil_controller.devil_list); 
 
module.exports = router; 