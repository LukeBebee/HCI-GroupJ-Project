export default async function handler(req, res) {
    
    switch (req.method) {
        case 'GET':
            try {
               
                const zipData = await fetch(`https://represent.opennorth.ca/postcodes/${req.query.zip}`, {
                    method: 'GET'
                });
                const zipJson = await zipData.json();
        
                res.status(200).json({ success: true, data: zipJson})
                
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, errorCode: error })
            }
            break;
        default:
            res.status(400).json({ success: false })
    }
}