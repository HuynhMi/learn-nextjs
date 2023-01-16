import Link from 'next/link';
import style from '@/styles/BlogCard.module.css';
import clsx from 'clsx';
import formatDate from '@/utils/formatDate';

function BlogCard({
	name = 'title',
	tags = ['next-js', 'react-js'],
	desc = 'desc',
	time = '00000',
	id = 1,
}) {
	const timer = formatDate(parseInt(time));
	return (
		<div className={style.wrapper}>
			<span className={clsx(style.timerWrap, style.timerTxt)}>
				{timer}
			</span>
			<div className={style.content}>
				<Link
					href={`/blogs/${id}`}
					className={style.title}
				>
					{name}
				</Link>
				<div>
					{tags.map((tag) => (
						<Link
							className={style.tag}
							key={tag}
							href={`/tags/${tag}`}
						>
							{tag}
						</Link>
					))}
				</div>
				<p className={clsx('text-md', style.desc)}>{desc}</p>
				<Link
					href={`/blogs/${id}`}
					className={clsx('text-md', style.btn)}
				>
					Read more
				</Link>
			</div>
		</div>
	);
}

export default BlogCard;
