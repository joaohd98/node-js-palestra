const model = require('../models/inscricao-model');
const sql = require('../../connection/sql-connection');

exports.getViewInscricao = function(req, res) {

 sql.executeQuery(model.getViewInscricaoSQL(), function (data) {
  res.send(data);
 });

};

exports.callSpInscricao = function(req, res) {

 sql.executeQuery(model.callSpInscricaoSQL(req), function (data) {

   res.send(data)

 });


};


