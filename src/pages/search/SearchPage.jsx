import styles from './SearchPage.module.css'
import MovieGrid from '../../components/MovieGrid';

export default function SearchPage(){
    return (
        <div className={styles.searchPage}>
            <div className={styles.welcomeHeader}>
                <h1 className={styles.welcomeText}>Welcome.<br></br>Find your next favorite movie.</h1>
                
            </div>
            <div className={styles.dashBoard}>
                <MovieGrid />

            </div>


        </div>
        
    )


}