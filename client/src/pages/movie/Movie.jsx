
import styles from './Movie.module.css'; 

export default function Movie(){


    return (
        <div className = {styles.movieContainer}>
           
            <div className = {styles.movieImgContainer}>
                <img className = {styles.moviePoster} href = "#"></img>

            </div>

        </div>
    )


}