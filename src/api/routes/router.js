const express = require('express');
const router = express.Router();

require('./path/inscricao-route')(router);
require('./path/palestra-route')(router);
require('./path/tipo-categoria-route')(router);

module.exports.router = router;
