import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <span className="title">Chatter</span>
      </header>
      <div className="flexbox-container">
        <span className="text1">hello this is a message</span>
        <span className="text2">hi</span>
        <span className="text3">yup</span>
      </div>
      <footer className="footer">
        <input className="text-input" />
        <button className="send">↑</button>
      </footer>
    </div>
  );
}

export default App;
