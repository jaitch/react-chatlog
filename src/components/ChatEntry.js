import React from 'react';
import Timestamp from './Timestamp';
import './ChatEntry.css';

const ChatEntry = ({sender, body, timeStamp}) =>

  <div className='chat-entry'>
    <p className='entry-name'> {sender} </p>
    <p className='entry-bubble'> {body} </p>
    <p className='entry-time'> <Timestamp time={timeStamp}/> </p>
  </div>


export default ChatEntry;