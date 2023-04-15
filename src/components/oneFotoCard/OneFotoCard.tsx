import React, { useState } from 'react';
import './style.css';
import { Photo, PhotoId } from '../../types/types';
import Modal from '../../components/modal/Modal';
import { useGetOnePhotoQuery } from '../../services/api';

function OneFotoCard(props: Photo) {
  const URL = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_n.jpg`;
  const URL_BIG = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
  const newFotoArray: Array<PhotoId> = [];
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(newFotoArray);

  function closeModal() {
    setShowModal(false);
  }

  const { data = [] } = useGetOnePhotoQuery(props.id);

  const result = async function onLoading() {
    try {
      setModal(data.set as Array<PhotoId>);
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
