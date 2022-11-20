import { useRecoilState, useRecoilValue } from "recoil";
import { ValA, ValB, CalPlus, CalMin } from "./store/atom";
import React from "react";

const inputChange = (e, set) => {
  let newVal = e.target.value;
  set(newVal);
};

const Calculator = () => {
  const [valA, setValA] = useRecoilState(ValA);
  const [valB, setValB] = useRecoilState(ValB);

  const CalP = useRecoilValue(CalPlus);
  const CalM = useRecoilValue(CalMin);
  return (
    <>
      <input
        value={valA}
        onChange={(e) => {
          inputChange(e, setValA);
        }}
      />
      <input
        value={valB}
        onChange={(e) => {
          inputChange(e, setValB);
        }}
      />
      <button
        onClick={() => {
          console.log("ddd", CalP, CalM);
        }}
      >
        ddd
      </button>
      <p>{CalP}</p>
      <p>{CalM}</p>
    </>
  );
};

export default Calculator;
