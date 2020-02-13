const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/todo-list",
  { useNewUrlParser: true },
  err => {
    err ? console.log(err) : console.log("Connected to MongoDB");
  }
);

module.exports = mongoose;
