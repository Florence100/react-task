import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import axiosInstance from '../../services/api';
// import goodsList from '../../data/goodList';
// import OneCard from '../oneCardGood/OneCardGood';
import { Photo, GET_Articles } from '../../types/types';
import './style.css';
import OneFotoCard from '../oneFotoCard/OneFotoCard';

const API_KEY = '6285715144242bd4e87c78f80ab3cd45';

function FotoCards(props: { name: Array<Photo> }) {
  async function onLoading(item = '') {
    try {
      const response: AxiosResponse<GET_Articles> = await axiosInstance.get(
        `?method=flickr.photos.search&api_key=${API_KEY}&text=${item ? item : 'nature'}
        &per_page=12&page=1&format=json&nojsoncallback=1`
      );
      return response.data.photos.photo;
    } catch (err) {}
  }

  if (props.name.length > 0) {
    return <div>Hello</div>;
  } else {
    if (localStorage.getItem('searchValue')) {
      onLoading(localStorage.getItem('searchValue') as string).then((fotoCards) => {
        console.log('fotoCards', fotoCards);
        return fotoCards;
        // showFotoCards(fotoCards as Photo[]);
        // listItems = (fotoCards as Array<Photo>).map((item) => (
        //   <OneFotoCard
        //     key={item.id}
        //     id={item.id}
        //     owner={item.owner}
        //     secret={item.secret}
        //     server={item.server}
        //     title={item.title}
        //     ispublic={item.ispublic}
        //     isfriend={item.isfriend}
        //     isfamily={item.isfamily}
        //   />
        // ));
        // return <div className="cards">{listItems}</div>;
      });
    } else {
      // console.log('2');
      onLoading().then((fotoCards) => {
        console.log('fotoCards', fotoCards);
        // showFotoCards(fotoCards as Photo[]);
        // listItems = (fotoCards as Array<Photo>).map((item) => (
        //   <OneFotoCard
        //     key={item.id}
        //     id={item.id}
        //     owner={item.owner}
        //     secret={item.secret}
        //     server={item.server}
        //     title={item.title}
        //     ispublic={item.ispublic}
        //     isfriend={item.isfriend}
        //     isfamily={item.isfamily}
        //   />
        // ));
        // return <div className="cards">{listItems}</div>;
      });
    }
    // return <div className="cards">{fotoCards}</div>;
    return <div>By</div>;
  }
  // const listItems = goodsList.map((good) => (
  //   <OneCard
  //     key={good.id}
  //     id={good.id}
  //     title={good.title}
  //     description={good.description}
  //     price={good.price}
  //     rating={good.rating}
  //     brand={good.brand}
  //     category={good.category}
  //     images={good.images}
  //   />
  // ));
  // return <div className="cards">{listItems}</div>;
}

export default FotoCards;
