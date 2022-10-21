const setUserName = (nickname, lastname, title) => {
	let userName = `${nickname} ${lastname}`;

	if (title === "Doctor") userName = `Dr. ${userName}`;

	return userName;
};

export default setUserName;
