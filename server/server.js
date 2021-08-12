require('dotenv').config();
const express = require('express');
const db = require('./db');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3001;

// Define middleware at the top of file
app.use(express.json());

// Get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
	try {
		const results = await db.query('select * from restaurants');
		console.log(results);
		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: {
				restaurants: results.rows
			}
		});
	} catch (err) {
			console.log(err);
	}
});

// Get a restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
	console.log(req.params);
	res.status(200).json({
		status: "success",
			data: {
				restaurant: "mcdonalds"
			}
	})
});

// Create a restaurant
app.post('/api/v1/restaurants', (req, res) => {
	console.log(req.body);
	res.status(201).json({
		status: "success",
			data: {
				restaurant: "mcdonalds"
			}
	})
});

// Update restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
	console.log(req.params);
	console.log(req.body);
	res.status(200).json({
		status: "success",
		data: {
			restaurant: "mcdonalds"
		}
	})
})

// Delete restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
	console.log('Successfully deleted');
	res.status(204).json({
		status: "success"
	})
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});