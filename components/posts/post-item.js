import classes from './post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

const PostItem = props => {
	const { title, image, excerpt, date, slug } = props.post;

	// format date
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long', // January
		year: 'numeric'
	});

	// image path
	const imagePath = `/images/posts/${slug}/${image}`;

	// link path
	const linkPath = `/posts/${slug}`;

	return (
		<li className={classes.post}>
			<Link href={linkPath}>
				<a>
					<div className={classes.image}>
						{/* layout='responsive' means the image will take up up the full available space  */}
						<Image src={imagePath} alt={title} width={300} height={200} layout='responsive' />
					</div>
					<div className={classes.content}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	);
};

export default PostItem;
