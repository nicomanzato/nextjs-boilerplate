import { PageLayout } from 'components/atoms/PageLayout/PageLayout.component';
import { MovieSlider } from 'components/molecules/MovieSlider/MovieSlider.component';
import type { Movie } from 'models/movies';

import { Container, Title } from './index.styles';
import { MovieSearcher } from './MovieSearcher/MovieSearcher.component';

interface Props {
  popularMovies: Movie[];
}

const HomeTemplate = ({ popularMovies }: Props) => {
  return (
    <PageLayout>
      <Container>
        <MovieSearcher />
        <Title>Popular Movies</Title>
        <MovieSlider movies={popularMovies}></MovieSlider>
        {/* <Title>Popular Movies</Title> */}
        {/* <MovieSlider movies={popularMovies}></MovieSlider>
        <Title>Popular Movies</Title>
        <MovieSlider movies={popularMovies}></MovieSlider>
        <Title>Popular Movies</Title>
        <MovieSlider movies={popularMovies}></MovieSlider> */}
      </Container>
    </PageLayout>
  );
};

export default HomeTemplate;
