import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import { inter } from "../utils/fonts";
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar pageName="Montreal Election Information" homePage={true}/>
      <Head>
        <title>Election Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <>
        
        <Image
              priority
              src="/images/montreal.jpg"
              width={683}
              height={384}
              alt="Montreal Skyline"
            />
      </>
        
        <h1 className={styles.title}>
          Input your location or log in to begin!
        </h1>


        <div className={styles.grid}>
        <a href="" className={styles.card}>
            <h3>Enter Location &rarr;</h3>
            <p>Find information based on your election location</p>
          </a>
          <a href="/authentication/loginOrSignup" className={styles.card}>
            <h3>Login &rarr;</h3>
            <p>Log in to the app to access more features</p>
          </a>
        </div>
      </main>

      <footer>
        
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        h1 {
          font-size: 50px;
          font-weight: 300;
        }
        h2 {
          font-size: 50px;
          font-weight: 200;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
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
