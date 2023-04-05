import React from 'react';
import goodsList from '../../data/goodList';
import OneCard from '../oneCardGood/OneCardGood';
import './style.css';

function CardsGood() {
  const listItems = goodsList.map((good) => (
    <OneCard
      key={good.id}
      id={good.id}
      title={good.title}
      description={good.description}
      price={good.price}
      rating={good.rating}
      brand={good.brand}
      category={good.category}
      images={good.images}
    />
  ));
  return <div className="cards">{listItems}</div>;
}

export default CardsGood;
