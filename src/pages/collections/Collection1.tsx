import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEOHead from "../../components/SEOHead";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Collection1() {
    const { isZh } = useLanguage();
    const isChinese = isZh;
    const navigate = useNavigate();

    return (
        <main className="relative min-h-screen font-sans text-white overflow-hidden bg-gradient-to-b from-[#1f2937] via-[#374151] to-[#64748b]">
            {/* ✨ 光晕层 */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_70%)] animate-glow1"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(180,220,255,0.15),transparent_70%)] animate-glow2"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_75%)] animate-glow3"></div>
            </div>

            {/* 🌫️ 薄雾纹理 */}
            <div className="absolute inset-0 bg-[url('/images/mist-texture.png')] opacity-25 mix-blend-screen animate-mist"></div>

            {/* ✅ 内容层 */}
            <div className="relative z-10">
                <SEOHead 
                    customTitle={isChinese ? "清代锡一品锅 - 中国锡器博物馆" : "Qing Dynasty Pewter Yi Pin Guo - China Pewter Museum"}
                    customDescription={isChinese ? "古雅精工，展现清代宫廷器物的匠心与礼制之美" : "Elegant craftsmanship reflecting the harmony and refinement of Qing imperial utensils"}
                />
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 px-6 md:px-20">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-center mb-16 bg-white/10 backdrop-blur-2xl border border-white/30 shadow-[0_0_40px_rgba(200,240,255,0.25)] rounded-3xl p-8 md:p-10 transition-all duration-700 hover:shadow-[0_0_60px_rgba(220,250,255,0.4)]"
                        >
                            <h1 className="text-4xl md:text-4xl font-bold mb-6 hover:text-[#bde0fe] transition-colors duration-500">
                                {isChinese ? "清代锡一品锅" : "Qing Dynasty Pewter Yi Pin Guo"}
                            </h1>
                            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                                {isChinese
                                    ? "古雅精工，展现清代宫廷器物的匠心与礼制之美"
                                    : "Elegant craftsmanship reflecting the harmony and refinement of Qing imperial utensils"}
                            </p>
                        </motion.div>

                        {/* 主体内容 */}
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* 图片区 */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="space-y-6 bg-white/10 backdrop-blur-2xl border border-white/25 rounded-2xl p-5 shadow-[0_0_40px_rgba(200,240,255,0.2)] hover:shadow-[0_0_60px_rgba(200,240,255,0.35)] transition-all duration-700"
                            >
                                <img
                                    src="/images/collection/collection1.jpg"
                                    alt={
                                        isChinese ? "清代锡一品锅" : "Qing Dynasty Pewter Yi Pin Guo"
                                    }
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/images/collection/collection1-detail1.jpg"
                                        alt="Detail 1"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <img
                                        src="/images/collection/collection1-detail2.jpg"
                                        alt="Detail 2"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                </div>
                            </motion.div>

                            {/* 文本区 */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="space-y-8 bg-white/10 backdrop-blur-2xl border border-white/25 rounded-2xl p-8 shadow-[0_0_40px_rgba(200,240,255,0.2)] hover:shadow-[0_0_60px_rgba(200,240,255,0.35)] transition-all duration-700"
                            >
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "历史背景" : "Historical Background"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "清代锡器制作工艺日臻成熟，形成了宫廷与民间并存、南北并秀的格局。这件锡一品锅即为清代典型宴饮器具之一，体现了当时社会上层生活的礼制秩序与审美趣味。"
                                            : "During the Qing Dynasty, pewter craftsmanship flourished in both court and folk traditions. This circular Yi Pin Guo exemplifies the refined lifestyle and harmony of the imperial household."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "工艺特点" : "Craftsmanship"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "全器以高纯度锡铸造而成，采用模块化组合结构设计。主体由碗、碟、盖、座等部件组成，配合精密卡槽与支架，可灵活拆装。各盖钮以天然玛瑙、玻璃珠嵌饰，形成点睛之效。表面饰以錾刻花纹及“寿”“福”等吉祥文字，线条流畅，刻工细致。器身打磨匀净，锡质温润光洁，既具金属之坚，也显玉石之泽。"
                                            : "Made of refined tin through precise casting and modular construction, the vessel consists of interlocking bowls, dishes, lids, and a base. The knobs are inlaid with natural agate and colored glass, providing visual accents. Its surface is decorated with engraved floral motifs and auspicious characters such as “longevity” and “fortune.” The body is polished to a silvery sheen—smooth yet soft in luster, reflecting the dual qualities of metal’s strength and jade’s warmth."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "造型特点" : "Design Features"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "整体呈六瓣式布局，中设主碗，外围环列副碗与碟，层次分明、构图严谨。展开时如花瓣舒展，收拢则浑然一体，既便于使用又兼具视觉美感。器形圆融稳重，比例协调，充分体现了清代金属器具“形以载礼”的造型理念。"
                                            : "The vessel’s structure follows a six-lobed floral layout—a central bowl surrounded by smaller dishes, forming a harmonious, layered composition. When opened, it unfolds like petals in bloom; when closed, it forms a compact unity of order and grace. The balanced proportions and symmetrical design exemplify the Qing ideal of “form as the carrier of ritual.”"}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "文化价值" : "Cultural Significance"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "锡一品锅承载着清代饮食文化与金属工艺的双重价值，是研究当时社会生活与审美的重要实物。"
                                            : "The Yi Pin Guo represents the fusion of dining culture and metal artistry, revealing Qing ideals of harmony and order."}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 页脚 */}
                <footer className="bg-white/10 backdrop-blur-2xl border-t border-white/20 text-center py-8 text-gray-200 text-sm mt-16 shadow-inner">
                    <p>
                        {isChinese
                            ? "© 2025 中国锡器博物馆 | 传承匠心，用心设计"
                            : "© 2025 China Pewter Museum | Designed with Heritage and Heart"}
                    </p>
                </footer>
            </div>

            {/* 🔙 返回按钮 */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-white/10 backdrop-blur-2xl border border-white/30 text-white px-4 py-3 rounded-full shadow-lg hover:bg-white/20 hover:text-[#bde0fe] hover:scale-105 transition-all duration-300"
                >
                    {isChinese ? "返回" : "Back"}
                </button>
                <button
                    onClick={() => navigate(isZh ? "/zh" : "/")}
                    className="bg-white/10 backdrop-blur-2xl border border-white/30 text-white px-4 py-2 rounded-full shadow-md hover:bg-white/20 hover:text-[#bde0fe] hover:scale-105 transition-all duration-300 text-sm"
                >
                    {isChinese ? "主页" : "Home"}
                </button>
            </div>

            {/* ✨ 动画样式 */}
            <style>{`
        @keyframes glowMove1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -20px); }
        }
        @keyframes glowMove2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 25px); }
        }
        @keyframes glowMove3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 30px); }
        }
        .animate-glow1 { animation: glowMove1 14s ease-in-out infinite alternate; }
        .animate-glow2 { animation: glowMove2 18s ease-in-out infinite alternate; }
        .animate-glow3 { animation: glowMove3 22s ease-in-out infinite alternate; }

        @keyframes mistMove {
          0% { transform: translate(0, 0) scale(1); opacity: 0.25; }
          50% { transform: translate(20px, -15px) scale(1.05); opacity: 0.35; }
          100% { transform: translate(-10px, 10px) scale(1); opacity: 0.25; }
        }
        .animate-mist {
          animation: mistMove 30s ease-in-out infinite alternate;
          background-size: cover;
        }
      `}</style>
        </main>
    );
}



