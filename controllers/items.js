let db_items = require("../models/items.js");

const router = require("express").Router();

router.post("/", (req, res) => {
  db_items.create(req.body).then(response => {
    res.send(response);
  });
});

router.get("/", (req, res) => {
  db_items.find(req.body).then(response => {
    res.send(response);
  });
});

router.patch("/:id", (req, res) => {
  db_items
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(response => {
      res.send(response);
    });
});

module.exports = router;
