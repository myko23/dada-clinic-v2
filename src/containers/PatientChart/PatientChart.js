import React, { useState } from "react";
import Table from "../../components/Table/Table";
import "./PatientChart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import InputWithLabel from "../../components/InputWithLabel/InputWithLabel";
import { motion } from "framer-motion";
import ModalTitle from "../../components/ModalTitle/ModalTitle";
import { useDispatch, useSelector } from "react-redux";
import { setModalView } from "../../store/reducer/routeReducer";
import SquareButton from "../../components/SquareButton/SquareButton";
import { useFetchQuery } from "../../lib/hooks/useFetchQuery";
import moment from "moment/moment";
import {
	getSelectedState,
	setSelected,
} from "../../store/reducer/selectedReducer";

const PatientChart = () => {
	const dispatch = useDispatch();
	const patientData = useFetchQuery(["patients"]);

	const { patient: patientSelected } = useSelector(getSelectedState);

	const [search, setSearch] = useState("");

	const patientSettings = {
		data: patientData,
		datamap: {
			title: "Name",
			birthday: "birthday",
			age: "age",
		},
		datasettings: {
			title: ({ firstname, lastname }) => {
				return `${firstname} ${lastname}`;
			},
			age: (value) => {
				return moment(value.birthday).fromNow(true);
			},
			birthday: ({ birthday }) => {
				return moment(birthday).format("MMMM DD, YYYY");
			},
		},
	};

	return (
		<motion.div
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, type: "Inertia" }}
			className="PatientChart"
		>
			<div className="PatientChart__header-container">
				<ModalTitle title="Patients" />
				<motion.div
					whileTap={{ scale: 0.9 }}
					className="PatientChart__header-icon PatientChart__add-patient"
					onClick={() => setModalView(dispatch)("AddPatients")}
				>
					<FontAwesomeIcon icon={faUserPlus} />
				</motion.div>

				<InputWithLabel
					className="PatientChart__search"
					label="Search"
					icon={faSearch}
					variant="small"
					width="40rem"
					value={search}
					setValue={setSearch}
				/>
			</div>
			<Table
				data={patientSettings.data}
				datamap={patientSettings.datamap}
				datasettings={patientSettings.datasettings}
				onItemClick={(id) => {
					setSelected(dispatch)("patient", id);
				}}
				selected={patientSelected}
				search={search}
			/>
			<div className="PatientChart__button-container">
				<SquareButton
					className="PatientChart__button PatientChart__button--back"
					onClick={() => setModalView(dispatch)("default")}
				>
					Back
				</SquareButton>
			</div>
		</motion.div>
	);
};

export default PatientChart;
