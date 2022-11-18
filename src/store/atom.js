import { atom, selector } from "recoil";
import React from "react";

/**
 * atom 파일 저장 할때 마다 생기는
 * Expectation Violation:
 * Duplicate atom key (key 값).
 * This is a FATAL ERROR in
 *
 * 이 애러는 그냥 무시해도 된다.
 * 무슨애러냐면 전에 있던 key값이랑 똑같아서 생기는 건데
 * 아예 interrupt-stdout 모듈을 사용하던가
 * key값에 난수를 추가 할 수 밖에 없다.
 */

/**
 * atom을 비눗방울 이라 생각하고
 * 둥둥 떠다니는 비눗방울중 필요한 비눗방울(상태)이 필요할때
 * 빼서 쓴다 생각하면된다.
 */

/**
 * 만약 typeScript에서 써야한다면 interface라는걸 써야되는데
 * 그냥
 * export interface (인터이름){
 *  (변수명A) : 타입;
 *  (변수명B) : 타입;
 * }
 *
 * export const (이름) = atom<(인터이름)>({
 *  key : "(이름)",
 *  default : {
 *    (변수명A) : 타입에따라적기,
 *    (변수명B) : '',
 *  }
 * })
 *
 * 이렇게 적으면 타입스크립트로 쓸 수 있다.
 */

export const counting = atom({
  key: "counting",
  default: 0,
});

export const user = atom({
  key: "user",
  default: {
    age: 17,
    name: "kevin",
  },
});
/**
 * Selector(그냥 DB할때 select문이라 생각하면 쉽다)
 * -> 뭔소리냐? -> select를 DB에서 쓰면 원하는 값을 뽑을 수 있다
 * -> recoil selector도 똑같음(단 수정이 안되는 값만 반환해서 만약
 * 수정을 해야되는 State면 atom으로 뽑아와야 한다.)
 *
 * selector 관련된 예제가 ts로 되있어서 selector는 다음에
 */
