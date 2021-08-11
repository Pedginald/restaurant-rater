require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
	console.log('Yeah our middlewear ran');
	next();
});

// Get all restaurants
app.get('/api/v1/restaurants', (req, res) => {
	console.log('And this route ran too');
	res.status(200).json({
		status: "success",
		data: {
			restaurants: ["mcdonalds", "wendys"]
		}
	});
});

// Get a restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
	console.log(req.params);
});

// Create a restaurant
app.post('/api/v1/restaurants', (req, res) => {

})

app.listen(port, () => {
	console.log(`Server listening on port ${port}...`);
});