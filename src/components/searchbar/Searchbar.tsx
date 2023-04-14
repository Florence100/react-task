import { AxiosResponse } from 'axios';
import axiosInstance from '../../services/api';
import React, { useState, useEffect, useRef } from 'react';
import { Photo, GET_Articles, CardsGoodProps, IState } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { searchValue } from '../../redux/actions';
import './style.css';

const API_KEY = '6285715144242bd4e87c78f80ab3cd45';

function Searchbar(props: CardsGoodProps) {
  const dispatch = useDispatch();
  const currentSearch = useSelector((state: IState) => state.search);

  const [isLoading, setIsLoading] = useState(false);
  // const [photo, setPhoto] = useState<Photo[]>([]);
  // const valueRef: React.MutableRefObject<string | undefined> = useRef();

  // useEffect(() => {
  //   valueRef.current = currentSearch;
  //   localStorage.setItem('searchValue', valueRef.current);
  // }, [searchValue]);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<GET_Articles> = await axiosInstance.get(
        `?method=flickr.photos.search&api_key=${API_KEY}&text=${
          currentSearch ? currentSearch : 'nature'
        }&per_page=12&page=1&format=json&nojsoncallback=1`
      );
      // setPhoto(response.data.photos.photo);
      props.updateFotoData(response.data.photos.photo);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="main__search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentSearch}
          className="input"
          placeholder="Искать..."
          onChange={(event) => {
            dispatch(searchValue(event.target.value));
          }}
        />
        <button className="button" type="submit" disabled={isLoading}>
          {isLoading ? 'Загружается...' : 'Поиск'}
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
