var mongoose = require("mongoose");

// Schema Setup
var captionSchema = new mongoose.Schema({
	lyric: String,
	author: String,
	song: String,
	album: String,
	category: String,
});

module.exports = mongoose.model("Caption", captionSchema);
