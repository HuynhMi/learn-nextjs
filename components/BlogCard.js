import Link from 'next/link';
import style from '@/styles/BlogCard.module.css';
import clsx from 'clsx';

function BlogCard({
	title = 'title',
	tags = ['next-js', 'react-js'],
	desc = 'desc',
	time = 'August 7, 2021',
	id = 1,
}) {
	return (
		<div className={style.wrapper}>
			<span className={clsx(style.timerWrap, style.timerTxt)}>{time}</span>
			<div>
				<Link
					href={`/blogs/${id}`}
					className={style.title}
				>
					{title}
				</Link>
				<div className={style.content}>
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
