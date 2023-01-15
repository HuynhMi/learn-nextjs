const blogs = [
	{
		id: 1,
		title: 'New features in v1',
		tags: ['next-js', 'tailwind', 'guide'],
		desc: 'An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more',
		content:
			'You can customise the headings that are displayed by configuring the fromHeading and toHeading props, or exclude particular headings by passing a string or a string array to the exclude prop. By default, all headings that are of depth 3 or smaller are indented. This can be configured by changing the indentDepth property. A asDisclosure prop can be used to render the TOC within an expandable disclosure element.',
		time: 'August 7, 2021',
	},
	{
		id: 2,
		title: 'New features in v1',
		tags: ['next-js', 'tailwind', 'guide'],
		desc: 'An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more',
		content:
			'You can customise the headings that are displayed by configuring the fromHeading and toHeading props, or exclude particular headings by passing a string or a string array to the exclude prop. By default, all headings that are of depth 3 or smaller are indented. This can be configured by changing the indentDepth property. A asDisclosure prop can be used to render the TOC within an expandable disclosure element.',
		time: 'August 7, 2021',
	},
	{
		id: 3,
		title: 'New features in v1',
		tags: ['next-js', 'tailwind', 'guide'],
		desc: 'An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more',
		content:
			'You can customise the headings that are displayed by configuring the fromHeading and toHeading props, or exclude particular headings by passing a string or a string array to the exclude prop. By default, all headings that are of depth 3 or smaller are indented. This can be configured by changing the indentDepth property. A asDisclosure prop can be used to render the TOC within an expandable disclosure element.',
		time: 'August 7, 2021',
	},
];

export const getBlogs = () => blogs;
export const getIds = () => blogs.map((blog) => blog.id);

export const getBlogById = (id) => {
	const blog = blogs.filter((blog) => blog.id === id);
	return blog[0];
};
