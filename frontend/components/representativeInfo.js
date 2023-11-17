import { inter } from "../utils/fonts"
export default function RepresentativeInfo(data) {
    const props = data.props;
    return (
        <div className={`representativeinfo ${inter.className}`}>
            <h1>{props.elected_office}</h1>
            <h2>{props.first_name} {props.last_name}</h2>
            <img src={props.photo_url}></img>
            <div>Party: {props.party_name}</div>
            <div>District: {props.district_name}</div>
            <a href={props.url}>View Website</a>
            <style jsx>
                {
                    `
                    .representativeinfo {
                        background-color: rgba(0,0,0,0.05);
                        padding: 10px;
                        width: 300px;
                    }
                    
                    `
                }
            </style>
        </div>
    )
}