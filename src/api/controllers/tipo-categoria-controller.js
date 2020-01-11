const model = require('../models/tipo-categoria-model');
const sql = require('../../connection/sql-connection');

exports.getViewTipoCategoria = function(req, res) {

  sql.executeQuery(model.getViewTipoCategoriaSQL(), function (data) {
    res.send(data);
  });

};
