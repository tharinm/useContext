import { useContext } from "react";
import CompoThird from "./CompoThird";
import { userAuth } from "../App";

export default function CompoSec() {

  const { username, setUsername } = useContext(userAuth);
  console.log(username)

  return (
    <div>
      <h4>Second Component -{username}</h4>
      <CompoThird  />
    </div>
  );
}
