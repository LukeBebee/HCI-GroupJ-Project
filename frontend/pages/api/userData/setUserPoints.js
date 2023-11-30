import dbConnect from '../../../database/dbConnect';
import user from '../../../models/user';

export default async function handler(req, res) {
    await dbConnect();
    switch (req.method) {
        case 'POST':
            try {
                const reqObj = JSON.parse(req.body);
                console.log(reqObj);
                let myUser = await user.findById(reqObj.id)
                myUser.points = reqObj.points;
                const saveResults = await myUser.save();
                res.status(200).json({success:true, data: saveResults})
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, errorCode: error })
            }
            break;
        default:
            res.status(400).json({ success: false })
    }
}