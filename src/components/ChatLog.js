import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import { tsPropertySignature } from '@babel/types';

const ChatLog = (props) =>
  <ul className='chat-log'>
  {props.messages.map((message, i) => {
    // if (message.sender === props.first) {
    //   let order = 'first';
    // }
    // else if (message.sender === props.second) {
    //   let order ='second';
    // }
    return (
      <li key={i}>
        <ChatEntry message={message} order={order}/>
      </li>
    )
  })
  }
</ul>

export default ChatLog;