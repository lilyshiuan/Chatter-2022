import React from "react";
import { useState } from "react";


function NamePicker(props) {
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState("");


  function send() {
    props.sendMessage(name);
    setName("");
  }
  
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <footer className="footer">
      <button onClick={props.showCamera}
        style={{left:10, right:'auto'}}>
        <FiCamera style={{height:15, width:15}} />
      </button>
      <input
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className="send" onClick={send}>
        <FiSend />
      </button>
    </footer>
  );
}

export default NamePicker;
