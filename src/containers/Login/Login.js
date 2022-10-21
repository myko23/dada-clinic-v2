import React, { useState } from "react";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import SquareButton from "../../components/SquareButton/SquareButton";
import "./Login.css";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import backgroundImage from "../../static/login-background.webp";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { loginApp } from "../../store/reducer/routeReducer";
import API from "../../lib/configs/axios";
import loadTokenToState from "../../lib/utils/loadTokenToState";
import { useCookies } from "react-cookie";

const Login = () => {
	const dispatch = useDispatch();
	const [username, setUsername] = useState("mykobacal");
	const [password, setPassword] = useState("firefly");
	const [errorMessage, setErrorMessage] = useState(false);
	const [cookies, setCookie] = useCookies(["dada-token"]);

	const onLogin = async () => {
		try {
			const response = await API.post("/login", { username, password });
			const token = response?.data;

			const validation = await loadTokenToState(dispatch)(token);

			if (validation) {
				setCookie("dada-token", token);
				loginApp(dispatch)(true);
			} else setErrorMessage(true);
		} catch (error) {
			// setPassword("");
			setErrorMessage(true);
		}
	};

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
						value={username}
						setValue={setUsername}
					/>
					<InputWithLabel
						className="Login__input"
						label="Password"
						type="password"
						placeholder="Password"
						icon={faLock}
						variant="login"
						value={password}
						setValue={setPassword}
					/>
					{errorMessage && (
						<p className="Login__error-message">
							Invalid Username or Password
						</p>
					)}
					<SquareButton className="Login__submit" onClick={onLogin}>
						Submit
					</SquareButton>
				</div>
			</div>
		</div>
	);
};

export default Login;
