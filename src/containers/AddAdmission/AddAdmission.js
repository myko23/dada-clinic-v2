import React from "react";
import "./AddAdmission.css";
import { motion } from "framer-motion";
import ModalTitle from "../../components/ModalTitle/ModalTitle";
import SquareButton from "../../components/SquareButton/SquareButton";
import { useDispatch } from "react-redux";
import { setModalView } from "../../store/reducer/routeReducer";
import LineInput from "../../components/LineInput/LineInput";
import {
	faA,
	faCalendarDay,
	faClock,
	faFlaskVial,
	faNotesMedical,
	faO,
	faP,
	faS,
} from "@fortawesome/free-solid-svg-icons";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import cls from "classnames";

const AddAdmission = () => {
	const dispatch = useDispatch();
	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2, type: "Inertia" }}
			className="AddAdmission"
		>
			<div className="AddAdmission__container">
				<div className="AddAdmission__header-container">
					<ModalTitle title="Add Admission" />
				</div>
				<div className={cls("AddAdmission__form-container", "form")}>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Date of Admission"
							icon={faCalendarDay}
							width="50rem"
						/>
						<InputWithLabel
							variant="form"
							label="Date of Discharge"
							icon={faCalendarDay}
							width="50rem"
						/>
					</div>

					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Duration"
							icon={faClock}
							width="15rem"
							editState={false}
						/>
					</div>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Chief Complaint"
							icon={faNotesMedical}
							width="100%"
						/>
					</div>
					<div className="form-row--multilined">
						<InputWithLabel
							variant="form"
							label="Subjective"
							icon={faS}
							width="100%"
						/>
						<LineInput />
						<LineInput />
					</div>
					<div className="form-row--multilined">
						<InputWithLabel
							variant="form"
							label="Objective"
							icon={faO}
							width="100%"
						/>
						<LineInput />
						<LineInput />
					</div>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Assessment"
							icon={faA}
							width="100%"
						/>
					</div>
					<div className="form-row--multilined">
						<InputWithLabel
							variant="form"
							label="Labs"
							icon={faFlaskVial}
							width="100%"
						/>
						<LineInput />
						<LineInput />
					</div>
					<div className="form-row--multilined">
						<InputWithLabel
							variant="form"
							label="Plan"
							icon={faP}
							width="100%"
						/>
						<LineInput />
						<LineInput />
					</div>
				</div>
				<div className="AddAdmission__button-container">
					<SquareButton
						className="AddAdmission__button"
						width="30rem"
					>
						Add Admission
					</SquareButton>
					<SquareButton className="AddAdmission__button">
						Reset
					</SquareButton>
					<SquareButton
						className="AddAdmission__button AddAdmission__button--back"
						onClick={() => setModalView(dispatch)("default")}
					>
						Back
					</SquareButton>
				</div>
			</div>
		</motion.div>
	);
};

export default AddAdmission;
