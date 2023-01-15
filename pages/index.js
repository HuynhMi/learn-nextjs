import BlogList from '@/components/BlogList';
import Title from '@/components/Title';
import { getBlogs } from '@/data/blogs';
export default function Home({ blogs }) {
	return (
		<>
			<Title
				title="Latest"
				desc="Discover all the latest our blogs"
			/>
			<BlogList blogs={blogs} />
		</>
	);
}

export const getStaticProps = () => {
	return {
		props: {
			blogs: getBlogs(),
		},
	};
};
