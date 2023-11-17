import dbConnect from '../../database/dbConnect';
import user from '../../models/user';

export default async function handler(req, res) {
    await dbConnect();
    switch (req.method) {
        case 'POST':
            try {
                const credentials = JSON.parse(req.body);
                const myUser = await user.findOne({user_name: credentials.user_name});
                if (myUser && credentials.password == myUser.password) {
                    res.status(200).json({ success: true, data: {_id: myUser._id}})
                } else {
                    throw new Error("Invalid credentials");
                }   
                
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, errorCode: error })
            }
            break;
        default:
            res.status(400).json({ success: false })
    }
}