let db_items = require("../models/items.js");

const router = require("express").Router();

router.post("/", (req, res) => {
  db_items.create(req.body).then(response => {
    res.send(response);
  });
});

module.exports = router;
