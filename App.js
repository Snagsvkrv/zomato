import React from 'react';
import ReactDOM from 'react-dom/client';
import * as data from './sample.json';

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<img src="https://github.githubassets.com/favicons/favicon.svg"/>
			</div>
			<div className="navItems">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	)
}

const CardComponent = ({name, rating, sla, cuisine, img, costForTwo}) => {
	return (
		<div className="card">
			<img
				className="card-logo"
				alt="card-logo"
				src={img}/>
			<h3 className="rest-name">{name}</h3>
			<ul>
				<li className="rest-cuisine">{cuisine}</li>
				<li className="rest-rating">{rating}</li>
				<li className="rest-del-time">{sla} mins</li>
				<li className="rest-cost">{costForTwo} for two</li>
			</ul>
		</div>
	)
}

const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="container">
				{
					data.data.map((item) => <CardComponent
						key={item.id}
						name={item.name}
						rating={item.rating}
						sla={item.sla}
						cuisine={item.cuisine}
						img={item.img}
						costForTwo={item.costForTwo}/>)
				}
			</div>
		</div>
	)
}
const AppLayout = () => {
	return (
		<div id="App" className="app">
			<Header/>
			<Body />
		</div>
	)
}

const App = ReactDOM.createRoot(document.getElementById("App"))
App.render(<AppLayout/>)