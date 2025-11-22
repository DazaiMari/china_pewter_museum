console.log("🔥 Home.tsx rendered at", new Date().toLocaleTimeString());
console.log("🔥 Home.tsx reloaded at", new Date().toLocaleTimeString());
console.log("✅ This Home.tsx is now active");
console.log("🏗️ Home component re-rendered at", new Date().toLocaleTimeString());

import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
    const { isZh, language, switchLanguage } = useLanguage();
    const isChinese = isZh; // For backward compatibility with existing code
    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const handleLanguageSelect = (lang: string) => {
        switchLanguage(lang);
        setLangMenuOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section.fade");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );
        sections.forEach((section) => observer.observe(section));

        const left = document.getElementById("scrollLeft");
        const right = document.getElementById("scrollRight");
        const container = document.getElementById("scrollContainer");
        if (left && right && container) {
            left.onclick = () =>
                container.scrollBy({
                    left: -container.offsetWidth,
                    behavior: "smooth",
                });
            right.onclick = () =>
                container.scrollBy({
                    left: container.offsetWidth,
                    behavior: "smooth",
                });
        }
    }, []);
// 自动轮播 + 按钮控制（工艺九图）
    setTimeout(() => {
        const processContainer = document.getElementById("scrollContainerProcess");
        const leftBtn = document.getElementById("scrollLeftProcess");
        const rightBtn = document.getElementById("scrollRightProcess");

        if (processContainer && leftBtn && rightBtn) {
            // 按钮手动控制
            leftBtn.addEventListener("click", () => {
                processContainer.scrollBy({
                    left: -processContainer.offsetWidth / 2,
                    behavior: "smooth",
                });
            });

            rightBtn.addEventListener("click", () => {
                processContainer.scrollBy({
                    left: processContainer.offsetWidth / 2,
                    behavior: "smooth",
                });
            });

            // 自动轮播
            let autoScroll: ReturnType<typeof setInterval>;
            const startAutoScroll = () => {
                autoScroll = setInterval(() => {
                    processContainer.scrollBy({
                        left: processContainer.offsetWidth / 2,
                        behavior: "smooth",
                    });
                }, 4000);
            };
            const stopAutoScroll = () => clearInterval(autoScroll);

            // 开始轮播
            startAutoScroll();

            // 悬停暂停
            processContainer.addEventListener("mouseenter", stopAutoScroll);
            processContainer.addEventListener("mouseleave", startAutoScroll);
        }
    }, 300); // ✅ 延时300毫秒，确保DOM完全加载后再绑定

    return (
        <main className="bg-gray-900 text-white font-sans overflow-x-hidden">
            <SEOHead />

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md text-gray-100 shadow-md z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-3">
                    {/* 左侧 Logo */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        />
                        <p className="text-sm md:text-lg font-bold tracking-wide whitespace-nowrap">
                            {isChinese ? "中国锡器博物馆" : "CHINA PEWTER MUSEUM"}
                        </p>
                    </div>

                    {/* 中间导航链接 */}
                    <div className="hidden md:flex flex-wrap justify-center gap-6 text-sm md:text-base">
                        <a href="#hero" className="hover:text-red-400 transition-colors duration-300">
                            {isChinese ? "首页" : "Home"}
                        </a>
                        <a href="#about" className="hover:text-red-400 transition-colors duration-300">
                            {isChinese ? "关于" : "About"}
                        </a>
                        <a
                            href="#collections"
                            className="hover:text-red-400 transition-colors duration-300"
                        >
                            {isChinese ? "展览与收藏" : "Exhibitions & Collections"}
                        </a>
                        <a
                            href="#craft"
                            className="hover:text-red-400 transition-colors duration-300"
                        >
                            {isChinese ? "工艺与文化" : "Craft & Culture"}
                        </a>
                        <a
                            href="#learning"
                            className="hover:text-red-400 transition-colors duration-300"
                        >
                            {isChinese ? "研学与教育" : "Learning & Discovery"}
                        </a>
                        <a
                            href="#events"
                            className="hover:text-red-400 transition-colors duration-300"
                        >
                            {isChinese ? "活动与交流" : "Events & Partnerships"}
                        </a>
                    </div>

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
                </div>

                {/* 小屏导航栏（自动折叠为两行） */}
                <div className="md:hidden bg-black/80 backdrop-blur-md">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm py-3">
                        <a href="#hero" className="hover:text-red-400">{isChinese ? "首页" : "Home"}</a>
                        <a href="#about" className="hover:text-red-400">{isChinese ? "关于" : "About"}</a>
                        <a href="#collections" className="hover:text-red-400">{isChinese ? "展览与收藏" : "Exhibitions & Collections"}</a>
                        <a href="#craft" className="hover:text-red-400">{isChinese ? "工艺与文化" : "Craft & Culture"}</a>
                        <a href="#learning" className="hover:text-red-400">{isChinese ? "研学与教育" : "Learning & Discovery"}</a>
                        <a href="#events" className="hover:text-red-400">{isChinese ? "活动与交流" : "Events & Partnerships"}</a>
                    </div>
                    
                    {/* 移动端语言下拉菜单 */}
                    <div className="flex justify-center pb-3 px-4">
                        <div className="relative w-full max-w-xs">
                            {/* 触发按钮 */}
                            <button
                                onClick={() => setLangMenuOpen(!langMenuOpen)}
                                className="w-full flex items-center justify-center gap-2 bg-[#374151] hover:bg-[#4B5563] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-lg border border-white/10"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    <div className="absolute left-0 right-0 mt-2 bg-[#374151] rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50 animate-slideDown">
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
                    </div>
                </div>
            </nav>


            {/* Hero Section */}
            <section id="hero" className="relative h-screen flex items-end justify-start overflow-hidden">

                {/* 固定单张背景 */}
                <div className="fixed inset-0 z-0">
                    <img
                        src="/images/bg-museum.jpg"
                        alt="Museum Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>


            {/* 前景文字 */}
                <div className="relative z-10 p-6 md:p-10 text-left">
                    <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-snug crystal-text">
                        {isChinese ? (
                            <>
                                <span className="text-3xl md:text-4xl">欢迎来到</span>
                                <br />
                                <span className="text-3xl md:text-4xl">中国锡器博物馆</span>
                            </>
                        ) : (
                            <>
                                <span className="text-3xl md:text-4xl">WELCOME TO</span>
                                <br />
                                <span className="text-3xl md:text-4xl">CHINA PEWTER MUSEUM</span>
                            </>
                        )}
                    </h1>
                    <p className="text-lg text-gray-200">
                        9:30 – 16:30 ({isChinese ? "周一闭馆" : "Closed Mondays"})
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section
                id="intro"
                className="relative py-16 px-6 md:px-16 text-center z-10"
            >
                {/* ✨ 半透明水晶背景层 */}
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.08)] backdrop-blur-xl border border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.08)] rounded-3xl mx-auto w-[92%] md:w-[80%]"></div>

                {/* 文字内容 */}
                <div className="relative z-10">
                    {/* 主标题加上超链接 */}
                    <a
                        href="https://v.douyin.com/2Ep06fmhBaA/ hOx:/ 01/07 W@z.tr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                    >
                        <h2 className="text-lg md:text-3xl font-bold text-white mb-8 leading-snug tracking-widest crystal-text">
                            {isChinese
                                ? "让金属有温度，让文化会呼吸"
                                : "Where Metal Breathes and Culture Lives"}
                        </h2>
                    </a>

                    {/* 段落内容 */}
                    <div className="max-w-4xl mx-auto text-gray-200 leading-relaxed space-y-5 text-base md:text-lg tracking-wide">
                        <p>
                            {isChinese
                                ? "在黎里古镇的古巷与河湾间，一座明代古宅温润如锡，沉静如诗。中国锡器博物馆，于此安放光影与匠心。这里没有冷冰冰的展柜，而是一场跨越千年的对话——人与器、心与文明。"
                                : "Amid the alleys and waterways of Lili Ancient Town, a Ming Dynasty mansion stands—serene as pewter, timeless as poetry. Here, the China Pewter Museum breathes new life into craft and heritage. This is not a hall of silent objects, but a living dialogue between people and things, between touch and time."}
                        </p>
                    </div>
                </div>

                {/* ✨ 层叠柔光动画样式 */}
                <style>{`
    #intro::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 20% 30%,
        rgba(255, 255, 255, 0.1),
        transparent 60%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(150, 200, 255, 0.1),
        transparent 70%
      );
      filter: blur(40px);
      z-index: 0;
      opacity: 0.8;
      animation: introGlow 10s ease-in-out infinite alternate;
    }

    @keyframes introGlow {
      0% {
        opacity: 0.8;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.02);
      }
      100% {
        opacity: 0.8;
        transform: scale(1);
      }
    }
  `}</style>
            </section>



            {/* About Section */}
            <div className="relative z-10 bg-gray-450">
                <section
                    id="about"
                    className="bg-gray-450 text-white py-24 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center fade"
                >
                    {/* Left side: Text */}
                    <div>
                        <a
                            href="https://v.douyin.com/VOMXkDBZLgk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:brightness-125"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug crystal-text">
                                {isChinese ? "关于锡器博物馆" : "About the Museum"}
                            </h2>
                        </a>


                        <p className="text-white leading-relaxed text-lg mb-4 whitespace-pre-line">
                            {isChinese
                                ? `中国锡器博物馆位于中国苏州黎里古镇，馆舍依托明代毛宅修复而成。
由徐鹏林创办，于二〇一七年正式开馆，
是中国规模最大、最具代表性的锡器专题博物馆。                    

博物馆被列入中国非物质文化遗产体系，并获评为：
苏州市中小学生综合素质发展活动基地、
苏州市科普教育基地、
长三角生态绿色一体化发展示范区首批科学教育基地，
并担任全国工业博物馆联盟铸造行业分盟轮值理事长单位。

博物馆扎根江南水乡，以锡为媒，探索金属与文化的共鸣。
锡柔而不弱，润而不寒，象征着东方文化中力量与温度的平衡。
通过展览、研学与交流合作，博物馆致力于让“技”与“道”相连，
让传统与创新共生，让手艺与教育相融。

在这里，展示不止于器物，更是一次精神的唤醒。
中国锡器博物馆的使命，是让锡文化“活起来、传下去、走出去”
让金属有温度，让文化会呼吸。`
                                : `The China Pewter Museum, located in Lili Ancient Town, Suzhou, China, is housed within the restored Mao Mansion, a Ming-dynasty residence of historic character.
Founded by Xu Penglin and opened in 2017, it is China’s largest institution dedicated to pewter culture and preservation.

The museum is officially recognized as part of China’s Intangible Cultural Heritage, and serves as a Suzhou Comprehensive Quality Development Activity Base for Primary and Secondary School Students, a Suzhou Science Popularization Base, and one of the First Batch of Science Education Bases in the Yangtze River Delta Leading Demonstration Zone. It also serves as the Rotating Director of the Foundry Industry Sub-Alliance under the National Industrial Museum Alliance of China.

Rooted in the ancient water town of Jiangnan, the museum regards pewter not only as a metal of craft, but as a vessel of spirit. Soft yet enduring, pewter reflects the Chinese pursuit of harmony, restraint, and warmth within strength.
Through exhibitions, learning and discovery programs, and collaborative projects, the museum seeks to connect technology with culture, tradition with innovation, and craftsmanship with education.

For the museum, to display is to awaken — to let visitors sense that metal is not cold, but alive with memory and meaning.
Its mission is to let pewter culture come alive, be passed on, and reach the wider world — to let metal hold warmth, and culture breathe.`}
                        </p>
                    </div>

                    {/* Right side: Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/about/about1.jpg"
                            alt="about1"
                            className="rounded-lg shadow-md object-cover w-full h-48 md:h-60"
                        />
                        <img
                            src="/images/about/about2.jpg"
                            alt="about2"
                            className="rounded-lg shadow-md object-cover w-full h-48 md:h-60"
                        />
                        <img
                            src="/images/about/about3.jpg"
                            alt="about3"
                            className="rounded-lg shadow-md object-cover w-full h-48 md:h-60"
                        />
                        <img
                            src="/images/about/about4.jpg"
                            alt="about4"
                            className="rounded-lg shadow-md object-cover w-full h-48 md:h-60"
                        />
                    </div>
                </section>
            </div>



            {/* Exhibitions & Collections Section */}
            <div className="relative z-10 bg-transparent">
                <section
                    id="collections"
                    className="relative text-white py-24 px-4 md:px-10 text-center fade overflow-hidden"
                >
                    {/* ✨ 背景层：水晶流光 */}
                    <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border-t border-b border-white/10 shadow-[inset_0_0_30px_rgba(180,220,255,0.05)]"></div>

                    {/* ✨ 流动光层 */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(180,220,255,0.08),transparent_75%)] animate-glowFlow"></div>

                    {/* 内容层 */}
                    <div className="relative z-10">
                        <a
                            href="https://v.douyin.com/JV1vrG3QLUY/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-all duration-500 hover:scale-105 hover:-translate-y-[2px] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] hover:brightness-125"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug crystal-text">
                                {isChinese ? "展览与收藏" : "Exhibitions & Collections"}
                            </h2>
                        </a>


                        <div className="max-w-4xl mx-auto text-gray-200 leading-relaxed text-lg mb-16 whitespace-pre-line bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg">
                            <p>
                                {isChinese
                                    ? `博物馆通过常设展与专题展，系统展示锡器的多样面貌。
展厅按主题分区陈列，涵盖食具、茶具、酒具、闺房用具、文房用具、照明用具、祭祀用具及雕像饰品等类别。
观众可在器物之间感受古人生活的节奏与审美秩序，体会锡在饮食、居家、礼仪与精神生活中的广泛应用。

海外展区收藏来自日本、英国与荷兰的锡器作品，
以对照的方式呈现这一材料跨越地域与文化的共通审美。
这些展品让人看到，锡不仅属于中国，也属于世界。

自十六世纪起，中国精工锡器经由海上丝绸之路远销东南亚、印度与欧洲。
至十八世纪中期，锡器与瓷器、漆器并列，成为中国手工艺走向世界的象征。
馆藏中保存着这一时期的外销锡器，
它们见证了中西交流的轨迹，也承载了工艺与文明的互映。

每一件展品，都记录着人类与金属共生的故事。
在光影与陈列之间，锡的光泽仍在缓缓诉说着生活的温度与时代的记忆。`
                                    : `Through permanent and special exhibitions,
the museum presents the many faces of pewter in Chinese life and culture.
The galleries are organized thematically, featuring pewter tableware, teaware, wine vessels, 
boudoir articles, scholar’s objects, lighting pieces, ritual wares and decorative figures :
each revealing a distinct aspect of daily use and aesthetic sensibility.
An international section features pewter works from Japan, Britain and the Netherlands,
highlighting the shared appreciation of this gentle metal across cultures.
Here, visitors can see that pewter belongs not only to China, but to the world.
From the sixteenth century onward, 
Chinese pewter craftsmanship traveled along the Maritime Silk Road to Southeast Asia, India and Europe.
By the mid-eighteenth century,
 pewter stood alongside porcelain and lacquerware as a symbol of China’s artistry reaching the world.
The museum’s collection preserves export pewter from this era,
living records of exchange between East and West, where craft and civilization met in quiet dialogue.
Every object in the gallery carries its own story.
In the play of light and shadow, pewter continues to speak:
its sheen holding the warmth of life and the memory of time.`}
                            </p>
                        </div>

                        {/* 滚动容器 */}
                        <div className="relative max-w-[1600px] mx-auto">
                            {/* 左右按钮 */}
                            <button
                                id="scrollLeft"
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#000000b0] to-transparent text-white p-5 rounded-full z-30 hover:scale-110 transition duration-300"
                            >
                                ‹
                            </button>
                            <button
                                id="scrollRight"
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-[#000000b0] to-transparent text-white p-5 rounded-full z-30 hover:scale-110 transition duration-300"
                            >
                                ›
                            </button>

                            {/* 卡片区域 */}
                            <div
                                id="scrollContainer"
                                className="grid grid-flow-col auto-cols-[90%] sm:auto-cols-[48%] md:auto-cols-[23%] overflow-x-auto scroll-smooth gap-8 px-4 md:px-6 pb-4 hide-scrollbar snap-x snap-mandatory"
                            >
                                {[
                                    { id: 1, title: isChinese ? "食具" : "Tableware", desc: isChinese ? "以实用为先，形制规整，体现锡器在饮食文化中的温润气度。" : "Functional and elegant, reflecting pewter’s presence in Chinese dining culture.", img: "/images/collection/collection1.jpg" },
                                    { id: 2, title: isChinese ? "茶具" : "Tea Ware", desc: isChinese ? "以锡保香、避湿之特性，承载千年茶文化的清雅与仪式感。" : "Known for preserving aroma and freshness, pewter vessels embody tea rituals.", img: "/images/collection/collection2.jpg" },
                                    { id: 3, title: isChinese ? "酒具" : "wine vessels", desc: isChinese ? "温润如玉的锡酒器，凝结古人待客的礼节与风雅。" : "Pewter wine vessels capture the elegance of gatherings.", img: "/images/collection/collection3.jpg" },
                                    { id: 4, title: isChinese ? "闺房用具" : "Boudoir Utensils", desc: isChinese ? "精巧雅致，寄寓生活情趣与东方审美的温柔格调。" : "Delicate and refined, reflecting domestic elegance.", img: "/images/collection/collection4.jpg" },
                                    { id: 5, title: isChinese ? "文房用具" : "Scholar’s Utensils", desc: isChinese ? "炉、瓶、盒等文房器物，凝聚书香与匠心的双重气息。" : "Blending artistry and scholarly refinement.", img: "/images/collection/collection5.jpg" },
                                    { id: 6, title: isChinese ? "照明用具" : "Lighting Ware", desc: isChinese ? "烛台灯具，映照古人的审美与生活之光。" : "Candleholders illuminating culture.", img: "/images/collection/collection6.jpg" },
                                    { id: 7, title: isChinese ? "祭供用具" : "Ritual Utensils", desc: isChinese ? "承载敬祖礼仪，融信仰与美学于一体。" : "Ritual pewter uniting belief and beauty.", img: "/images/collection/collection7.jpg" },
                                    { id: 8, title: isChinese ? "雕像 饰件 花瓶 烟具" : "Sculptures & Decorative Pewter", desc: isChinese ? "从雕像到饰件，锡以柔韧之性塑造生命之美。" : "Pewter conveys artistry and remembrance.", img: "/images/collection/collection8.jpg" },
                                    { id: 9, title: isChinese ? "国外锡器" : "Overseas Pewter", desc: isChinese ? "展示世界各地锡文化的交流与融合。" : "Global pewter aesthetics.", img: "/images/collection/collection9.jpg" },
                                ].map((item) => (
                                    <Link
                                        key={item.id}
                                        to={isZh ? `/zh/collections/${item.id}` : `/collections/${item.id}`}
                                        className="group block backdrop-blur-xl bg-[rgba(255,255,255,0.08)] border border-white/20 hover:bg-[rgba(255,255,255,0.15)] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                                    >
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="text-left p-6">
                                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* 样式定义 */}
                        <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes glowFlow {
          0% { opacity: 0.9; transform: scale(1) translate(0,0); }
          50% { opacity: 1; transform: scale(1.02) translate(10px,-8px); }
          100% { opacity: 0.9; transform: scale(1) translate(0,0); }
        }
        .animate-glowFlow {
          animation: glowFlow 14s ease-in-out infinite alternate;
        }
      `}</style>
                    </div>
                </section>
            </div>



            {/* Craft & Culture Section */}
            <div className="relative z-10 bg-gray-450">
                <section
                    id="craft"
                    className="bg-gray-450 text-white py-24 px-6 md:px-20 text-center fade"
                >
                    {/* 标题带链接 + hover 微亮 */}
                    <a
                        href="https://tv.cctv.com/2017/04/30/VIDE1TN0n6CYGeowtALickku170430.shtml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] hover:brightness-125 hover:-translate-y-[2px]"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug crystal-text">
                            {isChinese ? "工艺与文化" : "Craft & Culture"}
                        </h2>
                    </a>


                    {/* 段落说明（✅ 已改为居中） */}
                    <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg mb-16 text-center whitespace-pre-line space-y-6">
                        <p>
                            {isChinese
                                ? `锡，柔而不弱，润而不寒，素光含静气。  
在它的延展与回收之间，蕴藏着金属最温柔的秩序。  

自古以来，锡被视为调和之材，  
既能与铜成青，又能与银共白，  
在火与手的交替中，显露出东方文化中的中和之美。`
                                : `Pewter — soft yet enduring, gentle yet firm, its muted sheen carries quiet grace.  
Between its stretch and return lies the most tender order of metal.  

Since ancient times, pewter has been regarded as a metal of harmony —  
able to form bronze with copper and shine silver with white,  
revealing the Eastern beauty of balance through fire and hand.`}
                        </p>

                        <p>
                            {isChinese
                                ? `制锡之道，不止于技。  
冶炼、浇铸、锤打、焊接、打磨、抛光，  
每一道工序，都是人与物的对话：  
力量、节奏与心性的平衡。  

打锡之人，在敲击的回声中体会静气；  
观锡之人，在光泽的流转中感受时间。  
工艺的意义，在于以形入心，以物见道。`
                                : `The way of pewter-making goes beyond technique.  
Smelting, casting, hammering, welding, grinding, polishing: 
each process is a dialogue between human and material,  
a balance of strength, rhythm, and inner calm.  

The craftsman, through the echo of hammer strikes, finds stillness;  
the observer, through the shimmer of light, feels the passage of time.  
The meaning of craft lies in shaping the heart through form,  
and seeking the Way through the object.`}
                        </p>
                    </div>

                    {/* 打锡工艺流程 */}
                    <div className="max-w-6xl mx-auto text-white text-center mt-16">
                        <h3 className="text-2xl font-bold mb-10 crystal-text">
                            {isChinese ? "传统打锡工艺流程" : "Traditional Pewter Craft Process"}
                        </h3>

                        <div className="flex flex-col items-center justify-center space-y-10">

                            {/* ===== 上层主工艺线 ===== */}
                            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                                {[
                                    { zh: "原料锡", en: "Raw Tin" },
                                    { zh: "熔锡", en: "Melting" },
                                    { zh: "压锡片", en: "Sheet Rolling" },
                                    { zh: "打样裁剪", en: "Pattern Cutting" },
                                    { zh: "冷锻捶打", en: "Cold Hammering" },
                                ].map((step, index, arr) => (
                                    <React.Fragment key={index}>
                                        <div className="glass-step min-w-[110px] md:min-w-[140px]">
                                            {isChinese ? step.zh : step.en}
                                        </div>
                                        {index < arr.length - 1 && (
                                            <span className="text-gray-400 text-2xl md:text-3xl">→</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* ===== 模铸（与冷锻捶打并列） ===== */}
                            <div className="flex flex-col items-center mt-[-0.5rem]">
                                <div className="flex justify-center items-center gap-3 md:gap-4">
                                    <span className="text-gray-400 text-2xl">↳</span>
                                    <div className="glass-step min-w-[110px] md:min-w-[140px]">
                                        {isChinese ? "模铸" : "Casting"}
                                    </div>
                                </div>
                            </div>

                            {/* ===== 下层收尾工艺线（两行，完全对齐） ===== */}
                            <div className="flex flex-col items-center space-y-6 mt-4">
                                {/* 第一行 */}
                                <div className="flex justify-center items-center gap-4 md:gap-6">
                                    {[
                                        { zh: "焊接组合", en: "Joining & Assembly" },
                                        { zh: "挫修", en: "Filing & Finishing" },
                                        { zh: "削光", en: "Polishing" },
                                    ].map((step, index, arr) => (
                                        <React.Fragment key={index}>
                                            <div className="glass-step min-w-[110px] md:min-w-[140px]">
                                                {isChinese ? step.zh : step.en}
                                            </div>
                                            {index < arr.length - 1 && (
                                                <span className="text-gray-400 text-2xl md:text-3xl">→</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>

                                {/* 第二行 */}
                                <div className="flex justify-center items-center gap-4 md:gap-6">
                                    {[
                                        { zh: "砂磨", en: "Sanding" },
                                        { zh: "擦洗", en: "Cleaning" },
                                        { zh: "纹饰", en: "Decoration" },
                                    ].map((step, index, arr) => (
                                        <React.Fragment key={index}>
                                            <div className="glass-step min-w-[110px] md:min-w-[140px]">
                                                {isChinese ? step.zh : step.en}
                                            </div>
                                            {index < arr.length - 1 && (
                                                <span className="text-gray-400 text-2xl md:text-3xl">→</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ✨ 样式部分 */}
                        <style>{`
.glass-step {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow:
    0 2px 8px rgba(255, 255, 255, 0.08),
    inset 0 0 10px rgba(180, 220, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  transition: all 0.4s ease;
}
.glass-step:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow:
    0 4px 14px rgba(180, 220, 255, 0.15),
    inset 0 0 15px rgba(200, 240, 255, 0.1);
  transform: translateY(-3px) scale(1.03);
}

/* ✨ 手机端视觉优化 */
@media (max-width: 768px) {
  .glass-step {
    padding: 0.55rem 1rem;
    font-size: 0.9rem;
    min-width: 90px;
  }
  .text-gray-400.text-2xl {
    font-size: 1.4rem;
  }
  .space-y-10 {
    gap: 2rem !important;
  }
}

/* ✨ 箭头动画 */
@keyframes arrowFloat {
  0%, 100% { transform: translateY(0); opacity: 0.8; }
  50% { transform: translateY(-3px); opacity: 1; }
}
.text-gray-400.text-2xl,
.text-gray-400.text-3xl {
  animation: arrowFloat 3s ease-in-out infinite;
}
  `}</style>
                    </div>



                    {/* 工艺过程九图滑动展示 */}
                    <div className="max-w-[1600px] mx-auto mt-20 relative">
                        <h3 className="text-2xl font-bold mb-6 text-center">
                            {isChinese ? "工艺过程掠影" : "Craftsmanship in Motion"}
                        </h3>

                        <button
                            id="scrollLeftProcess"
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#000000b0] to-transparent text-white p-5 rounded-full z-30 hover:scale-110 transition duration-300"
                        >
                            ‹
                        </button>
                        <button
                            id="scrollRightProcess"
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-[#000000b0] to-transparent text-white p-5 rounded-full z-30 hover:scale-110 transition duration-300"
                        >
                            ›
                        </button>

                        <div
                            id="scrollContainerProcess"
                            className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[42%] md:auto-cols-[22%] overflow-x-auto scroll-smooth gap-6 px-6 pb-6 hide-scrollbar snap-x snap-mandatory"
                        >
                            {Array.from({ length: 9 }, (_, i) => ({
                                id: i + 1,
                                img: `/images/process/process00${i + 1}.jpg`,
                                zh: [
                                    "熔锡成液，开篇之始。",
                                    "压锡成片，形质初定。",
                                    "打样裁剪，定形之准。",
                                    "锤击敲打，节奏生光。",
                                    "焊接组合，巧思相连。",
                                    "挫修精整，匠意见微。",
                                    "削光去滓，光华初现。",
                                    "砂磨细作，润泽如玉。",
                                    "擦洗成器，见匠心本色。",
                                ][i],
                                en: [
                                    "Melting tin — the beginning of form.",
                                    "Rolling tin sheets — shaping the essence.",
                                    "Pattern cutting — precision defines.",
                                    "Hammering — rhythm brings light.",
                                    "Joining — craft connects creation.",
                                    "Filing — precision reveals mastery.",
                                    "Polishing — brilliance begins to emerge.",
                                    "Sanding — smooth as flowing jade.",
                                    "Cleaning — revealing pure craft.",
                                ][i],
                            })).map((item) => (
                                <div
                                    key={item.id}
                                    className="group backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-1 snap-start"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={`process${item.id}`}
                                            className="w-full aspect-[4/5] object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-4 text-left">
                                        <h4 className="text-white font-semibold text-base mb-2">
                                            {isChinese ? `第 ${item.id} 工序` : `Step ${item.id}`}
                                        </h4>
                                        <p className="text-gray-300 text-sm leading-snug">
                                            {isChinese ? item.zh : item.en}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <style>{`
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`}</style>
                    </div>

                    {/* 结语 */}
                    <div className="max-w-6xl mx-auto text-white italic leading-relaxed text-center mt-12">
                        <p>
                            {isChinese
                                ? "每一次锤击，都是对时间的回应；每一道光泽，都是对心性的修炼。传统工艺让金属拥有了生命，也让人心找到安处。"
                                : "Each strike of the hammer answers the call of time; each sheen polished reflects the discipline of the heart. Traditional craftsmanship breathes life into metal — and stillness into the maker’s soul."}
                        </p>
                    </div>
                </section>
            </div>



            {/* Learning & Discovery Section */}
            <div className="relative z-10 bg-transparent">
                <section
                    id="learning"
                    className="relative text-white py-24 px-6 md:px-20 text-center fade overflow-hidden"
                >
                    {/* ✨ 水晶流光背景 */}
                    <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl border-t border-b border-white/10 shadow-[inset_0_0_30px_rgba(180,220,255,0.05)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(255,255,255,0.1),transparent_70%),radial-gradient(circle_at_85%_70%,rgba(150,200,255,0.08),transparent_80%)] animate-glowFlow"></div>

                    {/* 内容区 */}
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug crystal-text">
                            {isChinese ? "研学与教育" : "Learning & Discovery"}
                        </h2>

                        {/* 段落文字 */}
                        <div className="max-w-4xl mx-auto text-gray-200 leading-relaxed text-lg mb-16 whitespace-pre-line bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg">
                            <p>
                                {isChinese
                                    ? `如果说展厅是静观的课堂，工坊便是动手的学堂。
中国锡器博物馆将传统工艺教育融入日常体验，
让观众在“做中学”、在“造中悟”。
每一次触摸锡片的温度、聆听锤击的节奏，
都是一次从感官到心性的修行。

博物馆将金属工艺、文化叙事与创造性思维结合，
面向青少年、家庭与国际访客推出多层次课程体系。
通过亲手打锡、模具设计、器物拓印等活动，
学习者在实践中理解工艺之理，感受文化之魂。

与此同时，锡文化也走进校园。
博物馆以宣讲、讲座与主题课程的形式，
将“匠心”“文化自觉”与“工艺精神”带入课堂。
学生了解锡器的历史脉络与当代表达，
在近距离的接触中激发兴趣，启发思考。`
                                    : `If the exhibition hall is a classroom of contemplation,
then the workshop is a classroom of creation.
The China Pewter Museum integrates traditional craftsmanship education
into everyday experience,
inviting visitors to “learn by doing” and “reflect through making.”
Each touch of pewter, each rhythm of hammer and hand,
becomes a quiet journey from the senses to the spirit.
Combining craftsmanship, cultural narrative, and creative thinking,
the museum offers a range of programs for youth, families, and international visitors.
Through hands-on pewter work, mold design, and creative exercises,
learners discover the logic of craft and the soul of culture through practice.
At the same time, pewter culture enters schools.
Through talks and lectures,
the museum brings craftsmanship and cultural awareness into the classroom.
Students encounter the history and modern relevance of pewter,
finding curiosity and inspiration through direct experience.”`}
                            </p>
                        </div>

                        {/* ✨ 研学课程卡片 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                            {[
                                {
                                    id: 1,
                                    title: isChinese ? "打锡体验课程" : "Pewter Workshop",
                                    desc: isChinese
                                        ? "亲手完成一件锡器作品，从敲打、焊接到打磨，体验传统工艺的全流程。"
                                        : "Create your own pewter piece—from hammering and joining to polishing—experiencing the full craft journey.",
                                    img: "/images/learning/learning1.jpg",
                                    link: "https://v.douyin.com/EA9o-sXIaD0/ 09/09 XZz:/ s@e.bn",
                                },
                                {
                                    id: 2,
                                    title: isChinese ? "青少年创意课堂" : "Youth Creative Class",
                                    desc: isChinese
                                        ? "结合艺术与科学，让学生在设计与实践中培养动手力与审美力。"
                                        : "Combining art and science, these classes help students cultivate creativity through design and making.",
                                    img: "/images/learning/learning2.jpg",
                                    link: "https://v.douyin.com/UQLESpHubn8/ u@s.Eh Syg:/ 05/12",
                                },
                                {
                                    id: 3,
                                    title: isChinese ? "国际文化交流营" : "International Cultural Camp",
                                    desc: isChinese
                                        ? "海外游客踊跃参与打锡体验，在锤炼与光泽之间，感受中国手工的温度与细腻。"
                                        : "Overseas visitors participate in pewter-craft workshops, experiencing the warmth and refinement of Chinese craftsmanship.",
                                    img: "/images/learning/learning3.jpg",
                                    link: "https://v.douyin.com/4bq16YWGDsM/ 05/24 RKj:/ V@Y.m",
                                },
                            ].map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block backdrop-blur-xl bg-[rgba(255,255,255,0.08)] border border-white/20 hover:bg-[rgba(255,255,255,0.15)] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                                >
                                    <div className="relative">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />
                                    </div>
                                    <div className="p-6 text-left">
                                        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-400 transition-colors duration-500">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-snug">{item.desc}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* ✨ 结语 */}
                        <div className="max-w-4xl mx-auto text-gray-300 italic leading-relaxed text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-6 px-10 shadow-inner">
                            <p>
                                {isChinese
                                    ? "学习的终点，不是记忆，而是发现。唯有亲手触摸文化，方能真正理解文化的温度。"
                                    : "The goal of learning is not memory, but discovery. Only through touch can we truly understand the warmth of culture."}
                            </p>
                        </div>
                    </div>

                    {/* 样式定义 */}
                    <style>{`
      @keyframes glowFlow {
        0% { opacity: 0.9; transform: scale(1) translate(0,0); }
        50% { opacity: 1; transform: scale(1.02) translate(12px,-10px); }
        100% { opacity: 0.9; transform: scale(1) translate(0,0); }
      }
      .animate-glowFlow {
        animation: glowFlow 14s ease-in-out infinite alternate;
      }
    `}</style>
                </section>
            </div>


            {/* Events & Partnerships Section */}
            <div className="relative z-10 bg-gray-450">
                <section
                    id="events"
                    className="bg-gray-450 text-white py-24 px-6 md:px-20 text-center fade"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug crystal-text">
                        {isChinese ? "活动与交流" : "Events & Partnerships"}
                    </h2>

                    <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg mb-16 whitespace-pre-line">
                        <p>
                            {isChinese
                                ? `文化的生命，在于交流。
中国锡器博物馆以开放的姿态，
参与并发起多层次的文化合作与公众活动，
让锡的温度跨越地域、连接世界。
从区域峰会到国际展会，
博物馆以展览、论坛与艺术计划的形式，
持续推动锡文化的对话与传播。
无论是在长三角一体化发展峰会，
还是在中国国际进口博览会、国际旅游交易会等平台，
锡器都以它独特的光泽与东方美感，
讲述着“工艺之美、生活之雅、文化之信”。

近年来，博物馆连续受邀在民非博物馆馆长国际论坛作主题发言，
分享在展陈策划、教育推广、文创开发与文化节庆中的经验。
同时，联合地方政府共同举办“中国道口锡器文化节”，
以地方文化为根基，以公众参与为纽带，
探索传统手艺融入现代生活的新路径。`
                                : `Culture lives through connection.
The China Pewter Museum takes an open approach to collaboration and exchange,
engaging in a wide range of programs that bring the warmth of pewter
beyond its local roots and into the world.
From regional summits to international expos,
the museum participates in exhibitions, forums, and cultural initiatives
that foster dialogue and understanding around pewter culture.
At events such as the Yangtze River Delta Integration Summit,
the China International Import Expo, and the China Tourism Fair,
the museum presents pewter not only as a craft,
but as a reflection of Chinese aesthetics and cultural confidence.

In recent years, the museum has been invited to deliver keynote presentations
at the International Forum for Private Museum Directors,
sharing its experience in exhibition planning, cultural education,
creative design, and public engagement.
It also co-organized the China Daokou Pewter Culture Festival
with local government partners —
a celebration rooted in regional heritage and open to the public,
exploring how traditional craftsmanship can find new life in modern society.`}
                        </p>
                    </div>
                </section>

                {/* 活动卡片 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1500px] mx-auto mt-1 px-2">
                    {[
                        {
                            id: 1,
                            title: isChinese ? "中法文化交流论坛" : "Sino-French Forum",
                            desc: isChinese
                                ? "法国学生来华，与中国工艺师共同探讨锡器的当代表达。"
                                : "French students visited China to explore the contemporary expression of pewter craftsmanship with Chinese artisans.",
                            img: "/images/events/event1.jpg",
                            link: "https://www.youtube.com/watch?v=Jh-MCwFMsJk",
                        },
                        {
                            id: 2,
                            title: isChinese ? "长三角文化峰会" : "Yangtze Delta Summit",
                            desc: isChinese
                                ? "博物馆代表分享民间工艺的创新保护经验。"
                                : "Museum representatives share experiences in heritage innovation.",
                            img: "/images/events/event2.jpg",
                            link: "https://youtu.be/4mKTwch1Ivo?si=SSL1lw_WH-K_XiT2",
                        },
                        {
                            id: 3,
                            title: isChinese ? "锡器国际设计展" : "Pewter Design Expo",
                            desc: isChinese
                                ? "展示传统锡工艺与现代设计融合的跨界作品。"
                                : "Showcasing cross-cultural pewter works blending tradition and design.",
                            img: "/images/events/event3.jpg",
                            link: "https://www.youtube.com/watch?v=Jh-MCwFMsJk",
                        },
                        {
                            id: 4,
                            title: isChinese ? "道口锡文化节" : "Daokou Tinware Festival",
                            desc: isChinese
                                ? "让传统工艺走进生活，传递手作的温度与美感。"
                                : "Bringing pewter craft into daily life through interactive festivals.",
                            img: "/images/events/event4.jpg",
                            link: "https://youtu.be/4mKTwch1Ivo?si=SSL1lw_WH-K_XiT2",
                        },
                    ].map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block overflow-hidden backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                        >
                            {/* 保持竖向比例：3:4 */}
                            <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />
                            </div>

                            {/* 文本区域 */}
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-400 transition-colors duration-500">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-snug">{item.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>


            </div>

            {/* 结语区块（整块可点击） */}
            <a
                href="https://v.douyin.com/Va4fOio7ZQs/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="relative z-20 text-center text-gray-100 text-xl leading-loose mt-20 mb-24 border-t border-gray-700/40 pt-12 pb-12 bg-black/40 backdrop-blur-sm rounded-2xl w-fit mx-auto px-8 space-y-3 cursor-pointer hover:bg-black/50 transition">
                    {isChinese ? (
                        <>
                            <p className="font-medium tracking-widest crystal-text">锤锻锡器，点燃热忱</p>
                            <p className="font-medium tracking-widest crystal-text">在此携手，文化交融</p>
                            <p className="font-medium tracking-widest crystal-text">永恒锡器，注入呼吸</p>
                        </>
                    ) : (
                        <>
                            <p className="font-light tracking-wider crystal-text">Hammering Pewter, Fuelling Passion.</p>
                            <p className="font-light tracking-wider crystal-text">Where Hands Connect, Cultures Converge</p>
                            <p className="font-light tracking-wider crystal-text">Breathe Life Into Timeless Pewter.</p>
                        </>
                    )}
                </div>
            </a>





            {/* Footer */}
            <footer className="bg-black text-center py-8 text-gray-400 text-sm relative z-10">
                <p>
                    {isChinese
                        ? "© 2025 中国锡器博物馆 | 传承匠心，用心设计"
                        : "© 2025 China Pewter Museum | Designed with Heritage and Heart"}
                </p>
            </footer>

            {/* Crystal Text Effect */}
            <style>{`
  .crystal-text {
    background: linear-gradient(
      90deg,
      #cce7ff 0%,
      #ffffff 20%,
      #a5d8ff 40%,
      #bde0fe 60%,
      #e0f2fe 80%,
      #cce7ff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow:
      0 0 8px rgba(180, 220, 255, 0.6),
      0 0 16px rgba(150, 200, 255, 0.4);
    animation: crystalGlow 6s ease-in-out infinite;
    background-size: 200% auto;
  }

  @keyframes crystalGlow {
    0% {
      background-position: 0% 50%;
      text-shadow:
        0 0 6px rgba(180, 220, 255, 0.5),
        0 0 12px rgba(150, 200, 255, 0.3);
    }
    50% {
      background-position: 100% 50%;
      text-shadow:
        0 0 12px rgba(255, 255, 255, 0.8),
        0 0 20px rgba(170, 220, 255, 0.6);
    }
    100% {
      background-position: 0% 50%;
      text-shadow:
        0 0 6px rgba(180, 220, 255, 0.5),
        0 0 12px rgba(150, 200, 255, 0.3);
    }
  }

  /* 下拉菜单动画 */
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-slideDown {
    animation: slideDown 0.2s ease-out;
  }
`}</style>

        </main>
    );
}

