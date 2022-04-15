var devil = require('../models/devil'); 
 
exports.devil_list = async function(req, res) { 
    try{ 
        thedevils = await devil.find(); 
        res.send(thedevils); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.devil_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.devil_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.devil_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.devil_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id); 
}; 