import React, { useState, useEffect } from 'react';
import './style.css';

function Searchbar() {
  const initialValue = { value: '' };
  if (localStorage.getItem('searchValue')) {
    initialValue.value = localStorage.getItem('searchValue') as string;
  } else {
    initialValue.value = '';
  }

  type searchValue = {
    value: string;
  };

  const [searchValue, setSearchValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue.value);
  });

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
