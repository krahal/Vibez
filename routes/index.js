var express = require("express");
var router 	= express.Router();
var Caption = require("../models/caption");

// Route for main page
router.get("/", function(req, res){
	var category = req.query.category;
	console.log(category);

	if (typeof category != 'undefined'){
		// get random caption from database
		if(category === "All"){
			Caption.aggregate([
				{$sample: {size: 1}}], 
				function(err, foundCaption){
				if(err){
					console.log(err);
				} else {
					console.log(foundCaption);
					var allCaption = foundCaption[0];
					allCaption.category = "All";
					res.render("landing", {caption: allCaption});
				}
			});
		}
		else {
			Caption.aggregate([
				{$match: {"category": category}},
				{$sample: {size: 1}}], 
				function(err, foundCaption){
				if(err){
					console.log(err);
				} else {
					console.log(foundCaption);
					res.render("landing", {caption: foundCaption[0]});
				}
			});
		}
	} else {
		var emptyCaption = {lyric: "", author: "", song: "", album: "", category: ""}
		res.render("landing", {caption: emptyCaption});
	}
});

// Create new caption and add to database
router.post("/", function(req, res){
	// get data from form
	var lyric = req.body.lyric;
	var author = req.body.author;
	var song = req.body.song;
	var album = req.body.album;
	var category = req.body.category;

	// create new caption and save to database
	var newCaption = {lyric: lyric, author: author, album: album, category: category}
	Caption.create(newCaption, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			// refresh page
			res.redirect("/");
		}
	});
});

module.exports = router;