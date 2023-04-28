import React from 'react';
import './style.css';
import { IModalProps } from '../../types/types';

function Modal(props: IModalProps) {
  if (props.active === false) {
    return null;
  }

  const title = props.modal && props.modal[0] && props.modal[0].title ? props.modal[0].title : null;
  const viewCount =
    props.modal && props.modal[0] && props.modal[0].view_count ? props.modal[0].view_count : null;
  const commentCount =
    props.modal && props.modal[0] && props.modal[0].comment_count
      ? props.modal[0].comment_count
      : null;

  if (props.modal) {
    return (
      <div className="modal" data-test="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
          <div className="modal-close" data-test="modal-close" onClick={props.onClose}></div>
          <div className="modal-img">
            <img src={props.url} alt="photo"></img>
          </div>
          <div className="modal-info">
            <div>
              <b>{title ? title : null}</b>
            </div>
            <div>Количество просмотров: {viewCount ? viewCount : 'Информация недоступна'}</div>
            <div>
              Количество комментариев: {commentCount ? commentCount : 'Информация недоступна'}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="modal" data-test="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
          <div className="modal-close" data-test="modal-close" onClick={props.onClose}></div>
          <div className="modal-img">
            <img src={props.url} alt="photo"></img>
          </div>
          <div className="modal-info">
            Сожалеем, но дополнительная информация по данному изображению отсутствует
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
