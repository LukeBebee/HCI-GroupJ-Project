import styles from '../styles/headerbar.module.css';
export default function Navbar(props) {
    return (
        
        
        <div className={styles.headerbar}>
            {props.homePage ? (<div>
                Searchbar
            </div>) : (<button>
                Backbutton
            </button>)}
        
            <div>{props.pageName}</div>   
        </div>
    );
}