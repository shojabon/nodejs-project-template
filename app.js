let express = require('express');
let app = express();

app.use("/", require("./routes/index"));

app.listen(80);