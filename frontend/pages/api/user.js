import { NextApiRequest, NextApiResponse} from 'next';
import dbConnect from '../../database/dbConnect';
import user from '../../models/user';

export default async function handler(req, res) {
    await dbConnect();
    switch (req.method) {
        case 'POST':
            try {
                const myuser = await user.create(JSON.parse(req.body));
                res.status(201).json({ success: true, data: myuser })
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, errorCode: error })
            }
            break;
        default:
            res.status(400).json({ success: false })
    }
}