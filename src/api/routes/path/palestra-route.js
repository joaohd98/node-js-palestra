const controller = require('../../controllers/palestra-controller');

module.exports = function (router) {

  router.get('/palestra', function (req, res) {
    controller.getViewPalestra(req, res)
  });

};
