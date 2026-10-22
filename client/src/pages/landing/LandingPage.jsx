import styles from './LandingPage.module.css'
import MovieGrid from '../../components/MovieGrid';

export default function LandingPage(){





    
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.welcomeHeader}>
                <h1 className={styles.welcomeText}>Welcome.<br></br>Find your next favorite movie.</h1>
                
            </div>
            <div className={styles.dashBoard}>
                <h3 className= {styles.title}>| Top 10 Movies</h3>
                
                <MovieGrid />

            </div>
            <div className={styles.dashBoard}>
                <h3 className= {styles.title}>| Recommended For You</h3>
                
                <MovieGrid />
            </div>


        </div>
        
    )


}