import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
    const { language, switchLanguage, isZh } = useLanguage();
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const handleLanguageSelect = (lang: string) => {
        switchLanguage(lang);
        setLangMenuOpen(false);
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

                {/* 右侧语言下拉菜单 */}
                <div className="relative">
                    {/* 触发按钮 */}
                    <button
                        onClick={() => setLangMenuOpen(!langMenuOpen)}
                        className="flex items-center gap-2 bg-[#374151] hover:bg-[#4B5563] text-white text-sm md:text-base font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border border-white/10"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                        <span>{isZh ? '中文' : 'English'}</span>
                        <svg className={`w-4 h-4 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* 下拉菜单 */}
                    {langMenuOpen && (
                        <>
                            {/* 遮罩层 */}
                            <div
                                className="fixed inset-0 z-40"
                                onClick={() => setLangMenuOpen(false)}
                            ></div>

                            {/* 菜单内容 */}
                            <div className="absolute right-0 mt-2 w-48 bg-[#374151] rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50 animate-slideDown">
                                <div className="py-2">
                                    {/* English 选项 */}
                                    <button
                                        onClick={() => handleLanguageSelect('en')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-left text-white hover:bg-[#4B5563] transition-colors duration-150 ${language === 'en' ? 'bg-[#4B5563]/50' : ''}`}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                        </svg>
                                        <div className="flex-1">
                                            <div className="text-sm font-medium">English</div>
                                            <div className="text-xs text-gray-400">英语</div>
                                        </div>
                                        {language === 'en' && (
                                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>

                                    {/* 分割线 */}
                                    <div className="h-px bg-white/10 mx-2"></div>

                                    {/* 中文选项 */}
                                    <button
                                        onClick={() => handleLanguageSelect('zh')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-left text-white hover:bg-[#4B5563] transition-colors duration-150 ${language === 'zh' ? 'bg-[#4B5563]/50' : ''}`}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                        </svg>
                                        <div className="flex-1">
                                            <div className="text-sm font-medium">中文</div>
                                            <div className="text-xs text-gray-400">Chinese</div>
                                        </div>
                                        {language === 'zh' && (
                                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </motion.div>
        </nav>
    );
}
