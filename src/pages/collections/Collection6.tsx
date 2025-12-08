import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEOHead from "../../components/SEOHead";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Collection6() {
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
                            ? "照明用具 - 中国锡器博物馆"
                            : "Lighting Ware - China Pewter Museum"
                    }
                    customDescription={
                        isChinese
                            ? "烛台灯具，映照古人的审美与生活之光"
                            : "Candleholders illuminating culture"
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
                                {isChinese ? "满工錾花蚊灯" : "Fine-Engraved Tin Mosquito Lamp"}
                            </h1>
                            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                                {isChinese
                                    ? "匠心造形，照明之外的生活智慧"
                                    : "A Subtle Union of Function and Grace"}
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
                                    src="/images/collection/collection6.jpg"
                                    alt={
                                        isChinese
                                            ? "满工錾花蚊灯"
                                            : "Fine-Engraved Tin Mosquito Lamp"
                                    }
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/images/collection/collection6-detail1.jpg"
                                        alt="Detail 1"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <img
                                        src="/images/collection/collection6-detail2.jpg"
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
                                            ? "蚊灯流行于清代，是古人夏夜常用的防蚊照明器具。此件满工錾花蚊灯约制于清末民初，造型独特，兼具实用与装饰价值。它体现了古代民居生活中“以器成理”的生活智慧：灯不止为照明之具，更寄寓对安宁与洁净生活的追求。"
                                            : "Mosquito lamps were popular during the Qing and early Republican eras. This finely engraved tin lamp blends practicality with ornament, reflecting the domestic wisdom of 'finding beauty through function' in traditional life."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "工艺技艺" : "Craftsmanship"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "蚊灯以精炼锡铸成，通体满工錾花。工匠以细錾描绘花卉与卷草纹饰，线条柔密、层次分明，打磨后银光内敛。灯体呈葫芦形，上下以圈足与灯口呼应，侧设喇叭口状通气窗，背后置提柄。"
                                            : "Made from refined tin, fully decorated with floral and scroll motifs, each chisel stroke forms layered textures. Its gourd form features a flared vent and back handle, combining utility and elegance."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "造型特点" : "Design Features"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "器身高约10.5厘米，比例匀称。灯体圆润饱满，喇叭口与提柄平衡成趣，錾刻花纹繁复细致，呈现出晚清锡器工艺的高峰水准。"
                                            : "Standing 10.5 cm tall, the lamp’s body is compact yet graceful. The flaring vent and curved handle form visual rhythm, while the intricate full-body engraving embodies late Qing metal artistry."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "艺术价值" : "Artistic Value"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "满工錾花蚊灯不仅是一件生活器物，更是匠人审美与智慧的结晶。它体现了中国古代器物中“以用见美”的设计哲学，也折射出传统工艺中对生活细节的体贴关怀。"
                                            : "This lamp is both a functional object and an artistic creation, embodying the Chinese philosophy of 'beauty through utility'. It reflects artisans’ refined aesthetics and the harmony between design and daily life."}
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
