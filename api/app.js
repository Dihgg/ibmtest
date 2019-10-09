// CONSTANTS
require('dotenv').config();

const express 		= require('express');
const app 			= express();
const bodyParser 	= require('body-parser');

const PORT			= process.env.PORT || 3000;



// APP - Definitions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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
	res.send('Funciona!');
});

// REGISTER ROUTES
// All routes will be prefixed with /api
app.use('/api', router);

app.listen( PORT );

module.exports	= app;