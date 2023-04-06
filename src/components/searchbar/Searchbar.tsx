import axios from 'axios';
import axiosInstance from '../../services/api';
import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const API_KEY = '6285715144242bd4e87c78f80ab3cd45';

function Searchbar() {
  const initialValue = { value: '' };
  if (localStorage.getItem('searchValue')) {
    initialValue.value = localStorage.getItem('searchValue') as string;
  } else {
    initialValue.value = '';
  }

  const [searchValue, setSearchValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const valueRef: React.MutableRefObject<string | undefined> = useRef();

  useEffect(() => {
    valueRef.current = searchValue.value;
    localStorage.setItem('searchValue', valueRef.current);
  }, [searchValue]);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `?method=flickr.photos.search&api_key=${API_KEY}&text=${searchValue.value}&per_page=20&page=1`
      );
      console.log(response.request);
    } catch (err) {
      console.log('error');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="main__search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue.value}
          className="input"
          placeholder="Искать..."
          onChange={(event) => {
            setSearchValue({ value: event.target.value });
          }}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Загружается...' : 'Загрузить'}
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
