import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = (props) => {
	const { id } = useParams();
	let history = useHistory();
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [priceRange, setPriceRange] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await RestaurantFinder.get(`${id}`);
			setName(response.data.data.restaurant.name);
			setLocation(response.data.data.restaurant.location);
			setPriceRange(response.data.data.restaurant.price_range)
		}

		fetchData();
	},[])

	const handleSubmit = async (e) => {
		e.preventDefault();
		await RestaurantFinder.put(`/${id}`, {
			name,
			location,
			price_range: priceRange
		})
		history.push('/');
	}

	return (
		<div>
			<form action=''>
			<div className='form-group mt-3'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					id='name'
					className='form-control'
					value={name}
					onChange={(e) => setName(e.target.value)}
				>
				</input>
			</div>
			<div className='form-group mt-3'>
				<label htmlFor='location'>Location</label>
				<input
					type='text'
					id='location'
					className='form-control'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				>
				</input>
			</div>
			<div className='form-group mt-3'>
				<label htmlFor='price_range'>Price Range</label>
				<select
					type='number'
					min='1'
					max='5'
					id='price_range'
					className='form-control'
					value={priceRange}
					onChange={(e) => setPriceRange(e.target.value)}
				>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</div>
			<button 
				onClick={handleSubmit}
				className='btn btn-primary mt-3'
				type='submit'
			>
				Submit
			</button>
			</form>
		</div>
	)
};

export default UpdateRestaurant;