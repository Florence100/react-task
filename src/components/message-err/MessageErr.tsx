import React from 'react';
import './style.css';

type MessageProp = {
  value: string;
  isValid: boolean;
  messagePropRef: React.RefObject<HTMLDivElement>;
};

// type MessagePropState = {
//   isActive: boolean;
// };

class MessageErr extends React.Component<MessageProp> {
  constructor(props: MessageProp) {
    super(props);
    // if (this.props.isValid === false) {
    //   this.state = { isActive: false };
    // } else {
    //   this.state = { isActive: true };
    // }
  }

  render() {
    if (this.props.isValid === false) {
      return <div className="message-err">{this.props.value}</div>;
    } else {
      return <div className="message-err"></div>;
    }
  }
}

export default MessageErr;
