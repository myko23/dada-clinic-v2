import _ from "lodash";
import { useSelector } from "react-redux";
import { getSelectedState } from "../../store/reducer/selectedReducer";
import { useFetchQuery } from "./useFetchQuery";

const useGetPatient = () => {
	const { patient: selectedPatient } = useSelector(getSelectedState);
	const patientData = useFetchQuery(["patients"]);
	const patient = _.find(patientData, (item) => item._id === selectedPatient);

	return {
		patient,
	};
};
export default useGetPatient;
