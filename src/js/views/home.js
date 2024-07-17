import React from "react";
import Card from "../component/card.jsx";
import Planets from "../component/planets.jsx";
import Vehicles from "../component/vehicles.jsx";
import "../../styles/home.css";

export const Home = () => (
	<div className="mt-5 ms-5">

		<h1 className="text-danger">Characters</h1>
		<div className="d-flex">
			<Card />
			
		</div>
		<h1 className="text-danger">Planets</h1>
		<div className="d-flex">
           <Planets/>
		 
		</div>
		<h1 className="text-danger">Vehicles</h1>
		<div className="d-flex">
           <Vehicles/>
		 
		</div>
	</div>
);
