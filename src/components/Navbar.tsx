import React from 'react';
import { motion } from 'framer-motion';
interface NavBarProps {
  isChinese: boolean;
  onLanguageToggle: () => void;
}

export default function Navbar({ isChinese, onLanguageToggle }: NavBarProps) {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm text-gray-100 py-4 z-50 flex justify-center items-center gap-8 text-sm md:text-base">
      <div className="flex items-center gap-3">
        <a href="/">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
            <p className="text-1xl font-bold whitespace-nowrap">{isChinese ? '中国锡器博物馆' : 'CHINA PEWTER MUSEUM'}</p>
          </div>
        </a>
      </div>
      <motion.button
        onClick={onLanguageToggle}
        className="bg-red-800 hover:bg-red-700 px-3 py-1 rounded-md text-white text-xs font-medium transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isChinese ? 'EN' : '中文'}
      </motion.button>
    </nav>
  );
}
