import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({allMessages}) =>
  <ul className='chat-log'>
  {allMessages.map((message, i) => {
    return (
      <li key={i}>
        <ChatEntry {...message} />
      </li>
    )
  })
  }
  </ul>

export default ChatLog;