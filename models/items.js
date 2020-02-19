const mongoose = require("mongoose");

let Items = mongoose.model("items", {
  name: {
    type: String,
    required: [true, "name is required"]
  },
  done: {
    type: Boolean,
    default: true
  }
});

module.exports = Items;
