import React from 'react';
import { Photo } from '../../types/types';
import './style.css';
import OneFotoCard from '../oneFotoCard/OneFotoCard';

function FotoCards(props: { name: Array<Photo> }) {
  const listItem = props.name.map((item) => (
    <OneFotoCard
      key={item.id}
      id={item.id}
      owner={item.owner}
      secret={item.secret}
      server={item.server}
      title={item.title}
      ispublic={item.ispublic}
      isfriend={item.isfriend}
      isfamily={item.isfamily}
    />
  ));
  return <div className="cards">{listItem}</div>;
}

export default FotoCards;
