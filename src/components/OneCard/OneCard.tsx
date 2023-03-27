import React from 'react';
import './style.css';
import { IGood } from '../../interfaces/interfaces';
import Button from '../UI/buttons/Button';

function OneCard(props: IGood) {
  return (
    <div className="card">
      <img className="card__img" src={props.images[0]} alt="img" />
      <div className="card__brand">{props.brand}</div>
      <div className="card__title">{props.title}</div>
      <div className="card__category">{props.category}</div>
      <div className="card__price">{Number(props.price).toFixed(2)} BYN</div>
      <Button />
    </div>
  );
}

export default OneCard;
