const mongoose = require("mongoose");

// module.exports = mongoose.model("items", {
//   name: "Bob Ross",
//   done: true
// });

let Items = mongoose.model("items", {
  name: String,
  done: Boolean
});

module.exports = Items;

//module.exports = mongoose.model();
