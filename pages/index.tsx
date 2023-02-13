import HomeTemplate from 'components/templates/index/index.component';
import type { NextPage } from 'next';

// const apiKey = '318e887a4fa2d785cb570c253dc7cd26';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=318e887a4fa2d785cb570c253dc7cd26&language=en-US&page=1'
  );
  const data = await res.json();
  return {
    props: { moviesData: data },
  };
};

const Home: NextPage = ({ moviesData }) => {
  return <HomeTemplate popularMovies={moviesData.results} />;
};

export default Home;
