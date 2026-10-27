import styles from './SearchPage.module.css';
import movies from '../../components/dummyData';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
export default function SearchPage(){

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    // Filter your movies array based on the input before mapping over it:
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genres.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleMovieClick = (movie) =>{
        navigate(`/movie/${movie.id}`, { state: {movie: movie}})
    }


    return (
        <div className = {styles.pageWrapper}>
            <div className = {styles.navContainer}>
                <div className={styles.searchBarWrapper}>
                    <input
                        type="text"
                        placeholder="Search movies by title, genre..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>

            </div>
            <div className = {styles.resultContainer}>
                <div className = {styles.movieListContainer}>
                    { movies.length === 0 ?
                        (<p className = {styles.noResults}> No results found </p>

                        ): (movies.map((movie) => (
                            <div key={movie.id} className={styles.horizontalCard} onClick={()=>{handleMovieClick(movie)}}>
                                
                                <img
                                    src={movie.posterUrl}
                                    alt={movie.title}
                                    className={styles.horizontalImage}
                                />

                                <div className={styles.horizontalContent}>
                                    <h3 className={styles.movieTitle}>
                                        {movie.title} <span className={styles.releaseYear}>({movie.year})</span>
                                    </h3>
                                    <p className={styles.shortMeta}>
                                    {movie.duration} • ★ {movie.rating}
                                    </p>
                                    <p className={styles.cardPlot}>{movie.plot}</p>
                                </div>
                            </div>
                        )))
                    }
                </div>
                
            </div>
        </div>
    )


}