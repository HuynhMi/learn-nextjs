function formatDate(milliseconds) {
	const date = new Date(milliseconds);
	let [d, m, y] = [date.getDate(), date.getMonth(), date.getFullYear()];

	let months = [
		'Jan',
		'Feb',
		'Match',
		'Apr',
		'May',
		'Jun',
		'June',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	return `${months[m]} ${d < 10 ? '0' + d : d}, ${y}`;
}

export default formatDate;
