import styles from './ListPage.module.css';
import movies from '../../components/dummyData'
import Navbar from '../../components/navbars/NavBar';
const nomovies = [];
export default function ListPage(){


  return (
    <div className = {styles.pageWrapper}>
        <div className = {styles.nav}>
                        <Navbar />
                    </div>

        <div className={styles.header}>
            <h1 className={styles.headerText}>My Watchlist</h1>
                        
        </div>

        {movies.length === 0 ? (
            <p>Your watchlist is empty. Explore movies and click "+ Add to Watchlist"!</p>
        ) : (
            <div className={styles.listContainer}>
                {movies.map((movie) => (
                    <div key={movie.movie_id} className={styles.listItem}>
                        
                        <img 
                            src={
                            movie.posterUrl} 
                            alt={movie.title} 
                            className={styles.posterImage}
                        />
                        
                        
                        <h3 className={styles.itemTitle}>{movie.title}</h3>

                        <button 
                            className={styles.rmvButton} 
                            onClick={() => handleRemove(movie.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
}