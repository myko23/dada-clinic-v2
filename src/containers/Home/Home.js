import React from "react";
import "./Home.css";
import backgroundImage from "../../static/login-background.webp";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import NavBar from "../../components/NavBar/NavBar";
import PatientData from "../PatientData/PatientData";

const Home = () => {
	return (
		<div className="Home">
			<NavBar />
			<div className="Home__PatientData-container">
				<PatientData />
			</div>
			<BackgroundImage backgroundImage={backgroundImage} />
		</div>
	);
};

export default Home;
