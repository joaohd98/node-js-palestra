const model = require('../models/palestra-model');
const sql = require('../../connection/sql-connection');

exports.getViewPalestra = function(req, res) {

  sql.executeQuery(model.getViewPalestraSQL(), function (data) {
    res.send(data);
  });


};
