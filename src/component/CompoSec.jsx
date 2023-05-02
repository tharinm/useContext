import CompoThird from "./CompoThird";

export default function CompoSec({ username, setUsername }) {
  return (
    <div>
      <h4>Second Component -{username}</h4>
      <CompoThird username={username} setUsername={setUsername} />
    </div>
  );
}
