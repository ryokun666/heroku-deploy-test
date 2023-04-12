const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../frontend/out")));

app.get("/api", (req, res) => {
  res.json({ message: "APIとの連携に成功！" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/out/index.html"));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
