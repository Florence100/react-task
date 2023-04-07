import React from 'react';
import './style.css';
import { Photo } from '../../types/types';
import Button from '../UI/buttons/Button';

function OneFotoCard(props: Photo) {
  return (
    <div className="card">
      {/* <img className="card__img" src={props.images[0]} alt="img" /> */}
      <div className="card__title">{props.title}</div>
      <Button />
    </div>
  );
}

export default OneFotoCard;
