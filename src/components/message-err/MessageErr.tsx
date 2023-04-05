import React from 'react';
import './style.css';
import { MessageProp } from '../../types/types';

function MessageErr(props: MessageProp) {
  return <div className="message-err">{props.errorText}</div>;
}

export default MessageErr;
