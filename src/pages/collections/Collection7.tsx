import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Collection7() {
    const [isChinese, setIsChinese] = useState(true);
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
                <Navbar
                    isChinese={isChinese}
                    onLanguageToggle={() => setIsChinese(!isChinese)}
                />

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
                                    ? "錾花三足鼎式香炉"
                                    : "Fine-Engraved Tripod Incense Burner"}
                            </h1>
                            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                                {isChinese
                                    ? "清雅鼎形，花鸟满工"
                                    : "Grace in Form, Harmony in Craft"}
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
                                    src="/images/collection/collection7.jpg"
                                    alt={
                                        isChinese
                                            ? "錾花三足鼎式香炉"
                                            : "Fine-Engraved Tripod Incense Burner"
                                    }
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/images/collection/collection7-detail1.jpg"
                                        alt="Detail 1"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <img
                                        src="/images/collection/collection7-detail2.jpg"
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
                                            ? "香炉为中国传统器具中最具文化象征的种类之一，常见于书斋、佛堂及闺房空间，用以焚香静心、清气怡神。此件錾花三足鼎式香炉约制于清末民初，承袭明清金属香具之制，同时融入地方工艺师的创新理念，呈现出庄重而富文人气息的器物风格。"
                                            : "The incense burner occupies a central role in Chinese ritual and domestic culture, symbolizing purity and contemplation. This fine-engraved tripod incense burner from the late Qing to early Republic era merges traditional ritual form with local innovation, combining solemnity and refined taste."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "工艺技艺" : "Craftsmanship"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "炉体以精炼锡铸造，三足承鼎，双耳对称。通体满工錾花，工匠以细錾描绘花卉与鸟雀纹样，布局匀整。花瓣以点錾衬地，叶脉与羽翎刻画细腻，金属表面经打磨抛光后泛出柔和银光。口沿饰铜包边，既增强强度，又增色层次。"
                                            : "The burner is cast in refined tin with three beast-form legs and paired loop handles. Its surface is covered in finely chiseled floral and bird patterns, with petals and feathers detailed through dotted background engraving. A copper-edged rim enhances both durability and contrast."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "造型特点" : "Design Features"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "器形仿古鼎式，口大腹深，三足呈兽首状，稳重端庄。双侧环耳便于提携，比例匀称。纹饰以花鸟为主，辅以卷草、蜂巢地纹相衬，寓意花开富贵、岁岁平安。"
                                            : "Modeled after ancient bronze tripods, the vessel features a wide mouth, deep belly, and three sturdy animal-head legs. Its decorative frieze of flowers and birds symbolizes prosperity and peace, blending elegance with function."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "艺术价值" : "Artistic Value"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "此香炉体现了晚清至民初锡器工艺中“以古为新”的审美取向。其錾刻细腻，构图饱满，既保留传统礼器的端庄格调，又呈现生活化的温度。作为文人案头与香道空间的常用器具，它不仅是嗅觉与仪式之器，更是修身与静心的媒介。"
                                            : "This incense burner captures the late Qing ideal of 'renewing the ancient.' Its delicate engraving and balanced design bridge ritual dignity and domestic warmth, embodying the literati spirit of refinement and quiet introspection."}
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
                    onClick={() => navigate("/")}
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
