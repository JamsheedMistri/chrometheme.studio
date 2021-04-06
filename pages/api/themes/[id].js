import 'dotenv';
import url from 'url';
import { MongoClient, ObjectID } from 'mongodb';

let cachedDatabase = null;

async function connectToDatabase(uri) {
	if (cachedDatabase) return cachedDatabase;

	const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = await client.db(url.parse(uri).pathname.substr(1));
	cachedDatabase = db;
	return db;
}

module.exports = async (req, res) => {
	if (req.method !== 'POST') {
		return res.status(404).json({
			error: "invalid request",
		});
	}

	const { id } = req.query;

	const db = await connectToDatabase(process.env.MONGODB_URI);
	const collection = await db.collection('themes');

	try {
		const result = await collection.findOne({ _id: ObjectID(id) });
		delete result['_id'];
		res.status(200).json({
			status: 'success',
			theme: result
		});
	} catch {
		res.status(500).json({
			error: 'internal server error while fetching theme'
		});
	}
}
