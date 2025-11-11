import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar({ isChinese, onLanguageToggle }) {
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
                    to="/"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                    <img
                        src="/images/logo.png"
                        alt="China Pewter Museum Logo"
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                    <p className="text-xl md:text-2xl font-bold text-white">
                        {isChinese ? "中国锡器博物馆" : "China Pewter Museum"}
                    </p>
                </Link>

                {/* 右侧语言切换按钮 */}
                <button
                    onClick={onLanguageToggle}
                    className="px-5 py-2 text-sm md:text-base text-white bg-[#343a44] border border-white/20 rounded-full hover:bg-[#49515c] transition-all duration-300"
                >
                    {isChinese ? "EN" : "中"}
                </button>
            </motion.div>
        </nav>
    );
}



