// Express init
var express 	= require("express");
var app 		= express(); 
var mongoose 	= require("mongoose");
var bodyParser 	= require("body-parser");
var Caption    	= require("./models/caption");

// Require routes
var indexRoutes = require("./controllers/index");

// mongoose.connect("mongodb://localhost/rap_captions");
mongoose.connect(process.env.DATABASEURL);
mongoose.Promise = global.Promise;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

// Use index routes
app.use("/", indexRoutes);

// Start Express server
var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
	console.log("Vibez server started.");
});