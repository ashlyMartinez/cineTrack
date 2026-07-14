import styles from './MovieGrid.module.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const dummyMovies = [
  {
    id: "1",
    title: "Neon Horizon",
    year: 2024,
    genres: ["Sci-Fi", "Action", "Cyberpunk"],
    rating: 8.4,
    duration: "2h 15m",
    director: "Elena Vance",
    posterUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=500&q=80",
    plot: "In a rain-drenched futuristic metropolis, a cybernetic detective uncovers a conspiracy that threatens to erase the memories of the city's entire population."
  },
  {
    id: "2",
    title: "The Silent Forest",
    year: 2023,
    genres: ["Mystery", "Thriller", "Drama"],
    rating: 7.9,
    duration: "1h 58m",
    director: "Marcus Thorne",
    posterUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80",
    plot: "When a renowned biologist vanishes in an ancient, uncharted woodland, her estranged daughter follows her trail into a world where nature defies physics."
  },
  {
    id: "3",
    title: "Chef's Legacy",
    year: 2025,
    genres: ["Comedy", "Drama"],
    rating: 8.1,
    duration: "1h 45m",
    director: "Sophia Chen",
    posterUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80",
    plot: "A high-strung Michelin-star chef loses his restaurant to a corporate takeover, prompting him to rediscover his love for cooking by opening a humble seaside food truck."
  },
  {
    id: "4",
    title: "Chasing Midnight",
    year: 2022,
    genres: ["Action", "Adventure"],
    rating: 7.2,
    duration: "2h 05m",
    director: "Julian Rossi",
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80",
    plot: "Two rival art thieves are forced to team up across Europe to steal back a priceless artifact from a highly secure underground bunker."
  },
  {
    id: "5",
    title: "Echoes of Jupiter",
    year: 2026,
    genres: ["Sci-Fi", "Adventure"],
    rating: 8.7,
    duration: "2h 42m",
    director: "Aris Thorne",
    posterUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80",
    plot: "The crew of a deep-space exploration vessel receives a mysterious audio transmission originating from the icy core of Jupiter's moon, Europa."
  },
  {
    id: "6",
    title: "Starlight Melody",
    year: 2024,
    genres: ["Romance", "Music", "Drama"],
    rating: 7.5,
    duration: "1h 52m",
    director: "Chloe Dupont",
    posterUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=500&q=80",
    plot: "An aspiring jazz pianist and a classical violinist cross paths in Paris, sparking a bittersweet romance that tests the boundaries of their artistic ambitions."
  }
];
     
export default function MovieGrid(){
    return (
        <div className={styles.movieGrid}>

            <h2 className={styles.movieGridHeader}> | Trending Movies</h2>
            <div className={styles.movieGridContainer}>
                
                {dummyMovies.map((movie) => (
                    <div className={styles.movieCard} key={movie.id}>
                        <div className={styles.cardImageContainer}>
                            <img src={movie.posterUrl} alt={movie.title} className={styles.cardImage} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{movie.title}</h3>
                            <p className={styles.cardDetails}>{movie.year} | {movie.genres.join(', ')} | {movie.duration}</p>
                            
                        </div>  
                    </div>
                ))}
                
            </div>
        </div>
    )
}