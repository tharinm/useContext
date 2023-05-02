
import CompoSec from './CompoSec'

export default function CompoFirst({username,setUsername}) {
  return (
      <div>
      <h>First Component -{username}</h>
      <CompoSec username={username} setUsername={setUsername} />
    </div>
  );
}
