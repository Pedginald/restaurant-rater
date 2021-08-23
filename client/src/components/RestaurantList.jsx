import React from 'react';

const RestaurantList = () => {
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
					<tr>
						<td>McDonalds</td>
						<td>London</td>
						<td>$$</td>
						<td>Ratings</td>
						<td>
							<button className='btn btn-warning'>Update</button>
						</td>
						<td>
							<button className='btn btn-danger'>Delete</button>
						</td>
					</tr>
					<tr>
						<td>McDonalds</td>
						<td>London</td>
						<td>$$</td>
						<td>Ratings</td>
						<td>
							<button className='btn btn-warning'>Update</button>
						</td>
						<td>
							<button className='btn btn-danger'>Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default RestaurantList;