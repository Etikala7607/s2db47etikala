var Devil = require('../models/devil'); 
 
// List of all Devils 
exports.Devil_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Devil list'); 
}; 
 
exports.Devil_create_post = function(req,res){
    res.send('NOT IMPLEMENTS');
}
// for a specific Devil. 
exports.Devil_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Devil detail: ' + req.params.id); 
}; 
// Handle Devil delete form on DELETE. 
exports.Devil_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Devil delete DELETE ' + req.params.id); 
}; 
 
// Handle Devil update form on PUT. 
exports.Devil_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Devil update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.Devil_list = async function(req, res) { 
    try{ 
        theDevils = await Devil.find(); 
        res.send(theDevils); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.Devil_view_all_Page = async function(req, res) { 
    try{ 
        theDevils = await Devil.find(); 
        res.render('devil', { title: 'DEvil Search Results', results: theDevils }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.Devil_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Devil(); 
    document.name = req.body.name; 
    document.version = req.body.version; 
    document.type = req.body.type; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};