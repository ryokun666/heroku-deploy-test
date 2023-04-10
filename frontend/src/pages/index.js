import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:3001/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <div>ねくすとじぇいえすバージョン！</div>
      <p>{message}</p>
    </div>
  );
}

export default App;
