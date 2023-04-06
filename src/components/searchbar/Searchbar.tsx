import React, { useState, useEffect, useRef } from 'react';
import './style.css';

function Searchbar() {
  const initialValue = { value: '' };
  if (localStorage.getItem('searchValue')) {
    initialValue.value = localStorage.getItem('searchValue') as string;
  } else {
    initialValue.value = '';
  }

  const [searchValue, setSearchValue] = useState(initialValue);
  const valueRef: React.MutableRefObject<string | undefined> = useRef();

  useEffect(() => {
    valueRef.current = searchValue.value;
    localStorage.setItem('searchValue', valueRef.current);
  }, [searchValue]);

  useEffect(() => {
    return function clean() {
      console.log(valueRef.current);

    };
  }, []);

  return (
    <div className="main__search">
      <form>
        <input
          type="text"
          value={searchValue.value}
          className="input"
          placeholder="Искать..."
          onChange={(event) => {
            setSearchValue({ value: event.target.value });
          }}
        />
      </form>
    </div>
  );
}

export default Searchbar;
