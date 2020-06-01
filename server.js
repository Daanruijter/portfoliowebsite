console.log("server.js runs");

const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const cors = require("cors");

const db =
  "mongodb+srv://dr:sSXGDQnstqEWcLHx@cluster0-4ie2c.mongodb.net/test?retryWrites=true&w=majority";

const path = require("path");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    dbName: "contact",
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err + "There is no connection"));

mongoose.set("debug", true);

//if you are on this path, require this file//
//this creates API routes//
app.use("/contactdata", require("./routes/contactdata"));

//Serve static assets if we are in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

if (process.env.NODE_ENV === "development") {
  console.log("development");
}
if (process.env.NODE_ENV === "production") {
  console.log("production");
}
