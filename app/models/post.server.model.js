'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Comment Schema
 */
var CommentSchema = new Schema({
	commenter: {
		type: String,
		default: '',
		required: 'Please enter your name'
	},
	body: {
		type: String,
		default: '',
		required: 'Please enter a comment'
	},
	createdAt:{
		type:Date,
		default: Date.now
	}

});

/**
 * Post Schema
 */
var PostSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please enter a title',
		trim: true
	},
	body: {
		type: String,
		default: '',
		required: 'Please enter text'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	comments:[CommentSchema]
});

mongoose.model('Comment', CommentSchema);
mongoose.model('Post', PostSchema);