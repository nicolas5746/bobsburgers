import React from 'react';
import { CharacterContext } from '@/contexts/Contexts';
import Banner from '@/layouts/banner/Banner';
import Footer from '@/layouts/footer/Footer';
import Loader from '@ui/loader/Loader';
import Pagination from '@ui/pagination/Pagination';

const Home = () => {
  // Context values
  const { characters } = React.useContext(CharacterContext);

  return (
    <>
      <Banner />
      {characters.length < 1 ? <Loader className='spinner' childs={12} /> : <Pagination characters={characters} />}
      <Footer />
    </>
  );
}

export default Home;