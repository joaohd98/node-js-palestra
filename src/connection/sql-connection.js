const sql = require("mssql");

const SqlConstants = {
    server: "sql-server-palestra-back-end.database.windows.net",
    dataBase: "SQLServer-back-end",
    user: "SQLServer",
    password: "teste@2019"
};

const connStr = `
    Server=${SqlConstants.server};
    Database=${SqlConstants.dataBase};
    User Id=${SqlConstants.user};
    Password=${SqlConstants.password};
    encrypt=true;
`;


exports.executeQuery = function(query, callback){
    sql.connect(connStr, function (err) {
        if (err) {
            console.log("Error while connecting database :- " + err);
            callback(err);
        }
        else {
            // create Request object
            let request = new sql.Request();
            // query to the database
            request.query(query, function (err, value) {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    callback(err);
                }

                else
                    callback(value['recordsets'][0]);

            });
        }
    });
};

