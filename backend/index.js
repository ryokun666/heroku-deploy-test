const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.send("Hello World!うぇーい！");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
