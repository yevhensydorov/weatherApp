var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");


app.get("", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
	var searchedCity = req.query.search;
	var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&APPID=4fb207611d39b10d6e71572389d683a4&units=metric";
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});

app.listen(4000, function(){
	console.log("The server has started");
});