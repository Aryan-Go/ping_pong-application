import { useState,useEffect } from 'react'

function App() {
  const [ws, set_ws] = useState();
  const sendMessage = () => {
    if (!ws) {
      return;
    }
    else {
      //@ts-ignore
      ws.send(message);
    }
  }
  const [message, set_message] = useState("");
  //@ts-ignore
  const change_message = (e) => {
    set_message(e.target.value);
  }
  console.log(message);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    //@ts-ignore
    set_ws(ws);
    ws.onmessage = (e) => {
      alert(e.data);
    }
  }, [])
  
  return (
    <>
      <h1>Lets chat</h1>
      <div>
        <input value={message} onChange={change_message}type="text" placeholder="message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default App
