import { useSelector } from "react-redux"

function MovieDetails() {

    const details = useSelector(store => store.selectedMovie)
    const genres = useSelector(store => store.genres)

    console.log('these are the deets', details, genres);
    return(
        <>
            <p>shaboopee</p>
        </>
    )
}

export default MovieDetails