require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3001;

// Define middleware at the top of file
app.use(cors());
app.use(express.json());

// Get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM restaurants');
		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: {
				restaurants: results.rows
			}
		})
	} catch (err) {
			console.log(err);
	}
});

// Get a restaurant
app.get('/api/v1/restaurants/:id', async (req, res) => {
	try {
		const result = await db.query(
			'SELECT * FROM restaurants WHERE id = $1', [req.params.id]
		);
		res.status(200).json({
			status: "success",
			data: {
				restaurant: result.rows[0]
			}
		})
	} catch (err) {
			console.log(err);
	}
});

// Create a restaurant
app.post('/api/v1/restaurants', async (req, res) => {
	try {
		const result = await db.query(
			'INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *',
			[req.body.name, req.body.location, req.body.price_range])
			res.status(201).json({
				status: "success",
					data: {
						restaurant: result.rows[0]
					}
			})
	} catch (err) {
		console.log(err);
	}
});

// Update restaurant
app.put('/api/v1/restaurants/:id', async (req, res) => {
	try {
		const result = await db.query(
			'UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *',
			[req.body.name, req.body.location, req.body.price_range, req.params.id]
			)
			res.status(200).json({
				status: "success",
				data: {
					restaurant: result.rows[0]
				}
			})
	} catch (err) {
		console.log(err);
	}
})

// Delete restaurant
app.delete('/api/v1/restaurants/:id', async (req, res) => {
	try {
		const result = await db.query('DELETE FROM restaurants WHERE id = $1',
		[req.params.id]);
		res.status(204).json({
			status: "success"
		})
	} catch (err) {
		console.log(err);
	}
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});