var express = require("express");

var mysql      = require('mysql');
var request = require('request');
var connection = mysql.createConnection({
host     : 'localhost',
port : 3307,
user     : 'root',
password : '0akeorkfl!',
database : 'fintech'
});

connection.connect();


app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var port = process.env.PORT || 8080 ;
// app use(express static(__dirname+'/public'));

app.get("/main", function(req,res){
    res.send("Hello main"); 
});

app.get('/weather', function(req, res){
    request('http://google.com', function (error, response, body) {
         console.log('good');
         res.send(body);
          });
        });      


app.get("/sayHello", function(request,response){
    var user_name = request.query.user_name;
    response.send("Hello" + user_name + '!'); 
});




app.get("/fintechdb", function(request,response){
    var sql = 'SELECT * FROM fintech.user'
    connection.query(sql, function (error, results) {
    if (error) throw error;
        response.send(results); 
    })
});

app.get('/weather', function(req, res){
    request('http://google.com', function (error, response, body) {
         console.log('good');
         res.send(body);
          });
        });      

app.get('/ejsTest', function(req, res){
            res.render('main');
            });
         
app.listen(port);

console.log("Listening on port", port);
