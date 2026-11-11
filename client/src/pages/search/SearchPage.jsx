import styles from './SearchPage.module.css';
import movies from '../../components/dummyData';
import { useNavigate, useSearchParams} from 'react-router-dom';
import {useState, useEffect} from 'react'
import Navbar from '../../components/navbars/NavBar';
import MovieGrid from '../../components/MovieGrid';

export default function SearchPage(){

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const query = searchParams.get('q') || "";
    const hasQuery = query.length > 0;

    useEffect(() => {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [])
    ;


    // Filter your movies array based on the input before mapping over it:
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase()))
    );

    
    
    const handleSearchChange = (e) => {
        const value = e.target.value;
        if (value.trim() !== "") {
            setSearchParams({ q: value }); 
        } else {
            setSearchParams({}); 
        }
    };

    const handleMovieClick = (movie) =>{
        navigate(`/movie/${movie.id}`, { state: {movie: movie}})
    }

   

    return (
        <div className = {styles.pageWrapper}>
            <div className = {styles.nav}>
                <Navbar />
            </div>
            <div className = {styles.navContainer}>
                <div className={styles.searchBarWrapper}>
                    <input
                        type="text"
                        placeholder="Search movies by title, genre..."
                        value={query}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                </div>

            </div>
            {/* When a user creates an account, route user to search page with different movie grids underneath the search bar */}
            {/* Insert movie grids here */}
            <div className = {styles.resultContainer}>
                <div className = {styles.movieListContainer}>
                    {/* If there is no query than there should be something displayed under the searchbar */}
                    {/* Currently the default is "No Results Found" */}
                    {!hasQuery && (
                        <div className={styles.topMoviesContainer}>
                            <h2>Top Movies</h2>
                            <MovieGrid />
                        </div>
                    )}

                    {hasQuery && movies.length === 0 && (
                         <p className = {styles.noResults}>No Results Found</p>
                    )}

                    {hasQuery && movies.length !== 0 && 
                                          
                         (movies.map((movie) => (
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