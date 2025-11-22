import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
    const { language, switchLanguage, isZh } = useLanguage();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        switchLanguage(e.target.value);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1b1f26] shadow-lg py-4 px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-6"
            >
                {/* 左侧 Logo */}
                <Link
                    to={isZh ? "/zh" : "/"}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                    <img
                        src="/images/logo.png"
                        alt="China Pewter Museum Logo"
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                    <p className="text-xl md:text-2xl font-bold text-white">
                        {isZh ? "中国锡器博物馆" : "China Pewter Museum"}
                    </p>
                </Link>

                {/* 右侧语言下拉选择框 */}
                <div className="relative">
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="appearance-none bg-[#343a44] text-white text-sm md:text-base px-4 py-2 pr-10 rounded-lg border border-white/20 hover:bg-[#49515c] focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 cursor-pointer"
                    >
                        <option value="en">English</option>
                        <option value="zh">中文</option>
                    </select>
                    {/* 自定义下拉箭头 */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </motion.div>
        </nav>
    );
}



