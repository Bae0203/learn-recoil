import { atom } from "recoil";
import React from "react";

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
