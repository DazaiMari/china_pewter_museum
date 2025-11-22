import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEOHead from "../../components/SEOHead";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Collection3() {
    const { isZh } = useLanguage();
    const isChinese = isZh;
    const navigate = useNavigate();

    return (
        <main className="relative min-h-screen font-sans text-white overflow-hidden bg-gradient-to-b from-gray-800 via-gray-700 to-gray-500">
            {/* ✨ 背景光泽层 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_70%)] animate-glow1"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(180,220,255,0.12),transparent_70%)] animate-glow2"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_75%)] animate-glow3"></div>
            </div>

            {/* 🌫️ 展厅薄雾层 */}
            <div className="absolute inset-0 bg-[url('/images/mist-texture.png')] opacity-25 mix-blend-screen animate-mist"></div>

            {/* ✅ 内容层 */}
            <div className="relative z-10">
                <SEOHead 
                    customTitle={isChinese ? "锡酒具 - 中国锡器博物馆" : "Pewter Wine Vessels - China Pewter Museum"}
                    customDescription={isChinese ? "温润如玉的锡酒器，凝结古人待客的礼节与风雅" : "Pewter wine vessels capture the elegance of gatherings"}
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
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 hover:text-[#bde0fe] transition-colors duration-500">
                                {isChinese
                                    ? "錾花墨玉提梁鱼形锡酒壶"
                                    : "Engraved Pewter Wine Ewer with Jade Handle in the Shape of a Fish"}
                            </h1>
                            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                                {isChinese
                                    ? "造型生动，寓意吉祥，锡艺与雕饰的完美结合"
                                    : "Lively form and auspicious meaning — a perfect harmony of metalcraft and artistry"}
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
                                    src="/images/collection/collection3.jpg"
                                    alt={
                                        isChinese
                                            ? "錾花墨玉提梁鱼形锡酒壶"
                                            : "Engraved Pewter Wine Ewer with Jade Handle in the Shape of a Fish"
                                    }
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/images/collection/collection3-detail1.jpg"
                                        alt="Detail 1"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <img
                                        src="/images/collection/collection3-detail2.jpg"
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
                                            ? "鱼形锡酒壶盛行于清末至民国时期，是锡器造型艺术中的代表作之一。此类器物多为民间匠人精工手作，兼具实用与观赏功能，鱼在中国传统文化中象征富足与吉庆，“鱼跃有余”寓意生活丰盈安泰，反映了当时社会的美好愿景与审美趣味。"
                                            : "Fish-shaped pewter wine ewers became popular from the late Qing Dynasty to the Republic period, representing a distinctive form of pewter artistry. Handcrafted by local artisans, the fish symbolizes abundance and prosperity—reflecting both optimism and refined taste in daily life."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "工艺技艺" : "Craftsmanship"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "壶身以优质锡铸造，通体錾刻鱼鳞、波纹与卷云纹饰，工艺细腻严谨，鳞片层次分明、线条流畅。鱼眼嵌红玛瑙珠，晶莹温润，令器物更具神采。提梁以墨玉雕制，两端嵌接锡质件，坚固而富质感。壶盖置于鱼身上方，与背鳍造型自然衔接，结构稳妥。整体经多道錾刻、打磨与抛光工序完成，金属光泽柔和，手工质感丰富。"
                                            : "The body is cast in pewter, finely engraved with scales, waves, and cloud motifs. The eyes are inlaid with red agate, and the handle carved from black jade. Its lid seamlessly integrates into the fish’s back fin, combining elegance and precision."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "造型特点" : "Design Features"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "整器以鲤鱼为形，壶首为流，鱼腹饱满，鱼尾高翘作装饰。提梁弯曲自然，配合墨玉质地，呈现古雅之韵。壶底刻有波浪纹饰，与鱼身呼应，寓意“游于清波、丰年有余”。整体比例匀称，构思巧妙，写实中见装饰美。"
                                            : "The vessel takes the form of a carp: the mouth forms the spout, the full body the chamber, and the arched tail a flourish. The jade handle adds contrast, while wave patterns on the base echo the fish’s motion and vitality."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "艺术价值" : "Artistic Value"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "此件錾花墨玉提梁鱼形锡酒壶兼具民间艺术的灵动与金属工艺的精致，是清末民初锡艺创新的代表之作。其造型寓意吉祥，工艺繁复细腻，展现出中国传统手工艺“以形寓意、以器载道”的精神内涵。"
                                            : "This engraved pewter wine ewer embodies the union of liveliness and precision, expressing the Chinese principle of 'form as meaning'. It stands as a symbol of late Qing metal artistry and folk craftsmanship."}
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
        .animate-mist {
          animation: mistMove 30s ease-in-out infinite alternate;
          background-size: cover;
        }

        @keyframes floatBtn {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-float {
          animation: floatBtn 4s ease-in-out infinite;
        }
      `}</style>
        </main>
    );
}
