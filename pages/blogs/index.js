import { getData, getDocs, getIds } from '@/services/useFireStore';

import BlogCard from '@/components/BlogCard';
import Title from '@/components/Title';
import SearchForm from '@/components/SearchForm';
import { useState } from 'react';

export default function Blogs({ blogs }) {
	const [listSearch, setListSearch] = useState();
	const [isSearching, setIsSearching] = useState('');

	const handleSearch = (search) => {
		if (search) {
			const result = blogs.filter((blog) => {
				const str = [blog.name, blog.tags.join(''), blog.content]
					.join('')
					.trim();
				return str.search(search) > -1;
			});
			setListSearch(result);
			setIsSearching(
				result.length > 0 ? 'Result of Search' : 'No result'
			);
		} else {
			setListSearch(false);
			setIsSearching('');
		}
	};

	const listDisplay = listSearch ? listSearch : blogs;

	return (
		<>
			<Title title="All Blogs">
				<SearchForm handleSearch={handleSearch} />
			</Title>
			<h2>{isSearching}</h2>
			{listDisplay.map((blog) => (
				<BlogCard
					key={blog.id}
					{...blog}
				/>
			))}
		</>
	);
}

export const getStaticProps = async () => {
	const blogs = await getData('blogs');
	return {
		props: {
			blogs: blogs,
		},
	};
};
