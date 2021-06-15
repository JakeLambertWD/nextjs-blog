import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// point the directory to the file
const postsDirectory = path.join(process.cwd(), 'posts'); // posts/getting-started-with-nextjs.md

// read all the posts from the posts folder synchronously
export function getPostsFiles() {
	return fs.readdirSync(postsDirectory);
}

// get data from the post file
export const getPostData = postIdentifier => {
	// removes file extension
	const postSlug = postIdentifier.replace(/\.md$/, '');

	// path to the file
	const filePath = path.join(postsDirectory, `${postSlug}.md`);

	// read the content of the file
	const fileContent = fs.readFileSync(filePath, 'utf-8');

	// return a object with 2 properties (meta data & JS object/markdown string)
	const { data, content } = matter(fileContent);

	// what we return from this function
	const postData = {
		slug: postSlug,
		...data,
		content
	};

	return postData;
};

export const getAllPosts = () => {
	// read post files
	const postFiles = getPostsFiles();

	// get meta data & contents from the post files
	const allPosts = postFiles.map(postFile => {
		return getPostData(postFile);
	});

	// sort posts in order of most recent
	const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
	return sortedPosts;
};

export const getFeaturedPosts = () => {
	// get all posts
	const allPosts = getAllPosts();

	// filter featured posts
	const featuredPosts = allPosts.filter(post => post.isFeatured);
	return featuredPosts;
};

export default getAllPosts;
