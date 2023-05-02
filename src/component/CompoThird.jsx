export default function CompoThird({setUsername,username}) {
  //console.log(setUsername)
  console.log(username)
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
