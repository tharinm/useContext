import { createContext, useState } from "react";
import "./App.css";
import CompoFirst from "./component/CompoFirst";


export const userAuth = createContext({});

function App() {
  const [username, setUsername] = useState("");

  return (
    <userAuth.Provider value={{ username, setUsername }}>
      <div>
        <h4>App {username}</h4>
        <CompoFirst />
      </div>
    </userAuth.Provider>
  );
}

export default App;
