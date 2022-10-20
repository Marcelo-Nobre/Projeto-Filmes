import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { Container } from "./styles";

function Details () {
   
      const { id } = useParams()
      
      const [movie, setMovie] = useState({})
      const image_path = 'https://image.tmdb.org/t/p/w500'

      useEffect(() => {
        fetch(` https://api.themoviedb.org/3/movie/${id}?api_key=3813ec4cf90284820549cc6c655a1f02&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            
            const { title, poster_path, overview, release_Date} = data

            const movie ={
                id,
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseDate: release_Date
            }
            setMovie(movie)
        })
      }, [id])

    return (
        <Container>
            
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details"> 
                <h1>{movie.title}</h1>
                <span>Sinopse: {movie.sinopse}</span>
                <span className="release-date">Release Date: {movie.releaseDate}</span> 
                <Link to="/"><button>Go Back</button></Link>
                
                 
                </div>

            </div>
        
            </Container>
    )
}
export default Details;