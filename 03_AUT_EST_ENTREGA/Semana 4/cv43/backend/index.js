const express = require("express");
const path = require("path");

const app = express();
const port = 5454;

app.use(express.static('../frontend'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});