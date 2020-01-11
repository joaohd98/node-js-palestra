const controller = require('../../controllers/tipo-categoria-controller');

module.exports = function (router) {

  router.get('/tipo-categoria', function (req, res) {
    controller.getViewTipoCategoria(req, res)
  });

};
