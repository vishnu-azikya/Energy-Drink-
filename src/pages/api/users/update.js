import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/user';
import { authenticate } from '../../../middleware/auth';

export default async function handler(req, res) {
    if (req.method !== 'PUT') return res.status(405).end();
    await dbConnect();
    authenticate(req, res, async () => {
        const { id, name, email } = req.body;
        const user = await User.findByIdAndUpdate(id, { name, email }, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    });
}