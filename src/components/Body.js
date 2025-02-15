import RestComponent from "./RestComponent";
import React from "react";
import { useState, useEffect } from "react";

const Body = (data) => {
	const [restaurants, setRestaurants] = useState(data);
	return (
		<div className="body">
			<div className="search">
				<button className="rest-cuisine" onClick={() => {
					const filteredList = data.data.filter((item) => item.rating > 4.5)
					setRestaurants({
						data: filteredList,
					})
				}}>
					Top Rated Restaurants
				</button>
				<button className="rest-cuisine" onClick={() => {
					setRestaurants({
						data: data.data,
					})
				}}>
					Reset
				</button>
			</div>
			<div className="container">
				{
					restaurants.data.map((item) => <RestComponent key={item.id} data={item}/>)
				}
			</div>
		</div>
	)
}

export default Body;