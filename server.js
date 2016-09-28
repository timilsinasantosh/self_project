var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');
var app = express();

app.use(bodyParser.json());   
app.use(bodyParser.urlencoded ({  
extended:true
}));


app.use(express.static(__dirname + '/'));
console.log("Static files initialized...");


app.use(connection(mysql, {
    host        : 'localhost',
    user        : 'ui',
    password    : 'ui1234',
    database    : 'form'
},'request'));

app.get('/service/person', function (req, res, next){
   
    var ids = [];
    
    var query = "SELECT * FROM person";
    req.getConnection(function(err, connection){
        if (err) return next (err);
        
        connection.query(query,ids,function(err, results){
            if (err){
                console.log(err);
                return next("Mysql error, query error");
            }
            res.json(results);
        });
    });
});


                


app.get('/service/person/:personid', function (req, res, next){
    
    var ids = [];
    
    var personid=req.params.personid;
    ids.push(personid);
    var query = "SELECT * FROM person where personid = ?";
    req.getConnection(function(err, connection){
        if (err) return next (err);
        
        connection.query(query,ids,function(err, results){
            if (err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);
        });
    });
});

app.use(express.static(__dirname+'/'));

app.get('/index', function(req, res) {
    res.redirect('/views/index.html');
    });


app.get('/landing',function(req, res) {
    res.send('In landing page');
});



app.listen(1234, function() {
    console.log('server loaded on port 1234')
    });