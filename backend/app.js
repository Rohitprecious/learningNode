const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const database = require("./utils/database");

const homeRoutes = require("./routes");

const port = process.env.PORT || 8084;
app.use(cors());

app.use(bodyParser.json());
app.use(homeRoutes);
// app.listen(8080, () => console.log("server started at 8080"));
const server = () => {
  app.listen(port, () => console.log("server started at 8080"));
};

database.mongoConnect(server);
