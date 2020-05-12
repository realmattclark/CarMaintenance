var mysql = require("mysql");
var express = require("express");
var app = express();

var PORT = process.env.PORT || 3306;

var db = require("../models");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    password: "mlevi1250",
    database: "login_info"
});


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    // Code to connect to database containing user names and pages
    queryAllUsers();

});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
require("../routes/html-routes")(app);

// Syncing sequalize models with Express app
db.sequalize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    })
});
connection.connect(function(err) {
    if (err) throw (err);
    console.log("connected as id " + connection.threadId + "\n");
    readUsers();
})



function readUsers() {
    connection.query("SELECT username", function(err, res) {
        if (err) throw (err);

        console.log(res);
        connection.end();
    })
};
