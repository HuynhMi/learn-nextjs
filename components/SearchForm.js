import { useEffect, useRef, useState } from 'react';
import style from '@/styles/Form.module.css';
import { BiLoaderCircle, BiSearch } from 'react-icons/bi';

function SearchForm({ handleSearch }) {
	const [keySearch, setKeySearch] = useState('');
	const [isSearching, setIsSearching] = useState(false);
	const searchRef = useRef();

	const handleChange = (e) => {
		const value = e.target.value.trim();
		value && setIsSearching(true);
		setKeySearch(value);
	};

	useEffect(() => {
		searchRef.current && clearTimeout(searchRef.current);

		searchRef.current = setTimeout(() => {
			handleSubmit();
			setIsSearching(false);
		}, 500);

		return () => {
			clearTimeout(searchRef.current);
		};
	}, [keySearch]);

	const handleSubmit = () => {
		handleSearch(keySearch);
	};

	return (
		<form className={style.searchForm}>
			<input
				id="search"
				name="search"
				type="text"
				placeholder="Type to search"
				onChange={handleChange}
			/>
			<button type="submit">
				{isSearching ? <BiLoaderCircle /> : <BiSearch />}
			</button>
		</form>
	);
}

export default SearchForm;
