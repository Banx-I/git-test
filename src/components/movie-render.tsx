
import { opisData } from "../data/movie";
import { MovieType } from "../types/main";
import Tag from "./tag";


type Props = {
  movie: MovieType | undefined;
  
};

const MovieRender = ({ movie }: Props) => {
  return (
    <>
      {movie ? (
        <div className="movie__container">
          <div className="movie__frontprofile">
          <img className="movie__profile" width={200} src={movie.imgUrl} alt={movie.name} />
          <div className="movie__details">
            <h2>{movie.name}</h2>
            <div className=" movie__mb-4">
              <b>{movie.year}</b>
            </div>
            <div className="movie__wrapper">
              {movie.genre.map((genre) => {
                return <Tag key={genre}>{genre}</Tag>;
              })}
            </div>
          
          </div>
          </div>
          
          <div className="movie__cast">
              <h3>Cast</h3>
              <div className="movie__grid">
                {movie.cast.map((actor) => {
                  return (
                    <div className="movie__actor" key={actor.realName}>
                      <img src={actor.imgUrl} alt={actor.realName} />
                      <div className="movie__names">
                        <div>{actor.realName}</div>
                        <div>
                          <b>{actor.movieName}</b>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="movie__down">
  {opisData.map((opis) => {
    return (
      <div className="movie__main" >
        <div className="movie__text">{opis.text}
        <img className="movie__opisImg" src={opis.textImg} alt="slika" />
        </div>
       
      </div>
    );
  })}
</div>

            </div>
            
        </div>
      ) : (
        <div>Za ovaj ID ne postoji niti jedan film u bazi</div>
      )}
    </>
  );
};
export default MovieRender;
