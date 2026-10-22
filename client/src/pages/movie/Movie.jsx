import styles from './Movie.module.css'; 
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Movie(){
    let { movieId } = useParams();
    // Allows you to pass data from one route to another
    const location = useLocation();

    // Initialize movie state with location.state OR null
    // Note: When the movie page is refreshed, the movie will be lost.
    // Thats why we add logic in the useEffect to fetch the data from the backend if movie is null

    const [movie, setMovie] = useState(location.state?.movie || null);

    // < -- Add useEffect here: get movie from backend in case movie info is lost (page refreshed) -->

    

    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [isSaved, setIsSaved] = useState(false);

    // TMDB Image Base URLs
    const backdropUrl = `https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/4868f620-8ff9-4e32-a19d-4ca0b71f46bc/compose?format=webp&width=2560`
    const posterUrl = `https://m.media-amazon.com/images/M/MV5BNmYxOTAzZWYtOGI3Yi00ODc3LTk5ZjYtZTY0MzVkZTg3YmRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg`

    return (
        
        <div className={styles.pageWrapper}>
            
            <div 
                className={styles.backdropHeader} 
                style={{ backgroundImage: `url(${backdropUrl})` }}
            />

            {/* Main Overlapping Content Card */}
            <div className={styles.contentContainer}>
                <div className={styles.movieHeaderCard}>
                    
                    {/* Poster Column */}
                    <div className={styles.posterWrapper}>
                        <img 
                        src={posterUrl} 
                        alt={movie.title} 
                        className={styles.posterImage} 
                        />
                    </div>

                    {/* Details Column */}
                    <div className={styles.detailsWrapper}>
                        <h1 className={styles.movieTitle}>
                            {movie.title} <span className={styles.releaseYear}>({movie.year})</span>
                        </h1>

                        <p className={styles.metaInfo}>
                         {movie.duration} • {movie.genres.join(', ')}
                        </p>

                        {/* Interactive User Actions */}
                        <div className={styles.actionsRow}>

                            {/* Star Rating Control */}
                            <div className={styles.ratingSection}>
                                <span className={styles.actionLabel}>Your Rating:</span>
                                <div className={styles.starContainer}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                        key={star}
                                        type="button"
                                        className={`${styles.starButton} ${
                                            star <= (hoverRating || userRating) ? styles.starActive : ''
                                        }`}
                                        onClick={() => setUserRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        aria-label={`Rate ${star} stars`}
                                        >
                                        ★
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Add to Watchlist Button */}
                            <button
                                type="button"
                                className={`${styles.listButton} ${isSaved ? styles.listButtonSaved : ''}`}
                                onClick={() => setIsSaved(!isSaved)}
                            >
                                {isSaved ? '✓ Saved to Watchlist' : '+ Add to Watchlist'}
                            </button>
                        </div>

                        {/* Overview / Plot */}
                        <div className={styles.overviewSection}>
                            <h3>Overview</h3>
                            <p>{movie.plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )


}