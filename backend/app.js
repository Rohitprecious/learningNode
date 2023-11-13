const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const homeRoutes = require("./routes");
app.use(cors());

app.use(bodyParser.json());
app.use(homeRoutes);
app.listen(8080, () => console.log("server started at 8080"));
