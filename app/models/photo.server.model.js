'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Photo Schema
 */
var PhotoSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Photo name',
		trim: true
	},
    image: {
        type: String,
        default: ''
        },
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	views: {
		type: Number,
		default: 0
	},
	description: {
		type:String,
		default:'default description'
	},
	likes: [{
	  type: Schema.ObjectId,
          ref: 'User'
	}]
});

var CommentSchema = new Schema({
    user : ref: 'User',
    content  : String,
    created  : Date
});

mongoose.model('Photo', PhotoSchema);
mongoose.model('Comment', CommentSchema);