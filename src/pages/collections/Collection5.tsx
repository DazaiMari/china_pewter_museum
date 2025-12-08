import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEOHead from "../../components/SEOHead";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Collection5() {
    const { isZh } = useLanguage();
    const isChinese = isZh;
    const navigate = useNavigate();

    return (
        <main className="relative min-h-screen font-sans text-white overflow-hidden bg-gradient-to-b from-gray-800 via-gray-700 to-gray-500">
            {/* ✨ 背景光泽层 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.12),transparent_70%)] animate-glow1"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(180,220,255,0.12),transparent_70%)] animate-glow2"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_75%)] animate-glow3"></div>
            </div>

            {/* 🌫️ 薄雾层 */}
            <div className="absolute inset-0 bg-[url('/images/mist-texture.png')] opacity-25 mix-blend-screen animate-mist"></div>

            {/* ✅ 内容层 */}
            <div className="relative z-10">
                <SEOHead
                    customTitle={
                        isChinese
                            ? "文房用具 - 中国锡器博物馆"
                            : "Scholar's Utensils - China Pewter Museum"
                    }
                    customDescription={
                        isChinese
                            ? "炉、瓶、盒等文房器物，凝聚书香与匠心的双重气息"
                            : "Blending artistry and scholarly refinement"
                    }
                />
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 px-6 md:px-20">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-center mb-16 bg-white/10 backdrop-blur-2xl border border-white/30 shadow-[0_0_40px_rgba(200,240,255,0.25)] rounded-3xl p-8 md:p-10"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 hover:text-[#bde0fe] transition-colors duration-500">
                                {isChinese
                                    ? "嵌铜石榴喜鹊纹笔筒"
                                    : "Inlaid Copper Brush Pot with Pomegranate and Magpie Motif"}
                            </h1>
                            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                                {isChinese
                                    ? "清雅凝光，寓意吉庆的文人器具"
                                    : "Grace in Silver, Auspicious Joy in Bloom"}
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
                                    src="/images/collection/collection5.jpg"
                                    alt={
                                        isChinese
                                            ? "嵌铜石榴喜鹊纹笔筒"
                                            : "Inlaid Copper Brush Pot with Pomegranate and Magpie Motif"
                                    }
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/images/collection/collection5-detail1.jpg"
                                        alt="Detail 1"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <img
                                        src="/images/collection/collection5-detail2.jpg"
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
                                            ? "笔筒为文房四宝之一，自古为文人案头常设之物。此件嵌铜石榴喜鹊纹笔筒约制于清末民初，工艺精湛，造型端整，延续了传统锡器装饰技法的典雅气韵。其制式规整、色泽温润，体现出晚清至民国时期文人用器的审美取向与生活格调。"
                                            : "The brush pot, one of the essential tools of the scholar’s studio, dates from the late Qing to early Republic period. It reflects refined craftsmanship and literati taste, embodying elegance and quiet order in both form and polish."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "工艺技艺" : "Craftsmanship"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "笔筒以精炼锡铸造，表面经细致打磨与抛光，光泽柔亮如银。器身装饰以嵌铜工艺完成，工匠先錾出纹样轮廓，再嵌入薄铜片，经锤合、磨平与抛光，使纹饰与器身浑然一体。嵌铜线条流畅、色泽温和，于银白锡质之上映出细腻的金属层次。"
                                            : "Crafted from fine polished tin, the motifs are achieved through copper inlay: outlines are chiseled, thin copper sheets embedded, hammered, and polished flush. The warm copper tones contrast elegantly with the cool silver-gray surface."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "造型特点" : "Design Features"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "器身高约十二厘米，比例修长，口沿微外撇，下承圈足。筒壁环饰石榴与喜鹊纹样，寓意“喜上眉梢，硕果盈枝”。花枝舒展，喜鹊生动，构图饱满而不繁冗。"
                                            : "Standing about 12 cm tall with flared rim and circular base, the brush pot features magpies and pomegranates symbolizing 'joy upon joy'. Its composition is balanced, lively, and refined, with warm copper glow over cool tin."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "艺术价值" : "Artistic Value"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "此件嵌铜石榴喜鹊纹笔筒兼具实用与陈设之美，是文房器具中极富文化意味的一类。其工艺展现了传统金属装饰的高超技法，纹饰寄寓吉祥与雅趣，折射出文人阶层以器明志、以物养性的生活理想。"
                                            : "This brush pot exemplifies harmony of use and beauty. It mirrors the literati’s belief in cultivating the self through refined objects—combining superb craftsmanship with symbolic meaning of prosperity and joy."}
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
            <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-3 animate-float">
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
        .animate-mist { animation: mistMove 30s ease-in-out infinite alternate; background-size: cover; }

        @keyframes floatBtn {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-float { animation: floatBtn 4s ease-in-out infinite; }
      `}</style>
        </main>
    );
}
