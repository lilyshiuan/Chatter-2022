import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Lily",        
    };
    setMessages([newMessage, ...messages]);
  }
  console.log(messages);
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">Chatter</span>
      </header>
      <div className="texts">
        {texts.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      <TextInput sendMessage={sendMessage} />
    </div>
  );
}


export default App;


