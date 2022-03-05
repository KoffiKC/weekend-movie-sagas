import { useSelector } from "react-redux"

function MovieDetails() {

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
            </main>
        </>
    )
}

export default MovieDetails