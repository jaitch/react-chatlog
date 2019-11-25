import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';

const ChatEntry = (props) => {
  const chooseStyle = () => {
    let style = 'chat-entry';
    if (props.message.sender === props.first) {
      style = 'chat-entry local';
    }
    else if (props.message.sender === props.second) {
      style = 'chat-entry remote';
    }
    return style;
  }
  return (
  <div className={chooseStyle()}>
    <p className='entry-name'> {props.message.sender} </p>
    <p className='entry-bubble'> {props.message.body} </p>
    <p className='entry-time'> <Timestamp time={props.message.timeStamp}/> </p>
  </div>
  )
}

export default ChatEntry;