import React from 'react';
import './style.css';
import { MessageProp } from '../../types/types';

function MessageErr(props: MessageProp) {
  if (props.isValid === false) {
    return <div className="message-err">{props.value}</div>;
  } else {
    return <div className="message-err"></div>;
  }
}

export default MessageErr;
