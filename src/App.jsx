import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection1 from "./pages/collections/Collection1";
import Collection2 from "./pages/collections/Collection2";
import Collection3 from "./pages/collections/Collection3";
import Collection4 from "./pages/collections/Collection4";
import LearningDetail from "./pages/LearningDetail";  
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 首页 */}  
        <Route path="/" element={<Home />} />
        {/* 收藏品页面 */}
        <Route path="/learning" element={<LearningDetail />} />
        <Route path="/collections/1" element={<Collection1 />} />
        <Route path="/collections/2" element={<Collection2 />} />
        <Route path="/collections/3" element={<Collection3 />} />
        <Route path="/collections/4" element={<Collection4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
