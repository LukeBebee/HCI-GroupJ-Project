import styles from '../styles/headerbar.module.css';
import { useRouter } from 'next/router'
import { inter } from '../utils/fonts';
export default function Navbar(props) {
    const router = useRouter()
    return (
        <header className={styles.headerbar}>
            {props.homePage ? (<div>
                Searchbar
            </div>) : (<button className={styles.backButton} onClick={() => router.back()}>
                <i className={`bi bi-arrow-left ${styles.buttonArrow}`}></i>
            </button>)}
            <div className={`${styles.pageName} ${inter.className}`}>{props.pageName}</div> 
        </header>
    );
}