// CONSTANTS
const express 		= require('express');
const app 			= express();
const bodyParser 	= require('body-parser');
const mysql   		= require('mysql2');
const env 			= process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];



// APP - Definitions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DATABASE
// var db = mysql.createConnection({
// 	host     : config.database,
// 	user     : config.username,
// 	password : config.password
// });


// Database events
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* ROUTES */
var router = express.Router(); // get an instance of the express Router

// Middleware - For all requests
router.use(function(req, res, next) {
	console.log("Some request is happening");
	next();
});

/* LIST */
router.use('/list', require('./routes/list').router);

app.get('/', function (req, res) {
	res.send('Hello World!');
});

// REGISTER ROUTES
// All routes will be prefixed with /api
app.use('/api', router);

app.listen(3000);
