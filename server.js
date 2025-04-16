const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/climate-crisis", (req, res) => {
    res.send(`<h1>Climate Crisis</h1><a href="https://github.com/BinaryFallow/Climate-Crisis.git" target="_blank">View Assignment Repo</a>`);
  });
app.get("/typesetting", (req, res) => {
    res.send(`<h1>Typesetting</h1><a href="https://github.com/BinaryFallow/typesetting.git" target="_blank">View Assignment Repo</a>`);
  });
app.get("/four-algorithms", (req, res) => {
    res.send(`<h1>Four Algorithms</h1><a href="https://github.com/BinaryFallow/four-algorithms.git" target="_blank">View Assignment Repo</a>`);
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
