import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeBody from "./components/HomeBody/HomeBody";
import Leetcode from "./components/Leetcode/Leetcode";
import Codeforces from "./components/Codeforces/Codeforces";
import Codechef from "./components/Codechef/Codechef";
import Sheets from "./components/Sheets/Sheets";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/Leetcode" element={<Leetcode />} />
          <Route path="/Codeforces" element={<Codeforces />} />
          <Route path="/Codechef" element={<Codechef />} />
          <Route path="/Sheets" element={<Sheets />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
