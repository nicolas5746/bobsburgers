import React from 'react';
import { CharacterContext } from '@contexts/Contexts';
import Banner from '@layouts/banner/Banner';
import Footer from '@layouts/footer/Footer';
import Pagination from '@ui/pagination/Pagination';
import Spinner from '@ui/spinner/Spinner';

const Home = () => {
  // Context values
  const { characters } = React.useContext(CharacterContext);

  return (
    <>
      <Banner />
      {
        characters.length < 1
          ?
          <Spinner />
          :
          <Pagination characters={characters} />
      }
      <Footer />
    </>
  );
}

export default Home;