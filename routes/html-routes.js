var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
	// routes for user pages

	// route loads login.html to login
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/login.html"));
	});

	// signup page route loads signUp.html
	app.get("/newUser", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/signUp.html"));
	});

	// homepage route loads index.html
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	// addCar.html route
	app.get("/AddCar", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/addCar.html"));
	});

	// addMaint.html route
	app.get("/AddMaintenance", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/addMaint.html"));
	})

};
