import HomeTemplate from 'components/templates/index/index.component';
import type { NextPage } from 'next';

import server from './config';

// const apiKey = '318e887a4fa2d785cb570c253dc7cd26';

export const getStaticProps = async () => {
  // console.log(global);
  const res = await fetch(`${server}/api/popularData`);
  const data = await res.json();

  const resGenre = await fetch(`${server}/api/genresData`);
  const dataGenre = await resGenre.json();

  const resAction = await fetch(`${server}/api/actionData`);
  const dataAction = await resAction.json();

  return {
    props: { moviesData: data, genreData: dataGenre, actionData: dataAction },
  };
};

const Home: NextPage = ({ moviesData, genreData, actionData }) => {
  return (
    <HomeTemplate
      popularMovies={moviesData.results}
      genreData={genreData}
      actionMovies={actionData.results}
    />
  );
};

export default Home;
