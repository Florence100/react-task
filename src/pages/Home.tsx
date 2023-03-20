import React from 'react';
import Searchbar from '../components/Searchbar';
import Cards from '../components/Cards';

function Home() {
  return (
    <div className="wrapper">
      <Searchbar />
      <Cards />
    </div>
  );
}

export default Home;
