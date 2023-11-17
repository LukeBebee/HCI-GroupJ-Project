import { inter } from "../utils/fonts"
export default function ElectionInfo(props) {
    return (
        <div className={`electioninfo ${inter.className}`}>
            <h2>{props.ElectionType}</h2>
            <div>Election date: {props.ElectionDate}</div>
            <style jsx>
                {
                    `
                    .electioninfo {
                        background-color: rgba(0,0,0,0.05);
                        padding: 10px;
                        width: 450px;
                    }
                    
                    `
                }
            </style>
        </div>
    )
}