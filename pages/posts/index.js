import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/posts-util';

const AllPostsPage = props => {
	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta name='description' content='A list of all programming-related tutorials and posts' />
			</Head>
			<AllPosts posts={props.allPosts} />
		</>
	);
};

export function getStaticProps() {
	// get all posts
	const allPosts = getAllPosts();

	return {
		props: {
			allPosts: allPosts
		}
	};
}

export default AllPostsPage;
