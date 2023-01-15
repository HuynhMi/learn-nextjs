import Title from '@/components/Title';

export default function Blogs() {
	return (
		<>
			<Title title="All Blogs">
				<form>
					<input
						type="text"
						placeholder="Search..."
					/>
					<button type="submit">Search</button>
				</form>
			</Title>
		</>
	);
}
