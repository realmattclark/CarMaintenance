var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    password: "",
    database: ""
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    // Code to connect to database containing user names and pages
    queryAllUsers();

});

function queryAllUsers() {
    var query = connection.query("SELECT * FROM usernames WHERE username=?", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].username);
        }
        console.log("-------------");
    });

    console.log(query.sql);
    connection.end();
}

