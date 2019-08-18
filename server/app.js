const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { json } = require('body-parser');
const compression = require('compression');
require('dotenv').config();

const PORT = process.env.PORT | 4000;

const app = express();

app.use(cors());
app.use(json());
app.use(compression());

app.listen(PORT, err => {
	if (err) {
		console.error(err);
		return process.exit(1);
	}
	mongoose
		.connect(process.env.MONGO_KEY, { useNewUrlParser: true })
		.then(() => {
			console.log(`Server + Mongo are lookin' spiffy on Port ${PORT}`);
		})
		.catch(err => {
			console.error(err);
			return process.exit(1);
		});
});
