import React, { useState } from 'react';
import './style.css';
import { Photo, GET_Article, PhotoId } from '../../types/types';
import Modal from '../../components/modal/Modal';
import axiosInstance from '../../services/api';
import { AxiosResponse } from 'axios';

const API_KEY = '6285715144242bd4e87c78f80ab3cd45';

function OneFotoCard(props: Photo) {
  const URL = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_n.jpg`;
  const URL_BIG = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
  const newFotoArray: Array<PhotoId> = [];
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(newFotoArray);

  function closeModal() {
    setShowModal(false);
  }

  const result = async function onLoading() {
    try {
      const response: AxiosResponse<GET_Article> = await axiosInstance.get(
        `?method=flickr.photos.getAllContexts&api_key=${API_KEY}&photo_id=${props.id}&format=json&nojsoncallback=1`
      );
      setModal(response.data.set as Array<PhotoId>);
    } catch (err) {}
  };

  return (
    <div>
      <div
        className="card"
        onClick={() => {
          setShowModal(true);
          result();
        }}
      >
        <div className="img-wrapper">
          <img className="card__img" src={URL} alt="img" />
        </div>
        <div className="card__title">{props.title}</div>
      </div>
      <Modal
        active={showModal}
        id={props.id}
        onClose={closeModal}
        modal={modal}
        url={URL_BIG}
      ></Modal>
    </div>
  );
}

export default OneFotoCard;
