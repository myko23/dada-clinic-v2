import React from "react";
import "./AddPatient.css";
import { motion } from "framer-motion";
import {
	faBuilding,
	faCake,
	faChurch,
	faClock,
	faFileCirclePlus,
	faPersonBreastfeeding,
	faPersonPregnant,
	faPhone,
	faUser,
	faVirus,
} from "@fortawesome/free-solid-svg-icons";
import ModalTitle from "../../components/ModalTitle/ModalTitle";
import SquareButton from "../../components/SquareButton/SquareButton";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import cls from "classnames";
import { setModalView } from "../../store/reducer/routeReducer";
import { useDispatch } from "react-redux";

const AddPatient = ({ setModal }) => {
	const dispatch = useDispatch();

	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, type: "Inertia" }}
			className="AddPatient"
		>
			<div className="AddPatient__container">
				<div className="AddPatient__header-container">
					<ModalTitle title="Add Patients" />
				</div>
				<div className={cls("AddPatient__form-container", "form")}>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="first name"
							icon={faUser}
							width="50rem"
						/>
						<InputWithLabel
							variant="form"
							label="middle name"
							icon={faUser}
							width="50rem"
						/>
						<InputWithLabel
							variant="form"
							label="last name"
							icon={faUser}
							width="50rem"
						/>
					</div>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Birthday"
							icon={faCake}
							width="30rem"
						/>
						<InputWithLabel
							variant="form"
							label="Age"
							icon={faClock}
							width="15rem"
							editState={false}
						/>
						<InputWithLabel
							variant="form"
							label="contact no."
							icon={faPhone}
							width="50rem"
						/>
					</div>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="address"
							icon={faBuilding}
							width="100%"
						/>
					</div>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Guardian"
							icon={faPersonBreastfeeding}
							width="50rem"
						/>
						<InputWithLabel
							variant="form"
							label="Relationship"
							icon={faPersonPregnant}
							width="50rem"
						/>
					</div>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Religion"
							icon={faChurch}
							width="40rem"
						/>
					</div>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Past History"
							icon={faBuilding}
							width="100%"
						/>
					</div>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="current conditions"
							icon={faFileCirclePlus}
							width="100%"
						/>
					</div>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="allergies"
							icon={faVirus}
							width="100%"
						/>
					</div>
				</div>
				<div className="AddPatient__button-container">
					<SquareButton className="AddPatient__button">
						Add Patient
					</SquareButton>
					<SquareButton className="AddPatient__button">
						Reset
					</SquareButton>
					<SquareButton
						className="AddPatient__button AddPatient__button--back"
						onClick={() => setModalView(dispatch)("PatientsChart")}
					>
						Back
					</SquareButton>
				</div>
			</div>
		</motion.div>
	);
};

export default AddPatient;
