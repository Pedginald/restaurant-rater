import React, { useContext, useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
	const {addRestaurant} = useContext(RestaurantsContext);
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [priceRange, setPriceRange] = useState('Price Range');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await RestaurantFinder.post('/', {
			name,
			location,
			price_range: priceRange
		});
		addRestaurant(response.data.data.restaurant)
	};

	return (
		<div className='my-4'>
			<form action=''>
				<div className='row'>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='Name'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='Location'
							value={location}
							onChange={e => setLocation(e.target.value)}
						/>
					</div>
					<div className='col'>
						<select
							className='form-select mr-sm-2'
							value={priceRange}
							onChange={e => setPriceRange(e.target.value)}
						>
							<option disabled>Price Range</option>
							<option value='1'>$</option>
							<option value='2'>$$</option>
							<option value='3'>$$$</option>
							<option value='4'>$$$$</option>
							<option value='5'>$$$$$</option>
						</select>
					</div>
					<button className='btn btn-primary col-2' onClick={handleSubmit}>Add</button>
				</div>
			</form>
		</div>
	);
};

export default AddRestaurant;