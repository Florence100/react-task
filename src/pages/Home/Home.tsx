import React, { useState } from 'react';
import Searchbar from '../../components/searchbar/Searchbar';
import Cards from '../../components/cardsGood/CardsGood';
import { Photo } from '../../types/types';

function Home() {
  const newFotoArray: Array<Photo> = [];
  const [fotoData, setFotoData] = useState(newFotoArray);

  function updateFotoData(newFotoArr: Array<Photo>) {
    setFotoData(newFotoArr);
  }

  return (
    <div className="wrapper">
      <Searchbar updateFotoData={updateFotoData} />
      <Cards name={fotoData} />
    </div>
  );
}

export default Home;
