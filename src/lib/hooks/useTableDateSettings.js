import _ from "lodash";

const useTableDateSettings = (
	data = [],
	datamap = {},
	datasettings = {},
	sortItem,
	sortOrder = "asc",
	search = ""
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

	data.forEach((item, index) => {
		Object.keys(datasettings).forEach((next) => {
			newData[index][next] = datasettings[next](item);
		});
	});

	const searchData = newData.filter((item) => {
		let counter = false;
		Object.values(item).forEach((next, index) => {
			if (
				index !== 0 &&
				next?.toString().toLowerCase().includes(search.toLowerCase())
			) {
				return (counter = true);
			}
		});
		if (counter === true) return item;
		else return null;
	});

	const sortedData = _.orderBy(searchData, [sortItem], [sortOrder]);

	return {
		headers,
		newData: sortedData,
	};
};

export default useTableDateSettings;
