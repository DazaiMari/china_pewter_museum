import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HallOfOrigins from "./pages/HallOfOrigins";
import CraftAndLife from "./pages/CraftAndLife";
import WordAndMetal from "./pages/WordAndMetal";
import FutureAndDesign from "./pages/FutureAndDesign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 首页 */}
        <Route path="/" element={<Home />} />

        {/* 四个分页面 */}
        <Route path="/hall-origins" element={<HallOfOrigins />} />
        <Route path="/craft-life" element={<CraftAndLife />} />
        <Route path="/word-metal" element={<WordAndMetal />} />
        <Route path="/future-design" element={<FutureAndDesign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
