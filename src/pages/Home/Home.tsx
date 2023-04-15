import React, { useState } from 'react';
import Searchbar from '../../components/searchbar/Searchbar';
import FotoCards from '../../components/fotoCards/FotoCards';
import { Photo, IState } from '../../types/types';
import { useSelector } from 'react-redux';
import { useGetPhotosQuery } from '../../services/api';

function Home() {
  const currentSearch = useSelector((state: IState) =>
    state.rootReducer.search ? state.rootReducer.search : ''
  );
  const { data = [] } = useGetPhotosQuery(currentSearch);
  const newFotoArray: Array<Photo> = [];
  const [fotoData, setFotoData] = useState(newFotoArray);

  function updateFotoData(newFotoArr: Array<Photo>) {
    setFotoData(newFotoArr);
  }

  const result = async function onLoading() {
    try {
      setFotoData(data.photos.photo);
    } catch (err) {}
  };

  if (fotoData.length === 0) {
    result();
  }

  return (
    <div className="wrapper">
      <Searchbar updateFotoData={updateFotoData} />
      <FotoCards name={fotoData} />
    </div>
  );
}

export default Home;
