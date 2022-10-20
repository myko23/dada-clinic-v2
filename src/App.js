import { useEffect } from "react";
import DadaClinic from "./containers/DadaClinic/DadaClinic";

function App() {
	useEffect(() => {
		document.title = "Dada Clinic";
	});

	return (
		<div className="App">
			<DadaClinic />
		</div>
	);
}

export default App;
