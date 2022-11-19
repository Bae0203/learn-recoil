import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Temp from "./TempCel";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route element={<App />} path={"/"} />
          <Route element={<Temp />} path={"/temp"} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
