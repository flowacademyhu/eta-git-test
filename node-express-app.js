// Much code based on http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4

var express    = require('express');    // call express
var app        = express();         // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect, use * for wildcard
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

var port = process.env.PORT || 8080;    // set our port

var router = express.Router();        // get an instance of the express Router

var up = true;
var db = true;

router.get('/health', function(req, res) {
  res.json({ up: up, db: db, health: up && db });
});

router.get('/hello', function(req, res) {
  res.json({ answer: 42 });
});

app.use('/', router);

app.listen(port);
console.log('App is active on port ' + port);
