import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEOHead from "../../components/SEOHead";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Collection4() {
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
                            ? "闺房用具 - 中国锡器博物馆"
                            : "Boudoir Utensils - China Pewter Museum"
                    }
                    customDescription={
                        isChinese
                            ? "精巧雅致，寄寓生活情趣与东方审美的温柔格调"
                            : "Delicate and refined, reflecting domestic elegance"
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
                                    ? "錾花点铜喜字妆奁"
                                    : "Engraved Pewter Boudoir Casket with Copper-Infused Alloy and “Double Happiness” Motif"}
                            </h1>
                            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                                {isChinese
                                    ? "工巧华丽，凝聚闺阁生活的温婉与诗意"
                                    : "Refined craftsmanship and symbolic beauty — a gentle reflection of feminine elegance"}
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
                                    src="/images/collection/collection4.jpg"
                                    alt={
                                        isChinese
                                            ? "錾花点铜喜字妆奁"
                                            : "Engraved Pewter Boudoir Casket with Copper-Infused Alloy and Double Happiness Motif"
                                    }
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/images/collection/collection4-detail1.jpg"
                                        alt="Detail 1"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <img
                                        src="/images/collection/collection4-detail2.jpg"
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
                                            ? "妆奁为古代闺阁女子日常所用之器，亦为出嫁嫁妆的重要组成部分。此件錾花点铜喜字妆奁约制于清末至民国时期，体量虽小，却体现了当时金属工艺的精湛与审美的讲究。造型规整、纹饰繁丽，寓意吉庆圆满，是近代闺房用具中极具代表性的精品。"
                                            : "Boudoir caskets were essential daily and dowry items for women in traditional Chinese households. This engraved pewter casket, dating from the late Qing to early Republican era, reflects refined craftsmanship and auspicious symbolism in domestic artistry."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "工艺技艺" : "Craftsmanship"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "奁体以点铜锡合金铸造，工匠在炼锡过程中加入适量铜质，使材质更为坚实耐磨，并呈现柔润光泽。通体錾刻缠枝花卉与喜字纹饰，线条细密流畅。盖内嵌镜一面，启合灵活。整体经錾刻、打磨、抛光等多道工序完成，兼具坚固与精致，体现出传统金属工艺的高水准。"
                                            : "Made from a copper-infused pewter alloy for enhanced durability and subtle sheen, its surface is intricately engraved with floral scrolls and Double Happiness motifs. A mirror is inset inside the lid, perfectly fitted, combining functionality and elegance."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "造型特点" : "Design Features"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "妆奁呈长方形，正面设抽屉并配铜锁。盖面以“喜”字为中心，四周环饰蝙蝠与缠枝花卉，寓意福至双喜。整体对称匀称，线条流畅，展现出闺阁器物特有的温婉秩序与装饰之美。"
                                            : "The rectangular casket features a front drawer and brass lock. Its lid centers the Double Happiness character, surrounded by bats and floral scrolls symbolizing blessings and joy. Balanced symmetry and refined lines define its aesthetic harmony."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "艺术价值" : "Artistic Value"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "此件錾花点铜喜字妆奁兼具材质创新与文化象征的双重价值。合金技术提升了锡器的实用性能，而纹饰设计则融入了吉祥文化与女性审美意趣，堪为清末民初闺房用具的代表之作。"
                                            : "This casket unites material innovation with cultural symbolism. Its alloy technique strengthened pewter, while the auspicious motifs reveal feminine aesthetics — a delicate reflection of domestic artistry and social ideals of its time."}
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

            {/* 🔙 返回 / 主页 按钮 */}
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
