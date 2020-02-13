const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

require("./db.js");

//middleware

app.listen(4000, () => console.log("Ready on port 4000"));
