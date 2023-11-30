import Navbar from '../../components/navbar';

import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { useState, useEffect } from "react"
import ElectionInfo from '../../components/electionInfo';
import { inter } from '../../utils/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function Elections() {
    const [ myData, setMyData ] = useState({zip: "", electionsData: null});
    useEffect(() => {
        const fetchElection = async () => {
            try {
                const res = await fetch('/api/electioninfo', {
                    method: 'GET'
                })
                if (!res.ok) {
                    throw new Error(res.status.toString());
                }
                const data = (await res.json()).data;
                console.log(data);
                setMyData({zip: sessionStorage.getItem("zipcode"), electionsData: data});
            } catch (error) {
                alert("Error occurred fetching election data")
                console.log(error);
            }
        }
        if (!myData.electionsData) {
            fetchElection();
        }

        console.log(myData);
        
    }, [])
    const montrealBoolean = !(myData.zip.slice(0, 3) < "H1A" || myData.zip.slice(0, 3) > "H5B");
    return (
        <div className={inter.className}>
            <Navbar pageName={`${myData.zip} / Elections`} homePage={false}/>
            <Head>
                <title>Elections</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            
            <main>
                { montrealBoolean &&
                <div>
                    <h1>Recent elections</h1>
                    <div className ="electionsContainer">
                        <ElectionInfo ElectionType={myData.electionsData?.fedData?.name} ElectionDate={myData.electionsData?.fedData?.election_date}/>
                        <ElectionInfo ElectionType={myData.electionsData?.provData?.name} ElectionDate={myData.electionsData?.provData?.election_date}/>
                    </div>
                    <Link href="https://www.electionsquebec.qc.ca/en/vote/making-sure-your-name-is-on-the-list-of-electors/">
                        <div className ="linkContainer">
                        <Image  
                                src="/images/elections-quebec.jpg"
                                width={179}
                                height={52}
                                alt="Elections Quebec"
                            />
                            <p>Check your eligibility to vote in Quebec here!</p>
                            
                        </div>
                    </Link>
                </div>
                }
                { !montrealBoolean &&
                <div>
                    <h2>No election information is currently available for your postal code.</h2>
                    
                </div>
                }

            </main>
            
            <style jsx>
                {
                    `
                        .electionsContainer {
                            display: flex;
                            flex-direction: row;
                            height: 580px;
                            gap: 20px;
                        }
                        .linkContainer {
                            display: flex;
                            flex-direction: row;
                            height: 100px;
                            gap: 10px;
                        }
                        main {
                            display: flex;
                            flex-direction: column; /* Set to column for vertical stacking */
                            align-items: center; /* Center items horizontally */
                            background-color: #f5f5f5; /* Set the background color */
                            padding: 20px;
                            height: calc(100vh - 70px);
                        }
                        h2 {
                            font-size: 24px;
                            margin: 0 20px; /* Add space around text */
                        }
                    `
                }
            </style>
        </div>
    )
}