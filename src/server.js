let express = require("express");
let bodyParser = require("body-parser");
let sql = require("mssql");
let app = express();

app.use(bodyParser.json());
app.use(require("./middleware/access-control"));

app.use(require("./api/routes/router").router);

app.listen(3030);


/*
//GET API
app.get("/api/user", function(req , res){
    var query = "select * from [user]";
    executeQuery (res, query);
});

//POST API
app.post("/api/user", function(req , res){
    var query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password”);
    executeQuery (res, query);
});

//PUT API
app.put("/api/user/:id", function(req , res){
    var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    executeQuery (res, query);
});

// DELETE API
app.delete("/api/user /:id", function(req , res){
    var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
    executeQuery (res, query);
});
*/
