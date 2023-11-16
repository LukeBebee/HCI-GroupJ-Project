import dbConnect from '../../../database/dbConnect';
import user from '../../../models/user';

export default async function handler(req, res) {
    await dbConnect();
    switch (req.method) {
        case 'GET':
            try {
                const myuser = await user.findById(req.query.id);
                
                res.status(200).json({ success: true, data: {user_name: myuser.user_name, points: myuser.points} })
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, errorCode: error })
            }
            break;
        default:
            res.status(400).json({ success: false })
    }
}