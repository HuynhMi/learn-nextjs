function Title({ title = 'Title', desc, children }) {
	return (
		<div className="mb-30">
			<h1>{title}</h1>
			{desc && <p className="text-lg ">{desc}</p>}
			{children}
		</div>
	);
}

export default Title;
