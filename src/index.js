const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();
const port = 3005;

app.use(morgan("combined"));

app.engine("handlebars", engine());
app.set("view engine ", "handlebars");
app.set("views", path.join(__dirname, "/resources/views"));

console.log("path:", __dirname + "/resource/views");

app.get("/", (req, res) => {
  return res.render("home");
});

// 127.0.0.1 - local host 3005
app.listen(
  port,
  console.log(`Example app listening at http://localhost:${port}`)
);