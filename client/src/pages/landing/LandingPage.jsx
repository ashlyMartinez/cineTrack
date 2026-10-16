import styles from './LandingPage.module.css'
import MovieGrid from '../../components/MovieGrid';

export default function LandingPage(){
    return (
        <div className={styles.landingPage}>
            <div className={styles.welcomeHeader}>
                <h1 className={styles.welcomeText}>Welcome.<br></br>Find your next favorite movie.</h1>
                
            </div>
            <div className={styles.dashBoard}>
                <MovieGrid />

            </div>


        </div>
        
    )


}