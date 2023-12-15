import styled from "styled-components";

const MovieCard = (props) => {
    const {poster_path,title} = props.movie;
   return(
        <div className="col-3 d-flex align-items-center">
            <MovieWrapper>
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="Movie Poster"/>
                <h3>{title}</h3>
            </MovieWrapper>
        </div>
   )
}

const MovieWrapper = styled.div`
display:flex;
flex-direction:column;
img.movie-poster{
border-radius:8px;
aspect-ratio:300/450;
width:100%;
object-fit:cover;
}
`;

export default MovieCard;
