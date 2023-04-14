import React, { useState } from 'react';
import Searchbar from '../../components/searchbar/Searchbar';
import FotoCards from '../../components/fotoCards/FotoCards';
import { Photo, GET_Articles, IState } from '../../types/types';
import axiosInstance from '../../services/api';
import { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';

const API_KEY = '6285715144242bd4e87c78f80ab3cd45';

function Home() {
  const currentSearch = useSelector((state: IState) => state.search);
  const newFotoArray: Array<Photo> = [];
  const [fotoData, setFotoData] = useState(newFotoArray);

  function updateFotoData(newFotoArr: Array<Photo>) {
    setFotoData(newFotoArr);
  }

  const result = async function onLoading(item = '') {
    try {
      const response: AxiosResponse<GET_Articles> = await axiosInstance.get(
        `?method=flickr.photos.search&api_key=${API_KEY}&text=${item ? item : 'nature'}
        &per_page=12&page=1&format=json&nojsoncallback=1`
      );
      setFotoData(response.data.photos.photo);
    } catch (err) {}
  };

  if (fotoData.length === 0) {
    // console.log(fotoData.length);
    // if (currentSearch) {
    //   console.log('currentSearch', currentSearch);
    //   result(currentSearch);
    // } else {
    //   console.log('ok');
    //   result();
    // }
    if (localStorage.getItem('searchValue')) {
      console.log('1', currentSearch);
      result(localStorage.getItem('searchValue') as string);
    } else {
      console.log('2', currentSearch);
      result();
    }
  }

  return (
    <div className="wrapper">
      <Searchbar updateFotoData={updateFotoData} />
      <FotoCards name={fotoData} />
    </div>
  );
}

export default Home;
