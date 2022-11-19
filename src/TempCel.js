import React from "react";
import { useNavigate } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { temp, tempCel } from "./store/atom";

const TempCel = () => {
  const [tempC, setTempC] = useRecoilState(tempCel);
  const [tempF, setTempF] = useRecoilState(temp);
  const originTempC = useRecoilValue(tempCel);
  const originTempF = useRecoilValue(temp);

  const addTenCel = setTempC(tempC + 10);
  const addTen = setTempF(tempF + 10);

  let Navigate = useNavigate();
  return (
    <>
      <div>
        Temp (Cel) : {tempC}
        <br />
        Temp : {tempF}
        <br />
        <button
          onClick={() => {
            setTempC(tempC + 10);
          }}
        >
          Add tempC
        </button>
        <br />
        <button
          onClick={() => {
            setTempF(tempF + 10);
          }}
        >
          Add temp
        </button>
        <br />
        <p>{`originC : ${originTempC} / originTemp : ${originTempF}`}</p>
      </div>

      <button
        onClick={() => {
          Navigate("/");
        }}
      >
        main 이동
      </button>
    </>
  );
};
export default TempCel;
