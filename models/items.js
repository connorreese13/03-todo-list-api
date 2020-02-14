const mongoose = require("mongoose");

let Items = mongoose.model("items", {
  name: String,
  done: Boolean
});

module.exports = Items;
