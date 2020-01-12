let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.json());
app.use(require("./middleware/access-control"));

app.use(require("./api/routes/router").router);

app.listen(process.env.PORT || 3030);
