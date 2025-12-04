import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Collection1 from "./pages/collections/Collection1";
import Collection2 from "./pages/collections/Collection2";
import Collection3 from "./pages/collections/Collection3";
import Collection4 from "./pages/collections/Collection4";
import Collection5 from "./pages/collections/Collection5";
import Collection6 from "./pages/collections/Collection6";
import Collection7 from "./pages/collections/Collection7";
import Collection8 from "./pages/collections/Collection8";
import Collection9 from "./pages/collections/Collection9";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          {/* 英文路由（默认） */}
          <Route path="/" element={<Home />} />
          <Route path="/collections/1" element={<Collection1 />} />
          <Route path="/collections/2" element={<Collection2 />} />
          <Route path="/collections/3" element={<Collection3 />} />
          <Route path="/collections/4" element={<Collection4 />} />
          <Route path="/collections/5" element={<Collection5 />} />
          <Route path="/collections/6" element={<Collection6 />} />
          <Route path="/collections/7" element={<Collection7 />} />
          <Route path="/collections/8" element={<Collection8 />} />
          <Route path="/collections/9" element={<Collection9 />} />

          {/* 中文路由（/zh/ 前缀） */}
          <Route path="/zh" element={<Home />} />
          <Route path="/zh/collections/1" element={<Collection1 />} />
          <Route path="/zh/collections/2" element={<Collection2 />} />
          <Route path="/zh/collections/3" element={<Collection3 />} />
          <Route path="/zh/collections/4" element={<Collection4 />} />
          <Route path="/zh/collections/5" element={<Collection5 />} />
          <Route path="/zh/collections/6" element={<Collection6 />} />
          <Route path="/zh/collections/7" element={<Collection7 />} />
          <Route path="/zh/collections/8" element={<Collection8 />} />
          <Route path="/zh/collections/9" element={<Collection9 />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
