import type { MovieGenre } from 'models/genres';
import type { Movie } from 'models/movies';
import Image from 'next/image';

import {
  Container,
  DetailsContainer,
  Genre,
  GenreContainer,
  ImageContainer,
  Title,
} from './SliderMovieCard.styles';

export const SliderMovieCard = ({
  movie,
  genres = [],
}: {
  movie: Movie;
  genres: MovieGenre[];
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          layout="fill"
          alt={'Movie poster'}
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`https://image.tmdb.org/t/p/w185/${movie.backdrop_path}`}
        />
      </ImageContainer>
      <DetailsContainer>
        <Title>{movie.title}</Title>
        <GenreContainer>
          {movie.genre_ids.map((genreID) => {
            const filteredGenres = genres.genres.filter(
              (genreObj) => genreObj.id === genreID
            );
            const genreName =
              filteredGenres.length > 0 ? filteredGenres[0].name : '';
            return <Genre key={genreID}>{genreName}</Genre>;
          })}
        </GenreContainer>
      </DetailsContainer>
    </Container>
  );
};
