import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method == 'POST') {
		const { email, name, message } = req.body;

		// store in a database
		const newMessage = {
			email,
			name,
			message
		};

		// mongodb
		let client;

		// connect to environment variables
		// now you can access 'process.env.customKey' in your code
		const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.fwhyj.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

		try {
			client = await MongoClient.connect('mongodb+srv://next-blog:euGcIa6KjnfxUAus@cluster0.fwhyj.mongodb.net/my-site?retryWrites=true&w=majority');
		} catch (err) {
			res.status(500).json({ message: 'Could not connect  to db' });
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection('messages').insertOne(newMessage);

			// manually add the auto generated id from mongodb
			newMessage.id = result.insertedId;
		} catch (err) {
			client.close();
			res.status(500).json({ message: 'Storing msg failed' });
			return;
		}

		client.close();

		res.status(201).json({ message: 'Success', message: newMessage });
	}
}

export default handler;
