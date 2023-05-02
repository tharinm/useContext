import { useContext } from "react";
import { userAuth } from "../App";

export default function CompoThird() {
  //console.log(setUsername)


  const { setUsername, username } = useContext(userAuth)
    //console.log(username);
  return (
    <div>
      <h4>Third Component</h4>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
          />
          
    </div>
  );
}
