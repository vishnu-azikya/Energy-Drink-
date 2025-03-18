import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/user';
import { authenticate } from '../../../middleware/auth';

export default async function handler(req, res) {
	if (req.method !== 'GET') return res.status(405).end();
	await dbConnect();
	authenticate(req, res, async () => {
			const users = await User.find();
			res.status(200).json(users);
	});
}