const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");

const app = express();
const port = 3005;

const route = require("./routes");
const db = require("./config/db");

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine ", "hbs");
app.set("views", path.join(__dirname, "/resources", "views"));

console.log("path:", __dirname + "/resource/views");

// use static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methodOverride("_method"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(morgan("combined"));

// routes init
route(app);
// connect to db
db.connect();

// 127.0.0.1 - local host 3005
app.listen(port, console.log(`App listening at http://localhost:${port}`));
