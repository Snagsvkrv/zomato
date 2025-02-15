import React from "react";

const RestComponent = (data) => {
	const {name, img, cuisine, rating, sla, costForTwo} = data?.data
	const [quantity, setQuantity] = React.useState(1);
	const handleIncrement = () => {
		setQuantity(prev => prev + 1);
	};

	const handleDecrement = () => {
		setQuantity(prev => (prev > 1 ? prev - 1 : 1));
	};
	return (
		<div className="rest">
			<img
				className="rest-logo"
				alt="rest-logo"
				src={img}/>
			<h3 className="rest-name">{name}</h3>
			<ul>
				<li className="rest-cuisine">{cuisine}</li>
				<li className="rest-rating">{rating}</li>
				<li className="rest-del-time">{sla} mins</li>
				<li className="rest-cost">{costForTwo} for two</li>
			</ul>
			<div className="cart-controls">
				<div className="quantity-controls">
					<button onClick={handleDecrement} className="qty-btn">-</button>
					<span className="qty-display">{quantity}</span>
					<button onClick={handleIncrement} className="qty-btn">+</button>
				</div>
				<button className="add-to-cart-btn">Add to Cart</button>
			</div>
		</div>
	)
}

export default RestComponent;