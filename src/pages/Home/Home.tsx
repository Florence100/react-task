import React, { useState } from 'react';
import Searchbar from '../../components/searchbar/Searchbar';
import Cards from '../../components/fotoCards/FotoCards';
import { Photo, GET_Articles } from '../../types/types';
import axiosInstance from '../../services/api';
import { AxiosResponse } from 'axios';

const API_KEY = '6285715144242bd4e87c78f80ab3cd45';

function Home() {
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
    if (localStorage.getItem('searchValue')) {
      result(localStorage.getItem('searchValue') as string);
    } else {
      result();
    }
  }

  return (
    <div className="wrapper">
      <Searchbar updateFotoData={updateFotoData} />
      <Cards name={fotoData} />
    </div>
  );
}

export default Home;
