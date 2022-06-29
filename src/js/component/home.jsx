import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "../component/navbar.jsx";
import Jumbotron from "../component/jumbotron.jsx";
import Card from "../component/card.jsx";
import Footer from "../component/footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
		<Navbar/>
		<Jumbotron/>
		<div>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;

