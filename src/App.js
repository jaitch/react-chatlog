import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  console.log(chatMessages);
  const first = chatMessages[0].sender;
  let index = 1;
  while (chatMessages[index].sender === first) {
    index += 1;
  }
  const second = chatMessages[index].sender;

  return (
    <div id="App">
      <header className="header">

        <h1 className="h1">Chat between {chatMessages[0].sender} and {chatMessages[1].sender}</h1>
      </header>
      <main className="main">
        <ChatLog messages={chatMessages} first={first} second={second}/>
      </main>
    </div>
  );
};

export default App;
