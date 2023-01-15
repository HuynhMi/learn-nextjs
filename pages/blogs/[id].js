import { getBlogById, getIds } from '@/data/blogs';
import style from '@/styles/BlogCard.module.css';
import clsx from 'clsx';

export const getStaticPaths = () => {
	const ids = getIds();
	const paths = ids.map((id) => ({
		params: {
			id: id.toString(),
		},
	}));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = ({ params }) => {
	const id = params.id * 1;
	const blog = getBlogById(id);
	return {
		props: {
			blog: blog,
		},
	};
};

function BlogDetail({ blog }) {
	const { title, tags, desc, time, id, content } = blog;
	return (
		<>
			<p className={clsx(style.timerTxt, 'text-center')}>{time}</p>
			<h2 className="text-center">{title}</h2>
			<p className={clsx(style.desc, 'text-md')}>{content}</p>
		</>
	);
}

export default BlogDetail;
