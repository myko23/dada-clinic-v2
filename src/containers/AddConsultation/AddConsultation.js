import React from "react";
import "./AddConsultation.css";
import { motion } from "framer-motion";
import ModalTitle from "../../components/ModalTitle/ModalTitle";
import SquareButton from "../../components/SquareButton/SquareButton";
import { useDispatch } from "react-redux";
import { setModalView } from "../../store/reducer/routeReducer";
import cls from "classnames";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import {
	faA,
	faCalendarDay,
	faClock,
	faFlaskVial,
	faO,
	faP,
	faS,
} from "@fortawesome/free-solid-svg-icons";
import LineInput from "../../components/LineInput/LineInput";

const AddConsultation = () => {
	const dispatch = useDispatch();
	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2, type: "Inertia" }}
			className="AddConsultation"
		>
			<div className="AddConsultation__container">
				<div className="AddConsultation__header-container">
					<ModalTitle title="Add Consultation" />
				</div>
				<div className={cls("AddConsultation__form-container", "form")}>
					<div className="form-row">
						<InputWithLabel
							variant="form"
							label="Date of Consult"
							icon={faCalendarDay}
							width="50rem"
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
				<div className="AddConsultation__button-container">
					<SquareButton className="AddConsultation__button">
						Add Patient
					</SquareButton>
					<SquareButton className="AddConsultation__button">
						Reset
					</SquareButton>
					<SquareButton
						className="AddConsultation__button AddConsultation__button--back"
						onClick={() => setModalView(dispatch)("default")}
					>
						Back
					</SquareButton>
				</div>
			</div>
		</motion.div>
	);
};

export default AddConsultation;
