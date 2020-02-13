let db_items = require("../models/items.js");

const router = require("express").Router();

router.post("/items", (req, res) => {
  //db_items.create({ name: "Bob", done: true });
  console.log(req.body);
});
