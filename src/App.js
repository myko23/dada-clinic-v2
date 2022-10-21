import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DadaClinic from "./containers/DadaClinic/DadaClinic";
import API from "./lib/configs/axios";
import { getSelectedState } from "./store/reducer/selectedReducer";
import loadTokenToState from "./lib/utils/loadTokenToState";
import { loginApp } from "./store/reducer/routeReducer";

const App = () => {
	const [cookies, setCookie] = useCookies(["dada-token"]);
	const { patient: selectedPatient } = useSelector(getSelectedState);

	const dispatch = useDispatch();

	//QUERY
	useQuery(["patients"], async () => {
		const response = await API.get("/patients");
		return response.data;
	});
	useQuery(["consultations", selectedPatient], async () => {
		const response = await API.get(`/consultations/${selectedPatient}`);
		return response.data;
	});
	useQuery(["admissions", selectedPatient], async () => {
		const response = await API.get(`/admissions/${selectedPatient}`);
		return response.data;
	});

	useEffect(() => {
		document.title = "Dada Clinic";
		if (cookies?.["dada-token"]) {
			const cookieAuth = loadTokenToState(dispatch)(
				cookies?.["dada-token"]
			);
			if (cookieAuth) loginApp(dispatch);
		}
	}, []);

	return (
		<div className="App">
			<DadaClinic />
		</div>
	);
};

export default App;
