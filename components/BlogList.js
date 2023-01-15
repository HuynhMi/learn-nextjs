import BlogCard from './BlogCard';

function BlogList({ blogs }) {
	return (
		<>
			{blogs.map((blog) => (
				<BlogCard
					{...blog}
					key={blog.id}
				/>
			))}
		</>
	);
}

export default BlogList;
