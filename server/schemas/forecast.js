const { Schema } = require('mongoose');

const Forecast = new Schema({
	Date: {
		type: Date,
		required: 'Each forecast must have a timestamp'
	},
	category: {
		type: String,
		required: 'Each forecast must have a category'
	}
});
