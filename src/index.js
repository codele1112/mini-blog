const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3005;

const route = require("./routes");
app.use(morgan("combined"));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine ", "hbs");
app.set("views", path.join(__dirname, "/resources/views"));

console.log("path:", __dirname + "/resource/views");
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// routes init
route(app);

// 127.0.0.1 - local host 3005
app.listen(
  port,
  console.log(`Example app listening at http://localhost:${port}`)
);
