import Head from 'next/head';
import ContactForm from '../components/contact/contact-form';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contract Me</title>
				<meta name='description' content='Send me your messages!' />
			</Head>
			<ContactForm />
		</>
	);
};

export default ContactPage;
