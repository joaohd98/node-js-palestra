module.exports = function (router) {

  const controller = require('../../controllers/inscricao-controller');

  router.get('/inscricao', function (req, res) {
    controller.getViewInscricao(req, res)
  });

  router.post('/inscricao', function (req, res) {
    controller.callSpInscricao(req, res)
  });

};
