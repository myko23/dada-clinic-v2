import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import { AnimatePresence, motion } from "framer-motion";

import "./DadaClinic.css";
import Modal from "../../components/Modal/Modal";
import PatientChart from "../PatientChart/PatientChart";
import AddPatient from "../AddPatient/AddPatient";
import ViewConsultation from "../ViewConsultation/ViewConsultation";
import { useDispatch, useSelector } from "react-redux";
import { getRouteState, setModalView } from "../../store/reducer/routeReducer";
import ViewAdmission from "../ViewAdmissions/ViewAdmission";
import AddConsultation from "../AddConsultation/AddConsultation";
import AddAdmission from "../AddAdmission/AddAdmission";
import cls from "classnames";
import { getSelectedState } from "../../store/reducer/selectedReducer";

const DadaClinic = () => {
	const dispatch = useDispatch();
	const { login: loginState, modalView: modalViewState } =
		useSelector(getRouteState);
	const { patient: selectedpatient } = useSelector(getSelectedState);

	const renderLoginState = () => {
		if (loginState)
			return (
				<>
					<Home />
					<motion.div
						drag
						dragConstraints={{ right: 50, bottom: 50 }}
						dragMomentum={0}
						className={cls(
							"DadaClinic__patient-icon",
							!selectedpatient &&
								"DadaClinic_patient-icon--opaque"
						)}
						whileTap={{ scale: 0.9 }}
						onDoubleClick={() =>
							setModalView(dispatch)("PatientsChart")
						}
					>
						<FontAwesomeIcon icon={faUsers} />
						<div className="DadaClinic__patient-label">
							Patients
						</div>
					</motion.div>
					<AnimatePresence>
						{modalViewState !== "default" ? (
							<Modal
								onExit={() => setModalView(dispatch)("default")}
							>
								{renderModal()}
							</Modal>
						) : null}
					</AnimatePresence>
				</>
			);
		else return <Login />;
	};

	const renderModal = () => {
		switch (modalViewState) {
			case "Patients":
				return <PatientChart />;
			case "AddPatients":
				return <AddPatient />;
			case "ViewConsultation":
				return <ViewConsultation />;
			case "ViewAdmission":
				return <ViewAdmission />;
			case "AddConsultation":
				return <AddConsultation />;
			case "AddAdmission":
				return <AddAdmission />;
			default:
				return <PatientChart />;
		}
	};

	return <div className="DadaClinic">{renderLoginState()}</div>;
};

export default DadaClinic;
