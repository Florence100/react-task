import React, { useState } from 'react';
import { CardsGoodProps, IState } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { searchValue } from '../../redux/actions';
import { useGetPhotosQuery } from '../../services/api';

import './style.css';

function Searchbar(props: CardsGoodProps) {
  const dispatch = useDispatch();
  const currentSearch = useSelector((state: IState) => state.rootReducer.search);
  const [isLoading, setIsLoading] = useState(false);

  const { data = [] } = useGetPhotosQuery(currentSearch);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsLoading(true);
    props.updateFotoData(data.photos.photo);
    try {
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
          data-test="search"
          onChange={(event) => {
            dispatch(searchValue(event.target.value));
          }}
        />
        <button className="button" type="submit" disabled={isLoading} data-test="search-button">
          {isLoading ? 'Загружается...' : 'Поиск'}
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
