import React from "react";
import "./BackgroundImage.css";

const BackgroundImage = ({ backgroundImage }) => {
	return (
		<>
			<div
				className="BackgroundImage"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			></div>
			<div className="BackgroundImage__overlay"></div>
		</>
	);
};

export default BackgroundImage;
