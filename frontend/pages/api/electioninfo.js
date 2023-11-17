export default async function handler(req, res) {
    
    switch (req.method) {
        case 'GET':
            try {
                const fedData = await fetch('https://represent.opennorth.ca/elections/house-of-commons', {
                    method: 'GET'
                });
                const provData = await fetch('https://represent.opennorth.ca/elections/assemblee-nationale-du-quebec', {
                    method: 'GET'
                });
                const fedJson = await fedData.json();
                const provJson = await provData.json();
                res.status(200).json({ success: true, data: {fedData: fedJson, provData: provJson}})
                
            } catch (error) {
                console.log(error);
                res.status(400).json({ success: false, errorCode: error })
            }
            break;
        default:
            res.status(400).json({ success: false })
    }
}