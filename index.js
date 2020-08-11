var express = require('express');
var app = express();
const path = require("path");
var mongoose = require('mongoose');
// connectDB = require('./config/db');
app.set('view engine', 'ejs');
//connectDB(); //conect to database
var uri = process.env.DATABASEURL ||`mongodb://localhost:27017/url-short`;
mongoose.connect(uri,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
}).then(() => {
	console.log("connect to db");
}).catch(err => {
	console.log("Error:",err.message);
});
// ExpressJS Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static files middleware:
app.use(express.static(path.join(__dirname, "/public")));

// Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

// Setting Port to listen to
app.listen(3000, () => console.log('Server is running on port 3000'));
