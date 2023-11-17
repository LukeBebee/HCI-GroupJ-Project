// components/Menu.js
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Navbar from '../../components/navbar';
import { inter } from "../../utils/fonts";
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

export default function Menu() {
  return (
    <div className={styles.container}>
      <Navbar pageName="Menu" homePage={false}/>
      <Head>
        <title>Election Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Wrap each block with Link */}
        <Link href="/elections">
          
            <Image src="/images/elections.jpg" alt="Icon 1" width={50} height={50} />
            <h2>Elections</h2>
            <Image src="/images/arrow.jpg" alt="Arrow" width={30} height={30} />
          
        </Link>
        <Link href="/news">
          
            <Image src="/images/news.jpg" alt="Icon 2" width={50} height={50} />
            <h2>News</h2>
            <Image src="/images/arrow.jpg" alt="Arrow" width={30} height={30} />
          
        </Link>
        <Link href="/representatives">
          
            <Image src="/images/representatives.jpg" alt="Icon 3" width={50} height={50} />
            <h2>Representatives</h2>
            <Image src="/images/arrow.jpg" alt="Arrow" width={30} height={30} />
          
        </Link>
      </main>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column; /* Set to column for vertical stacking */
          align-items: center; /* Center items horizontally */
          background-color: #f5f5f5; /* Set the background color */
          padding: 20px;
        }
        /* Style the Link component as a block */
        .menuBlock {
          display: flex;
          align-items: center; /* Center items vertically */
          background-color: #e0e0e0; /* Slightly darker background color */
          padding: 20px;
          text-align: center;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px; /* Add margin between blocks */
          text-decoration: none; /* Remove default link underline */
          color: black; /* Set link color */
        }
        .menuBlock:hover {
          background-color: #d0d0d0; /* Darken on hover */
        }
        h2 {
          font-size: 24px;
          margin: 0 20px; /* Add space around text */
        }
      `}</style>

      <style jsx global>{`
        /* Your global styles here */
      `}</style>
    </div>
  );
};
