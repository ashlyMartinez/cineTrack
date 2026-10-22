import styles from './List.module.css';
import movies from '../../components/dummyData'

export default function List(){


  return (
    <div className = {styles.pageWrapper}>
        <h1>My Watchlist</h1>
        {movies.length === 0 ? (
            <p>Your watchlist is empty. Explore movies and click "+ Add to Watchlist"!</p>
        ) : (
            <div className={styles.listGrid}>
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