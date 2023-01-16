import { getDataById, getIds } from '@/services/useFireStore';
import style from '@/styles/BlogCard.module.css';
import formatDate from '@/utils/formatDate';
import clsx from 'clsx';
import Link from 'next/link';

export const getStaticPaths = async () => {
	const ids = await getIds('blogs');
	const paths = ids.map(({id}) => ({
		params: {
			id: id.toString(),
		},
	}));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const blog = await getDataById(params.id, 'blogs');
	return {
		props: {
			blog: blog,
		},
	};
};

function BlogDetail({ blog }) {
	const { name, tags, desc, time, content } = blog;
	const timer = formatDate(parseInt(time));
	
	return (
		<>
			<p className={clsx(style.timerTxt, 'text-center')}>{timer}</p>
			<h2 className="text-center">{name}</h2>
			<div className="text-center">
				{tags.map((tag, index) => (
					<Link
						key={index}
						href={`/tags/${tag}`}
						className={style.tag}
					>
						{tag}
					</Link>
				))}
			</div>
			<p className={clsx(style.desc, 'text-md')}>{content}</p>
		</>
	);
}

export default BlogDetail;
