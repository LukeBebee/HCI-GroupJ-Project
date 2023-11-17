import Head from 'next/head';
import Navbar from '../components/navbar';
import { ebGaramond } from "../utils/fonts";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({zipCode: ""});
  const updateForm = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const search = () => {
    const strippedZip = formData.zipCode.replace(/\s/g, "").toUpperCase();
    setFormData({...formData, zipCode: strippedZip});
    const valid = /^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(strippedZip);
    if (!valid) {
      alert("Invalid zip code!");
    } else {
      sessionStorage.setItem("zipcode", strippedZip);
      //TODO: Push to menu page
      router.push("menu/menu");
    }
  }
  return (
    <div>
      <Navbar pageName="Home Page" homePage={true}/>
      <Head>
        <title>Election Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="imgparent">
          <div className= "searchandlogo">
            <div className={`${ebGaramond.className} logowordform`}><i className="bi bi-clipboard-data"></i> ElectionInfo</div>
            <div className="searchandarrow">
            <form>
            <input className="searchbox" type="text" name="zipCode" placeholder="Enter your postal code (e.g. A1A1A1)" value={formData.zipCode} onChange={updateForm}>
            </input>
            
            </form>
            <button className="forwardbutton" onClick={search}> <i className="bi bi-arrow-right buttonarrow"></i> </button>

            </div>
          </div>
        
        <Image
              priority
              src="/images/montreal.jpg"
              id="bigImage"
              fill={true}
              alt="Montreal Skyline"
              style={{objectFit: "cover", opacity: 0.15, position: "absolute", zIndex: "-1"}}
            />
         </div>
      </main>


      <style jsx>{`
        .main {
          width: 100%;
          height: calc(100vh - 70px);
        }
        .imgparent {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .searchandlogo {
          position: absolute;
          top: 35%;
          left: calc(50% - 200px);
        }
        .searchbox {
          width: 335px;
          height: 60px;
          font-size: 17px;
          border-radius: 20px;
          border-color: rgba(0,0,0, 0.2);
          padding-left: 10px;
        }
        .logowordform {
          font-size: 55px;
          text-align: center;
        }
        .searchandarrow {
          width: 400px;
          display: flex;
          flex-direction: row;
        }
        .forwardbutton{
          width: 60px;
          height: 60px;
          background-color: hsl(36.1, 100%, 51.2%);
          border-width: 0;
          border-radius: 50%;
          transition: 250ms;
          margin-left: 5px;
          .buttonarrow{
              font-size: 40px;
              color: white;
          }
        }
        .forwardbutton:hover {
          background-color: hsl(36.1, 100%, 60%);
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
