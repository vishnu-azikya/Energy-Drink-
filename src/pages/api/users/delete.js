import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/user';
import { authenticate } from '../../../middleware/auth';

export default async function handler(req, res) {
    if (req.method !== 'DELETE') return res.status(405).end();
    await dbConnect();
    authenticate(req, res, async () => {
        const { id } = req.body;
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'User deleted' });
    });
}