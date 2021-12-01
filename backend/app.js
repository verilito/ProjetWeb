var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var app = express();
const mongoose = require('mongoose');
const cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);

mongoose.Promise = global.Promise;
//const dbName = "dataBase_Movies";
const dbURL = 'mongodb://localhost:27017/dataBase_Movies';

//Connect to DB
mongoose.connect(dbURL,
    { useNewUrlParser: true },
    () => console.log('Connect')
);
//app.listen(5000);
module.exports = app;
