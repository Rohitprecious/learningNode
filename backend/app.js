const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoConnect = require("./utils/database");

const homeRoutes = require("./routes");
app.use(cors());

app.use(bodyParser.json());
app.use(homeRoutes);
// app.listen(8080, () => console.log("server started at 8080"));

mongoConnect((client) => {
  console.log({ client });
  app.listen(process.env.PORT, () => console.log("server started at 8080"));
});
