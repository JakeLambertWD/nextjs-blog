import Head from 'next/head';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = props => {
	return (
		<>
			<Head>
				<title>Jake's Blog</title>
				<meta name='description' content='I post about programming and web development.' />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
};

export function getStaticProps() {
	// get featured posts
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts
		},
		// refresh every half hour
		revalidate: 1800
	};
}

export default HomePage;
