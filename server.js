//
import db from "./db.js";
//

const port = process.env.PORT || 8000;

// initate express app
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(db);
});

app.listen(port, () => console.log(`app running on port:${port}`));
