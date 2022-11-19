import { useState } from "react";
import { useNavigate } from "react-router-dom";
// recoil 값을 가져옴
import { counting, user } from "./store/atom";
/**
 * useRecoilState : useState와 같은 역할
 * useRecoilValue : atom을 불러올때만 사용
 * 예)
 * const [loginUser, setLoginUser] = useRecoilState(user);
 * -> const loginUser = useRecoilValue(user);
 *
 * useSetRecoilState : atom을 set할때 사용
 * 예 ) const [loginUser, setLoginUser] = useRecoilState(user);
 * -> const setLoginUser = useRecoilValue(user);
 */
import { useRecoilState } from "recoil";
import "./App.css";

function App() {
  let Navigate = useNavigate();
  let [count, setCount] = useState(0);
  // recoil에서 default 값을 가져와줌
  let [recoilCount, setRecoilCount] = useRecoilState(counting);
  const [loginUser, setLoginUser] = useRecoilState(user);

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
        <p>userName : {loginUser.name}</p>
        <p>userAge : {loginUser.age}</p>
      </div>
      <button
        onClick={() => {
          Navigate("/temp");
        }}
      >
        temp 이동
      </button>
    </div>
  );
}

export default App;
