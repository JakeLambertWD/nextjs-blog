import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';
import Image from 'next/image';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostContent = props => {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	// custom renderers for Markdown
	const customRenderers = {
		// NOT WORKING
		paragraph(paragraph) {
			const { node } = paragraph;

			// takes a HTML img element and converts to a Next Image
			if (node.children[0].type === 'image') {
				const image = node.children[0];

				return (
					<div className={classes.image}>
						<Image src={`/images/posts/${post.slug}/${image.url}`} alt={image.alt} width={600} height={300} />;
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},

		// NOT WORKING
		code(code) {
			const { language, value } = code;

			return <SyntaxHighlighter style={atomDark} language={language} children={value} />;
		}
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			{/* markdown to JSX translation */}
			{/* to overwrite how certain elements are rendered, we use the renderers prop */}
			<ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
