import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEOHead from "../../components/SEOHead";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Collection8() {
    const { isZh } = useLanguage();
    const isChinese = isZh;
    const navigate = useNavigate();

    return (
        <main className="relative min-h-screen font-sans text-white overflow-hidden bg-gradient-to-b from-gray-800 via-gray-700 to-gray-500">
            {/* ✨ 背景光晕层 */}
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
                    customTitle={isChinese ? "雕像 饰件 花瓶 烟具 - 中国锡器博物馆" : "Sculptures & Decorative Pewter - China Pewter Museum"}
                    customDescription={isChinese ? "从雕像到饰件，锡以柔韧之性塑造生命之美" : "Pewter conveys artistry and remembrance"}
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
                                {isChinese ? "仙鹤立像锡雕" : "Standing Tin Sculpture of a Crane"}
                            </h1>
                            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                                {isChinese ? "祥瑞长生，雅器生辉" : "Auspicious Elegance in Form and Spirit"}
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
                                    src="/images/collection/collection8.jpg"
                                    alt={isChinese ? "仙鹤立像锡雕" : "Standing Tin Sculpture of a Crane"}
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/images/collection/collection8-detail1.jpg"
                                        alt="Detail 1"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <img
                                        src="/images/collection/collection8-detail2.jpg"
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
                                            ? "仙鹤自古为中国文化中象征高洁、长寿与祥瑞的灵禽，常见于宫廷陈设与文人雅玩。此件仙鹤立像锡雕约制于清末民初，是锡艺由实用器向陈设艺术演进的代表之作。它体现了晚清工艺师在吸收传统造像法则的基础上，对动物形象塑造与工艺表现的高度掌握。"
                                            : "In Chinese culture, the crane symbolizes purity, longevity, and auspicious blessing. This tin sculpture from the late Qing to early Republic era represents the evolution of pewter art from utility to ornament, showing artisans’ mastery in both sculptural expression and technical precision."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "工艺技艺" : "Craftsmanship"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "全器以精炼锡铸造，辅以錾刻、嵌饰与焊接工艺完成。鹤首红冠，双目嵌蓝玻璃珠，羽翼与颈部以细錾线勾勒羽纹，层次分明。鹤身挺立于八角台座之上，台面围以栏杆，红柱与银灰相映成趣。整体结构协调、比例匀称，细部打磨极为精致。"
                                            : "Cast in fine tin and finished with chiseling, inlay, and soldering, the crane features a red crown and blue glass eyes. Fine engraved feather lines accentuate rhythm and light. The octagonal pedestal with red posts and silver-gray tone forms a harmonious, balanced composition."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "造型特点" : "Design Features"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "鹤体修长，颈部微弯，双喙微启，神态生动。羽毛错落有致，金属光泽与形体韵律相得益彰。八角台座象征方圆并合，寓意天地和谐。整体造型既具礼器之庄重，又有陈设之优雅。"
                                            : "The crane’s curving neck and poised stance exude grace and vitality. Layered plumage interacts with light, creating rhythm and balance. The octagonal base symbolizes harmony of heaven and earth, combining ritual dignity with decorative refinement."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "艺术价值" : "Artistic Value"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "此件仙鹤立像将象征性与装饰性完美结合，体现了中国传统文化中“以形寓意、以器载道”的美学精神。作为锡器艺术向雕塑领域延伸的典范之作，它不仅承载祈寿纳福的文化意涵，更见证了锡艺从日常实用走向艺术表现的历史进程。"
                                            : "This sculpture perfectly integrates symbolism and form, embodying the Chinese aesthetic ideal of 'expressing virtue through shape.' As a milestone in pewter art’s transition toward sculpture, it reflects both cultural blessing and artistic maturity."}
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
        @keyframes glowMove1 { 0%,100%{transform:translate(0,0);}50%{transform:translate(30px,-20px);} }
        @keyframes glowMove2 { 0%,100%{transform:translate(0,0);}50%{transform:translate(-40px,25px);} }
        @keyframes glowMove3 { 0%,100%{transform:translate(0,0);}50%{transform:translate(20px,30px);} }
        .animate-glow1{animation:glowMove1 14s ease-in-out infinite alternate;}
        .animate-glow2{animation:glowMove2 18s ease-in-out infinite alternate;}
        .animate-glow3{animation:glowMove3 22s ease-in-out infinite alternate;}
        @keyframes mistMove{0%{transform:translate(0,0) scale(1);opacity:0.25;}50%{transform:translate(20px,-15px) scale(1.05);opacity:0.35;}100%{transform:translate(-10px,10px) scale(1);opacity:0.25;}}
        .animate-mist{animation:mistMove 30s ease-in-out infinite alternate;background-size:cover;}
        @keyframes floatBtn{0%,100%{transform:translateY(0);}50%{transform:translateY(-4px);}}
        .animate-float{animation:floatBtn 4s ease-in-out infinite;}
      `}</style>
        </main>
    );
}
