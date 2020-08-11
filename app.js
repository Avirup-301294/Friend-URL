var express = require('express');
var app = express();
const path = require("path");
var mongoose = require('mongoose');
// connectDB = require('./config/db');
require("dotenv/config");
var Url = process.env.DATABASEURL || "mongodb://localhost:27017/url-short";
mongoose.connect(Url, {useUnifiedTopology: true,useNewUrlParser: true})
  .then(() =>
    console.log("Successfully connected to MongoDB")
  ).catch(err =>
    console.log(`Error connecting to MongoDB: ${err}`)
  );

app.set('view engine', 'ejs');
// connectDB(); //conect to database
// ExpressJS Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static files middleware:
app.use(express.static(path.join(__dirname, "/public")));

// Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

// Setting Port to listen to
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
