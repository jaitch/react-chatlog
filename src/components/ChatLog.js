import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import { tsPropertySignature } from '@babel/types';

const ChatLog = (props) =>
  <ul className='chat-log'>
  return (
  {props.messages.map((message, i) => {
      <li key={i}>
        <ChatEntry message={message} first={props.first} second={props.second}/>
      </li>
  })
})
</ul>

export default ChatLog;