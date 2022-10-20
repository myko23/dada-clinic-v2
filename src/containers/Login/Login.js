import React from "react";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import SquareButton from "../../components/SquareButton/SquareButton";
import "./Login.css";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import backgroundImage from "../../static/login-background.webp";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { loginApp } from "../../store/reducer/routeReducer";

const Login = () => {
	const dispatch = useDispatch();

	return (
		<div className="Login">
			<BackgroundImage backgroundImage={backgroundImage} />
			<div className="Login__loginbox">
				<div className="Login__loginbox-overlay"></div>
				<div className="Login__loginbox-content">
					<h1 className="Login__header">DADA CLINIC</h1>
					<InputWithLabel
						className="Login__input"
						label="Username"
						placeholder="Username"
						icon={faUser}
						variant="login"
					/>
					<InputWithLabel
						className="Login__input"
						label="Password"
						type="password"
						placeholder="Password"
						icon={faLock}
						variant="login"
					/>
					<SquareButton
						className="Login__submit"
						onClick={() => loginApp(dispatch)(true)}
					>
						Submit
					</SquareButton>
				</div>
			</div>
		</div>
	);
};

export default Login;
