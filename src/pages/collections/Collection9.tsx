import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEOHead from "../../components/SEOHead";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Collection9() {
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
                    customTitle={isChinese ? "国外锡器 - 中国锡器博物馆" : "Overseas Pewter - China Pewter Museum"}
                    customDescription={isChinese ? "展示世界各地锡文化的交流与融合" : "Global pewter aesthetics"}
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
                                    ? "日本 飞鸟纹磨砂瓶"
                                    : "Japanese Matte Tin Vase with Flying Bird Motif"}
                            </h1>
                            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                                {isChinese ? "静寂之光，金工之美" : "Quiet Radiance, Refined Craft"}
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
                                    src="/images/collection/collection9.jpg"
                                    alt={
                                        isChinese
                                            ? "日本 飞鸟纹磨砂瓶"
                                            : "Japanese Matte Tin Vase with Flying Bird Motif"
                                    }
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/images/collection/collection9-detail1.jpg"
                                        alt="Detail 1"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <img
                                        src="/images/collection/collection9-detail2.jpg"
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
                                {/* 历史背景 */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "历史背景" : "Historical Background"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "此瓶约制于二十世纪上半叶，是日本近代金工艺术中以飞鸟为题的代表作品之一。明治维新后，日本金属工艺在吸收西方金属冶炼与表面处理技术的同时，延续了传统金银错嵌与雕金技法，形成了既古雅又现代的独特审美体系。飞鸟纹题材源于古代祥瑞文化，象征高洁、自由与升华之意。"
                                            : "Created in early 20th-century Japan, this vase exemplifies modern Japanese metalwork. After the Meiji Restoration, Japanese artisans integrated Western metallurgy with traditional inlay and chiseling techniques, forming a unique balance between modernity and classic refinement. The flying bird motif, drawn from auspicious iconography, symbolizes freedom and transcendence."}
                                    </p>
                                </div>

                                {/* 工艺技艺 */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "工艺技艺" : "Craftsmanship"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "瓶身以锡为主材，辅以铜、银、金合金细饰，采用磨砂与嵌金工艺。工匠先以砂磨抛光表面，使之呈现柔和雾面质感，再以錾刻刻出飞鸟与花枝纹样，嵌入金银线以衬动势。金翼闪烁，银羽轻敛，于灰雾色地间流动出静与动的诗意。"
                                            : "Crafted primarily in tin with copper, silver, and gold inlays, the surface is sand-polished to achieve a soft matte glow. The bird and floral designs are then chiseled and inlaid with gold and silver, creating delicate highlights that capture both stillness and motion—a harmony of precision and restraint."}
                                    </p>
                                </div>

                                {/* 造型特点 */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "造型特点" : "Design Features"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "瓶体浑圆，肩部微收，颈口简洁。中段环饰飞鸟纹带，构图疏密有致，飞鸟展翅于花枝之间，羽势灵动。整体线条纯净，比例匀称，体现日本工艺美学中“留白”与“克制”的精神。"
                                            : "The form is rounded and well-proportioned, with a narrow neck and balanced shoulder. A flying bird frieze encircles the body, its wings poised among blooming branches. The composition embodies the Japanese concept of 'ma'—beauty in balance and restraint."}
                                    </p>
                                </div>

                                {/* 艺术价值 */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "艺术价值" : "Artistic Value"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "此瓶将东方金工传统与现代审美理念融为一体，展现了金属材料在光泽、质感与造型上的表现力。飞鸟象征自由与生机，而磨砂质地营造出时间沉静的气息，形成视觉与精神的对比。它不仅是一件金属器物，更是一种关于寂静与生命的艺术表达。"
                                            : "This vase bridges traditional Eastern craft and modern design, exploring how metal embodies light, texture, and form. The contrast between the bird’s vitality and the vase’s quiet matte finish turns the object into a meditation on movement, silence, and time."}
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
        @keyframes glowMove1{0%,100%{transform:translate(0,0);}50%{transform:translate(30px,-20px);}}
        @keyframes glowMove2{0%,100%{transform:translate(0,0);}50%{transform:translate(-40px,25px);}}
        @keyframes glowMove3{0%,100%{transform:translate(0,0);}50%{transform:translate(20px,30px);}}
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
