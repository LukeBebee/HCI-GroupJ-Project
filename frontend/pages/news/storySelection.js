// components/Menu.js

import Navbar from '../../components/navbar';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { useState, useEffect } from "react"
import ElectionInfo from '../../components/electionInfo';
import { inter } from '../../utils/fonts';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {

  const [ myData, setMyData ] = useState({zip: ""});
  useEffect(() => {
    setMyData({zip: sessionStorage.getItem("zipcode")});
  }, []);

  const montrealBoolean = !(myData.zip.slice(0, 3) < "H1A" || myData.zip.slice(0, 3) > "H5B");
  
  return (
    <div className={inter.className}>
      <Navbar pageName={myData.zip + " News Stories"} homePage={false}/>
      <Head>
        <title>Election Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Wrap each block with Link */}

        {!montrealBoolean &&
        <h2> No news stories are currently available for your postal code. </h2>   
    }

    {montrealBoolean &&
        <Link href="./news" style={{textDecoration: "none"}}>
        <div className="menuBlock"> 
            <i className="bi bi-newspaper bigIcon"></i>
            <h2 className={inter.className}>Montreal News: Notice – Intention to Withdraw Authorization: Quartiers Montréal</h2>
            <div></div>
            <i className="bi bi-chevron-double-right rightChev"></i>
      </div>    
        </Link>
    }
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column; /* Set to column for vertical stacking */
          align-items: center; /* Center items horizontally */
          background-color: #f5f5f5; /* Set the background color */
          padding: 20px;
          height: calc(100vh - 70px);
        }
        /* Style the Link component as a block */
        .menuBlock {
          display: grid;
          grid-template-columns: 50px auto auto 50px;
          align-items: center; /* Center items vertically */
          background-color: #e0e0e0; /* Slightly darker background color */
          padding: 20px;
          text-align: left;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px; /* Add margin between blocks */
          text-decoration: none; /* Remove default link underline */
          color: black; /* Set link color */
          width: 90vw;
        }
        .menuBlock:hover {
          background-color: #d0d0d0; /* Darken on hover */
        }
        h2 {
          font-size: 24px;
          margin: 0 20px; /* Add space around text */

        }
        .bigIcon {
          font-size: 50px;
        }
        .rightChev {
          font-size: 30px;
          
        }
        
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
        
      }</style>

      <style jsx global>{`
        /* Your global styles here */
      `}</style>
    </div>
  );
};
