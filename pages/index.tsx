import HomeTemplate from 'components/templates/index/index.component';
import type { NextPage } from 'next';

import server from './config';

// const apiKey = '318e887a4fa2d785cb570c253dc7cd26';

export const getStaticProps = async () => {
  // console.log(global);
  const res = await fetch(`${server}/api/hello`);
  const data = await res.json();
  return {
    props: { moviesData: data },
  };
};

const Home: NextPage = ({ moviesData }) => {
  return <HomeTemplate popularMovies={moviesData.results} />;
};

export default Home;
