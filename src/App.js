import { useState } from "react";
// recoil 값을 가져옴
import { counting, user } from "./store/atom";
import { useRecoilState } from "recoil";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  // recoil에서 default 값을 가져와줌
  let [recoilCount, setRecoilCount] = useRecoilState(counting);
  const [LoginUser, setLoginUser] = useRecoilState(user);

  return (
    <div className="App">
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        클릭
      </button>
      <br />
      <br />
      <br />
      <div>{recoilCount}</div>
      <button
        onClick={() => {
          setRecoilCount(recoilCount + 1);
          console.log(counting);
        }}
      >
        클릭
      </button>
      <div>
        <p>userName : {LoginUser.name}</p>
        <p>userAge : {LoginUser.age}</p>
      </div>
    </div>
  );
}

export default App;
