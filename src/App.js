import React from 'react';
import ReactDOM from 'react-dom/client';
import * as data from '../sample.json';
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
	return (
		<div id="App" className="app">
			<Header/>
			<Body data={data.data}/>
		</div>
	)
}

const App = ReactDOM.createRoot(document.getElementById("App"))
App.render(<AppLayout/>)