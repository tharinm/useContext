import { createContext, useState } from "react";
import "./App.css";
import CompoFirst from "./component/CompoFirst";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h4>App {username}</h4>
      <CompoFirst username={username} setUsername={setUsername} />
    </div>
  );
}

export default App;
