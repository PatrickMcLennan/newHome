const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { json } = require('body-parser');
const compression = require('compression');
const http = require('http');
require('dotenv').config();

const PORT = process.env.PORT | 4000;

const app = express();

app.use(cors());
app.use(json());
app.use(compression());

// GET WEATHER
const getWeather = () =>
	http
		.get(process.env.WEATHER_URL, res => {
			let data = '';

			res.on('data', chunk => (data += chunk));
			// COME BACK TO THIS
			res.on('end', () => console.log(JSON.parse(data)));
			// return setTimeout(() => getWeather(), 1000);
		})
		.on('error', err => console.error(err));

app.listen(PORT, err => {
	if (err) {
		console.error(err);
		return process.exit(1);
	}
	mongoose
		.connect(process.env.MONGO_KEY, { useNewUrlParser: true })
		.then(() => {
			console.log(`Server + Mongo are lookin' spiffy on Port ${PORT}`);
			getWeather();
		})
		.catch(err => {
			console.error(err);
			return process.exit(1);
		});
});
