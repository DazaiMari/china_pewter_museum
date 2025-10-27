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
        <img src="/images/logo.jpg" alt="logo" className="w-10 h-10" />
        <p className="text-1xl font-bold whitespace-nowrap">{isChinese ? '中国锡器博物馆' : 'CHINA PEWTER MUSEUM'}</p>
      </div>
      <a href="#hero" className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center">
        {isChinese ? '首页' : 'Home'}
      </a>
      <a href="#about" className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center">
        {isChinese ? '关于' : 'About'}
      </a>
      <a href="#exhibitions" className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center">
        {isChinese ? '展览与收藏' : 'Exhibitions'}
      </a>
      <a href="#events" className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center">
        {isChinese ? '活动与交流' : 'Events'}
      </a>
      <a href="#learning" className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center">
        {isChinese ? '研学与教育' : 'Learning'}
      </a>
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
