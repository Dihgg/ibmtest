'use strict'
// NODE

var express = require('express');
var router = express.Router();

// MODEL
const model	= require('../models/index');
const Item 	= require('../models/item');


// ROUTES
// Get all user related task
router.route('/get/').get(function(req, res, next) {
	model.Item.findAll({})
	.then( items => res.json( items ) )
	.catch ( error	=> res.json({
		status	: false,
		error	: error
	}) );
});

// Create
router.route('/add/').post(function(req, res) {
	// Create
	const {
		name,
		qty,
		checked
	} = req.body;
	
	model.Item.create({
		name	: name,
		qty		: qty,
		checked	: checked
	})
	.then( item => res.status(201).json( item ))
	.catch ( error	=> res.json({
		status	: false,
		error	: error
	}) );
});

// Update
router.route('/edit/:id').put(function(req, res) {
	const id = req.params.id;
	const {
		name,
		qty,
		checked
	} = req.body;
	
	model.Item.update({
		name	: name,
		qty		: qty,
		checked	: checked
	}, {
		where	: {
			id	: id
		}
	})
	.then( item	=> res.status(201).json( item ) )
	.catch ( error	=> res.json({
		status	: false,
		error	: error
	}) );
});

// Delete
router.route('/delete/:id').delete(function(req, res) {
	const id	= req.params.id;
	
	model.Item.destroy({
		where	: {
			id	: id
		}
	})
	.then( status => res.status(201).json({
		status	: true,
		message	: "Item apagado"
	})  )
	.catch ( error	=> res.json({
		status	: false,
		error	: error
	}) );
});

module.exports.router = router;