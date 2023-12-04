require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

require("./routes/api/index.api")(app);

require("./error-handling")(app);

module.exports = app;
