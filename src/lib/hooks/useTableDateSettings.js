import _ from "lodash";

const useTableDateSettings = (
	data,
	datamap,
	datasettings,
	sortItem,
	sortOrder = "asc"
) => {
	let headers = Object.values(datamap).map((item) => item);
	headers = ["_id", ...headers];

	const newData = data.map((item) => {
		const idObject = { _id: item._id };
		let newObject = { ...idObject };
		Object.keys(datamap).forEach((next) => {
			newObject = { ...newObject, [next]: item[next] };
		});

		return newObject;
	});

	const formattedData = newData.map((item) => {
		Object.keys(datasettings).forEach((next) => {
			if (item[next]) item[next] = datasettings[next](item[next]);
		});

		return item;
	});

	const sortedData = _.orderBy(formattedData, sortItem, [sortOrder]);

	return {
		headers,
		newData: sortedData,
	};
};

export default useTableDateSettings;
