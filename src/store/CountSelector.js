// selector.js
import { selector } from "recoil";
import { countState, inputState } from "./CountAtom";

//말그대로 무언가를 선택해서 그 선택한걸 가지고 무언갈 띄우는 역할인듯??
const countStateSelector = selector({
  key: "CountState",

  get: ({ get }) => {
    //다른 atom의 값도 가져올수 있는 모습
    const inputVal = get(inputState);
    const count = get(countState);

    //두가지 값중 아무 값이 바뀔때 마다 계속 렌더링 되는걸 알 수 있다.
    return `추가된 카운트는 ${inputVal}이고, 현재 카운트는 ${count}입니다.`;
  },
});

export default countStateSelector;
