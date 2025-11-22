import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SEOHead from "../../components/SEOHead";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Collection2() {
    const { isZh } = useLanguage();
    const isChinese = isZh;
    const navigate = useNavigate();

    return (
        <main className="relative min-h-screen font-sans text-white overflow-hidden">
            {/* 🌌 苹果夜空 + 流星背景 */}
            <div className="absolute inset-0 overflow-hidden">
                {/* 深蓝渐变背景 */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b] via-[#1c2541] to-[#3a506b]" />

                {/* 星点层 */}
                <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:2px_2px] opacity-30 animate-twinkle" />

                {/* 柔光漂浮层 */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_70%)] animate-skyGlow" />

                {/* 🌠 流星层 */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="shooting-star" />
                    <div className="shooting-star delay-2" />
                    <div className="shooting-star delay-4" />
                </div>
            </div>

            {/* ✅ 内容层 */}
            <div className="relative z-10">
                <SEOHead 
                    customTitle={isChinese ? "威海卫紫砂锡镶壶 - 中国锡器博物馆" : "Pewter-Inlaid Yixing Teapot of Weihaiwei - China Pewter Museum"}
                    customDescription={isChinese ? "紫砂温润，锡饰生辉，地方工艺臻于化境" : "The warmth of clay meets the brilliance of pewter — craftsmanship at its finest"}
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
                                    ? "威海卫紫砂锡镶壶"
                                    : "Pewter-Inlaid Yixing Teapot of Weihaiwei"}
                            </h1>
                            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                                {isChinese
                                    ? "紫砂温润，锡饰生辉，地方工艺臻于化境"
                                    : "The warmth of clay meets the brilliance of pewter — craftsmanship at its finest"}
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
                                    src="/images/collection/collection2.jpg"
                                    alt={
                                        isChinese
                                            ? "威海卫紫砂锡镶壶"
                                            : "Pewter-Inlaid Yixing Teapot of Weihaiwei"
                                    }
                                    className="w-full rounded-lg shadow-2xl"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        src="/images/collection/collection2-detail1.jpg"
                                        alt="Dragon Detail"
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <img
                                        src="/images/collection/collection2-detail2.jpg"
                                        alt="Pattern Detail"
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
                                            ? "威海卫紫砂锡镶壶兴起于十九世纪末至二十世纪初，源于当时的租界贸易与工艺创新的活跃。当地产匠人结合紫砂与锡雕装饰技艺，创制出外覆金属纹饰的壶具。二十世纪二三十年代，威海卫锡镶业达到鼎盛，作坊林立，产品远销海外，成为中国北方金属工艺的重要代表。"
                                            : "The pewter-inlaid Yixing teapot of Weihaiwei emerged in the late 19th to early 20th century, a period marked by vibrant trade and artisanal innovation in the leased territory. Local craftsmen combined traditional Yixing clay techniques with decorative pewter craftsmanship to create teapots adorned with metal reliefs. By the 1920s and 1930s, the pewter-inlay industry in Weihaiwei had reached its peak, exporting its works across Asia and Europe as a hallmark of northern Chinese metal artistry."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "工艺技艺" : "Craftsmanship"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "壶体以宜兴紫砂烧制而成，外层包镶精錾锡片，装饰以双龙纹、花鸟纹、寿字纹等图案。工匠采用“倒龙”“整龙”“镶龙”等技法，将龙形模片翻铸后錾刻打磨，再嵌焊于壶体之上，线条遒劲、鳞纹细腻。部分作品辅以鎏银、嵌铜，质感丰富。锡片经手工抛光后，呈现柔亮金属光泽，与紫砂本色相映成趣。"
                                            : "The teapot body is crafted from fine Yixing clay, overlaid with intricately engraved pewter sheets depicting dragons, birds, floral motifs, and longevity characters. Craftsmen employed techniques such as inverted casting, joined inlay, and welded reliefs, refining the dragon forms through engraving and hammer-polishing before fusing them onto the clay body. Some pieces were further adorned with silver or copper accents, their lustrous pewter surfaces shimmering elegantly against the clay’s natural warmth."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "造型特点" : "Design Features"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "壶形圆润端稳，短流圆口，铜质提梁坚实。双龙盘绕壶身，神态生动，象征祥瑞与尊贵。整体比例匀称，层次分明，兼具陈设美感与观赏价值。壶底常刻有“威海和成锡店”或“威海和成监制”款识，为地方名坊的典型印记。"
                                            : "The teapot’s rounded form, short spout, and solid brass handle convey balance and strength. Twin dragons coil dynamically around the vessel, symbolizing prosperity and nobility. Its proportions are harmonious and layered, combining function and artistry. Inscriptions such as 'Hecheng Pewter Shop, Weihai' mark the signature of renowned workshops."}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-[#cce7ff]">
                                        {isChinese ? "艺术价值" : "Artistic Value"}
                                    </h2>
                                    <p className="text-gray-200 leading-relaxed">
                                        {isChinese
                                            ? "威海卫紫砂锡镶壶以装饰性金属工艺为核心，展现了地方匠人对传统图案语言的再创造与艺术化表达。它不仅反映了近代威海卫地区手工产业的繁荣，也见证了中国金属工艺在装饰性方向上的高度成就，具有重要的历史与艺术研究价值。"
                                            : "This work represents the fusion of Yixing pottery and northern pewter craftsmanship, embodying a dialogue between clay and metal. Its ornate motifs reflect not only technical mastery but also the creative adaptation of traditional Chinese symbolism into decorative art, offering invaluable insight into early twentieth-century craftsmanship."}
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
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.6; }
                }
                .animate-twinkle {
                    animation: twinkle 3s ease-in-out infinite alternate;
                }

                @keyframes skyGlow {
                    0%, 100% { transform: translate(0,0); opacity: 0.15; }
                    50% { transform: translate(10px, -5px); opacity: 0.25; }
                }
                .animate-skyGlow {
                    animation: skyGlow 20s ease-in-out infinite alternate;
                }

                .shooting-star {
                    position: absolute;
                    top: -10%;
                    left: 60%;
                    width: 2px;
                    height: 80px;
                    background: linear-gradient(45deg, rgba(255,255,255,0.9), transparent);
                    opacity: 0;
                    transform: rotate(45deg);
                    animation: shooting 8s linear infinite;
                }

                .shooting-star.delay-2 { animation-delay: 2s; left: 40%; }
                .shooting-star.delay-4 { animation-delay: 4s; left: 75%; }

                @keyframes shooting {
                    0% { opacity: 0; transform: translate(0,0) rotate(45deg); }
                    5% { opacity: 1; }
                    20% { transform: translate(-200px, 200px) rotate(45deg); opacity: 0.5; }
                    30%, 100% { opacity: 0; transform: translate(-200px, 200px) rotate(45deg); }
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


