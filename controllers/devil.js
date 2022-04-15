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
exports.devil_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await devil.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};
 
// Handle Costume create on POST. 
exports.devil_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new devil(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.devil_name = req.body.devil_name;
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
// Handle Costume delete form on DELETE. 
exports.devil_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: devil delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.devil_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await devil.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.devil_name)  
               toUpdate.devil_name = req.body.devil_name; 
        if(req.body.version) toUpdate.version = req.body.version; 
        if(req.body.type) toUpdate.type = req.body.type; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 


exports.devil_view_all_Page = async function(req, res) { 
    try{ 
        thedevils = await devil.find(); 
        res.render('devil', { title: 'devil Search Results', results: thedevils }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 