const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

require("./db.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/items", require("./controllers/items.js"));

app.listen(4000, () => console.log("Ready on port 4000"));
