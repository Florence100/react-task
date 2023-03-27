import React from 'react';
import Searchbar from '../../components/searchbar/Searchbar';
import Cards from '../../components/cards/Cards';

function Home() {
  return (
    <div className="wrapper">
      <Searchbar />
      <Cards />
    </div>
  );
}

export default Home;
