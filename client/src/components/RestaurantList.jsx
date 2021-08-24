import React, { useContext, useEffect } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
	const { restaurants, setRestaurants } = useContext(RestaurantsContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await RestaurantFinder.get('/');
				setRestaurants(response.data.data.restaurants);
			} catch (err) {
				console.log(err);
			};
		};

		fetchData();
	}, []);

	return (
		<div className='list-group'>
			<table className='table table-hover'>
				<thead>
					<tr className='bg-primary text-white'>
						<th scope='col'>Restaurant</th>
						<th scope='col'>Location</th>
						<th scope='col'>Price Range</th>
						<th scope='col'>Ratings</th>
						<th scope='col'>Edit</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody className='table-dark'>
					{restaurants && restaurants.map(restaurant => {
						return (
							<tr key={restaurant.id}>
								<td className='text-capitalize'>{restaurant.name}</td>
								<td className='text-capitalize'>{restaurant.location}</td>
								<td>{'$'.repeat(restaurant.price_range)}</td>
								<td>Reviews</td>
								<td>
									<button className='btn btn-warning'>Update</button>
								</td>
								<td>
									<button className='btn btn-danger'>Delete</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
};

export default RestaurantList;