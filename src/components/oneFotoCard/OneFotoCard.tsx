import React from 'react';
import './style.css';
import { Photo } from '../../types/types';
// import Button from '../UI/buttons/Button';

function OneFotoCard(props: Photo) {
  const URL = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_n.jpg`;
  return (
    <div className="card">
      <div className="img-wrapper">
        <img className="card__img" src={URL} alt="img" />
      </div>
      <div className="card__title">{props.title}</div>
      {/* <Button /> */}
    </div>
  );
}

export default OneFotoCard;
