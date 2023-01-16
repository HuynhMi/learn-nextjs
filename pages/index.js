import BlogList from '@/components/BlogList';
import Title from '@/components/Title';
import { getBlogs } from '@/data/blogs';
import { getData } from '@/services/useFireStore';
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

export const getStaticProps = async () => {
	const blogs = await getData('blogs');
	return {
		props: {
			blogs,
		},
	};
};
