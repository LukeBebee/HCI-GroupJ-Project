import Navbar from '../../components/navbar';
import Head from 'next/head';
import { useState, useEffect } from "react"
import ElectionInfo from '../../components/electionInfo';
import { inter } from '../../utils/fonts';
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
    return (
        <div className={inter.className}>
            <Navbar pageName={`${myData.zip} / Elections`} homePage={false}/>
            <Head>
                <title>Elections</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Recent elections</h1>
                <div className ="electionsContainer">
                    <ElectionInfo ElectionType={myData.electionsData?.fedData?.name} ElectionDate={myData.electionsData?.fedData?.election_date}/>
                    <ElectionInfo ElectionType={myData.electionsData?.provData?.name} ElectionDate={myData.electionsData?.provData?.election_date}/>
                </div>
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
                    `
                }
            </style>
        </div>
    )
}