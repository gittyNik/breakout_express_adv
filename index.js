const express = require("express");
const path = require("path")
const hbs = require("hbs");
const app = express();
var db = [
	{
	name: "Nik",
	age: 45	
}
];

const port = process.env.PORT || 3000;

// middlewares

app.set('view engine', 'hbs');

app.get("/", function (req, res) {
	res.render("index.hbs");
});

// app.use("/user/:handle", function (req, res, next) {
// 	const handle = req.params.handle;
// 	if (handle === "Nik") {
// 		next();
// 	} else {
// 		res.send(`Unauthenticated user`);
// 	}
// });

app.get("/user", (req, res) => {
	
	res.render("handle.hbs", {
		persons: db
	});
});

app.use("/about", function (req, res, next) {
	console.log("About page middleware");
	next();
});

app.get("/about", function (req, res) {
	res.send("About page");
});

app.listen(port, console.log(`Server running on port ${port}`));
