import React, { useState } from "react";
import "./ViewConsultation.css";
import { motion } from "framer-motion";
import ModalTitle from "../../components/ModalTitle/ModalTitle";
import SquareButton from "../../components/SquareButton/SquareButton";
import { useDispatch } from "react-redux";
import { setModalView } from "../../store/reducer/routeReducer";
import PatientTitle from "../../components/PatientTitle/PatientTitle";
import LineInput from "../../components/LineInput/LineInput";
import {
	faA,
	faCalendarDay,
	faClock,
	faFlaskVial,
	faO,
	faP,
	faS,
} from "@fortawesome/free-solid-svg-icons";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import cls from "classnames";
import EditFormButton from "../../components/EditFormButton/EditFormButton";

const ViewConsultation = () => {
	const dispatch = useDispatch();

	const [editState, setEditState] = useState(false);
	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2, type: "Inertia" }}
			className="ViewConsultation"
		>
			<div className="ViewConsultation__container">
				<div className="ViewConsultation__header-container">
					<ModalTitle title="View Consultation" />
					<PatientTitle
						className="ViewConsultation__patient-title"
						patient="Jose Agerico Bacal"
					/>
				</div>
				<div
					className={cls("ViewConsultation__form-container", "form")}
				>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Date of Consult"
							icon={faCalendarDay}
							width="50rem"
							editState={editState}
						/>
						<InputWithLabel
							variant="form"
							label="Age"
							icon={faClock}
							width="15rem"
							editState={false}
						/>
					</div>
					<div className="form-row--multilined">
						<InputWithLabel
							variant="form"
							label="Subjective"
							icon={faS}
							width="100%"
							editState={editState}
						/>
						<LineInput editState={editState} />
						<LineInput editState={editState} />
					</div>
					<div className="form-row--multilined">
						<InputWithLabel
							variant="form"
							label="Objective"
							icon={faO}
							width="100%"
							editState={editState}
						/>
						<LineInput editState={editState} />
						<LineInput editState={editState} />
					</div>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Assessment"
							icon={faA}
							width="100%"
							editState={editState}
						/>
					</div>
					<div className="form-row--multilined">
						<InputWithLabel
							variant="form"
							label="Labs"
							icon={faFlaskVial}
							width="100%"
							editState={editState}
						/>
						<LineInput editState={editState} />
						<LineInput editState={editState} />
					</div>
					<div className="form-row--multilined">
						<InputWithLabel
							variant="form"
							label="Plan"
							icon={faP}
							width="100%"
							editState={editState}
						/>
						<LineInput editState={editState} />
						<LineInput editState={editState} />
					</div>
					<EditFormButton
						onSave={() => {}}
						editConfigs={{ editState, setEditState }}
					/>
				</div>
				<div className="ViewConsultation__button-container">
					<SquareButton className="ViewConsultation__button">
						Add Patient
					</SquareButton>
					<SquareButton className="ViewConsultation__button">
						Reset
					</SquareButton>
					<SquareButton
						className="ViewConsultation__button ViewConsultation__button--back"
						onClick={() => setModalView(dispatch)("default")}
					>
						Back
					</SquareButton>
				</div>
			</div>
		</motion.div>
	);
};

export default ViewConsultation;
