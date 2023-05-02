import { createContext, useState } from "react";
import "./App.css";
import CompoFirst from "./component/CompoFirst";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h1>App {username}</h1>
      <CompoFirst />
    </div>
  );
}

export default App;
