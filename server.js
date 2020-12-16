require("dotenv").config();

const port = process.env.PORT || 8000;

// initate express app
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => console.log(`app running on port:${port}`));
