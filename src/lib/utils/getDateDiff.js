import moment from "moment";

export const getDateDiff = (startdate, enddate) => {
	const age = moment(enddate, "MM-DD-YYYY").diff(
		moment(startdate, "MM-DD-YYYY"),
		"years"
	);

	return `${age} ${age === 1 ? "Year" : "Years"} Old`;
};
