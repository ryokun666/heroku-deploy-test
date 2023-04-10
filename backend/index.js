const express = require("express");
const app = express();
const port = process.env.PORT || 3001;


app.get("/", (req, res) => {
  res.send("Hello World!うぇーいa！!");
});

app.get("/api", (req, res) => {
  res.json({ message: "はろーわーるど!" });
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
