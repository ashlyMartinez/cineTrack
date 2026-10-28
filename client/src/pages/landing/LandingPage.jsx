import styles from './LandingPage.module.css'
import MovieGrid from '../../components/MovieGrid';
import NavBar from '../../components/navbars/NavBar';
export default function LandingPage(){


    return (
        <div className={styles.pageWrapper}>
            <div className = {styles.nav}>
                <NavBar />
            </div>
            <div className = {styles.container}>
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
            


        </div>
        
    )


}