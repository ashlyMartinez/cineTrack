import React, { useState, useEffect } from 'react';
import styles from './MovieGrid.module.css'; // adjust path to your CSS module
import movies from './dummyData.js';
import { useNavigate } from 'react-router-dom';

export default function MovieGrid() {

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate(); 

  // Created event listener 'resize' to update windowWidth 
  // Tracking windowWidth will trigger different movie displays
  useEffect(() => {

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, []);


  // Breakpoints for differing movie grid displays 
  // -> Might need to update by testing w/ larger screens
  const isDesktop = windowWidth >= 1200;
  const isTablet = windowWidth < 1200 && windowWidth >= 640;
  const isMobile = windowWidth < 640;

  // Mobile slice: show top 3 by default, or all 10 if expanded
  const tabletMovies = isExpanded ? movies.slice(0,10): movies.slice(0,4)
  const mobileMovies = isExpanded ? movies.slice(0, 10) : movies.slice(0, 3);


  const handleMovieClick = (movie) =>{
    
    navigate(`/movie/${movie.id}`, { state: {movie: movie}})
  }


  return (
    <div className= {styles.container}>
      
      {/* Top 3 featured with full plot, next 7 in compact grid */}
      {isDesktop && (
        <>
          <div className = {styles.desktopTopGrid}>

            {
              movies.slice(0, 3).map((movie) => (
                <div key={movie.id} className={`${styles.desktopTopCard} cards`} onClick={()=>{handleMovieClick(movie)}}>
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className={styles.desktopTopImage}
                  />
                  <div className={styles.desktopTopContent}>
                    <h3 className={styles.cardTitle}> {movie.title} </h3>
                    <p className={styles.cardMeta}>
                      {movie.year} • {movie.genres.join(', ')} • {movie.duration}
                    </p>
                    <p className={styles.cardPlot}>{movie.plot}</p>
                  </div>

                  
                </div>
              ))
            }

          </div>

          <div className={styles.desktopBottomGrid}>

            {
              movies.slice(3, 10).map((movie) => (

                <div key={movie.id} className={styles.compactCard} onClick={()=>{handleMovieClick(movie)}}>
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className={styles.compactImage}
                  />
                  <div className={styles.compactContent}>
                    <h6 className={styles.cardTitle}> {movie.title} </h6>
                  </div>
                </div>

              ))
            }
          </div>
        </>
      )}

      {/* All top 10 movies in 2 columns with short inline metadata */}
      {isTablet && (
        <>
          <div className={styles.tabletTwoColGrid}>

            {
              tabletMovies.map((movie) => (
                <div key={movie.id} className={styles.horizontalCard} onClick={()=>{handleMovieClick(movie)}}>
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className={styles.horizontalImage}
                  />
                  <div className={styles.horizontalContent}>
                    <h4 className={styles.cardTitle}>{movie.title}</h4>
                    <p className={styles.shortMeta}>
                      {movie.year} • {movie.duration} • ★ {movie.rating}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className ={styles.toggleWrapper}>
            <button
            className= {styles.toggleButton}
            onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Show All Top 10 Movies'}
            </button>
          </div>
        </>
          

       
      )}

      {/*  Single column showing 3 initial cards + collapse/expand button */}
      {isMobile && (
        <div className={styles.mobileContainer}>
          <div className={styles.mobileSingleColGrid}>
            {mobileMovies.map((movie) => (
              <div key={movie.id} className={styles.horizontalCard} onClick={()=>{handleMovieClick(movie)}}>
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className={styles.horizontalImage}
                />
                <div className={styles.horizontalContent}>
                  <h4 className={styles.cardTitle}>{movie.title}</h4>
                  <p className={styles.shortMeta}>
                    {movie.year} • {movie.duration} • ★ {movie.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className= {styles.toggleButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Show All Top 10 Movies'}
          </button>
        </div>
      )}
    </div>
  );
}
