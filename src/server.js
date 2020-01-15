let express = require("express");
let bodyParser = require("body-parser");
let app = express();
var cors = require('cors');

app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.use(require("./api/routes/router").router);

app.listen(process.env.PORT || 3030);
