import 'dotenv'
import url from 'url'
import { MongoClient } from 'mongodb'
import hexToRGB from '../../../utils/HexToRGB'

let cachedDatabase = null

const connectToDatabase = async (uri) => {
	if (cachedDatabase) return cachedDatabase

	const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	const db = await client.db(url.parse(uri).pathname.substr(1))
	cachedDatabase = db
	return db
}

module.exports = async (req, res) => {
	if (req.method !== 'POST' || req.body == 'undefined' || typeof req.body !== 'object') {
		return res.status(404).json({
			error: 'invalid request',
		})
	}

	const colors = req.body
	const keys = [
		'frame',
		'frame_inactive',
		'frame_incognito',
		'frame_incognito_inactive',
		'background_tab',
		'background_tab_inactive',
		'background_tab_incognito',
		'background_tab_incognito_inactive',
		'tab_background_text',
		'tab_background_text_inactive',
		'tab_background_text_incognito',
		'tab_background_text_incognito_inactive',
		'toolbar',
		'toolbar_button_icon',
		'omnibox_text',
		'omnibox_background',
		'tab_text',
		'bookmark_text',
	]

	let themeColorsJSON = {}
	// Iterate through our color list in case they maliciously add more colors to flood the database
	for (const keyID in keys) {
		const key = keys[keyID]

		// Only add to db if the key actually exists in the request
		// Check if the key is actually a hex code
		if (key in colors && hexToRGB(colors[key]) != null) {
			themeColorsJSON = {
				...themeColorsJSON,
				[key]: colors[key],
			}
		}
	}

	const db = await connectToDatabase(process.env.MONGODB_URI)
	const collection = await db.collection('themes')

	try {
		const insertResult = await collection.insertOne(themeColorsJSON)
		res.status(200).json({
			status: 'success',
			id: insertResult.ops[0]._id,
		})
	} catch {
		res.status(500).json({
			error: 'internal server error while adding theme to database',
		})
	}
}
