var Devil = require('../models/devil'); 
 
// List of all Devils 
exports.Devil_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Devil list'); 
}; 
 
// for a specific Devil. 
exports.Devil_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Devil detail: ' + req.params.id); 
}; 
 
// Handle Devil create on POST. 
exports.Devil_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Devil create POST'); 
}; 
 
// Handle Devil delete form on DELETE. 
exports.Devil_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Devil delete DELETE ' + req.params.id); 
}; 
 
// Handle Devil update form on PUT. 
exports.Devil_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Devil update PUT' + req.params.id); 
}; 