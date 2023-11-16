import styles from '../styles/headerbar.module.css';
import { useRouter } from 'next/router'
import { inter } from '../utils/fonts';
export default function Navbar(props) {
    const router = useRouter()
    const profileButtonClicked = () => {
        if (localStorage.getItem("userId")) {
            router.push("/userProfile/userProfile");
        } else {
            router.push("/authentication/loginOrSignup");
        }
    }

    return (
        <header className={`${styles.headerbar} ${props.homePage ? styles.headerBarOverride : ""}`}>
            {props.homePage ? (<div>
               
            </div>) : (<button className={styles.backButton} onClick={() => router.back()}>
                <i className={`bi bi-arrow-left ${styles.buttonArrow}`}></i>
            </button>)}
            <div className={`${styles.pageName} ${inter.className}`}>{props.pageName}</div> 
            {/* Buffer for grid */}
            <div></div>
            {
                props.userPages ? <div></div> : <button className={styles.profileButton} onClick={profileButtonClicked}>
                    <i className={`bi bi-person ${styles.buttonPerson}`}></i>
                </button>
            }
        </header>
    );
}