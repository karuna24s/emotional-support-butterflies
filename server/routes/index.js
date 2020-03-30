const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;
