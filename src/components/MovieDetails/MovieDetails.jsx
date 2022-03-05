import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom';


function MovieDetails() {

    const history = useHistory()
    
    const details = useSelector(store => store.selectedMovie)
    const genres = useSelector(store => store.genres)

    console.log('these are the deets', details, genres);
    return (
        <>
            <main>
                <h2>{details.title}</h2>

                <div key={details.id} >
                    <img onClick={() => handleClick(movie)} src={details.poster} alt={details.title} />
                    <p>{details.description}</p>
                </div>
                <h4>genres</h4>
                {genres.map(genre => (
                    <p>{genre.genre}</p>
                ))}
                <button onClick={() => history.push('/')}>Back</button>
            </main>
        </>
    )
}

export default MovieDetails