import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../contexts/LanguageContext";

// --- Helper Components for the Museum UI ---

function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
    return (
        <div className="mt-24 mb-12 text-center">
            <span className="block text-red-700/60 font-museum-title text-4xl opacity-30 mb-2">{number}</span>
            <h2 className="text-3xl font-museum-title text-white uppercase tracking-widest mb-3">
                {title}
            </h2>
            <div className="w-12 h-[2px] bg-red-600/40 mx-auto mb-4"></div>
            <p className="font-museum-serif text-gray-400 italic">
                {subtitle}
            </p>
        </div>
    );
}

function MissionCard({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="text-center p-4">
            <div className="w-2 h-2 bg-red-600 mx-auto mb-3 rotate-45"></div>
            <h4 className="text-white font-museum-title uppercase tracking-wider mb-2 text-sm">{title}</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">{desc}</p>
        </div>
    );
}

function TianItem({ enTitle, zhTitle, desc }: { enTitle: string; zhTitle: string; desc: string }) {
    return (
        <div className="flex flex-col md:flex-row items-baseline border-b border-white/5 pb-8 group hover:bg-white/[0.02] transition-colors p-4 rounded-lg">
            <div className="md:w-1/4 mb-2 md:mb-0">
                <span className="block text-2xl text-red-500 font-museum-title mb-1">{zhTitle}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors">{enTitle}</span>
            </div>
            <div className="md:w-3/4">
                <p className="text-gray-300 font-light leading-7">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default function CulturaAI() {
    const { isZh } = useLanguage();
    const isChinese = isZh;
    const navigate = useNavigate();

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    const sectionVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
    };

    return (
        <main className="relative min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden selection:bg-red-900 selection:text-white">
            {/* Inject Google Fonts */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Lato:wght@300;400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
                    
                    .font-museum-title { font-family: 'Cinzel', serif; }
                    .font-museum-serif { font-family: 'Playfair Display', serif; }
                    .font-museum-body { font-family: 'Lato', sans-serif; }
                `}
            </style>

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="relative z-10">
                <SEOHead
                    customTitle={
                        isChinese
                            ? "CulturaAI - 天系美学 - 博物馆典藏"
                            : "CulturaAI - Tian Aesthetics - Museum Collection"
                    }
                    customDescription={
                        isChinese
                            ? "天系美学：跨文明大模型美学体系"
                            : "Tian Aesthetics: A cross-civilizational aesthetic framework"
                    }
                />
                <Navbar />

                {/* Hero / Header Section */}
                <header className="pt-32 pb-16 px-6 text-center border-b border-white/10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="max-w-5xl mx-auto"
                    >
                        <span className="inline-block mb-4 text-red-400/80 tracking-[0.3em] text-xs uppercase font-museum-body font-bold">
                            {isChinese ? "展览 / 哲学 / 科技" : "EXHIBITION / PHILOSOPHY / TECH"}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-museum-title font-normal leading-tight tracking-wide text-white mb-8">
                            {isChinese ? "天系美学" : "Tian Aesthetics"}
                        </h1>
                        <div className="w-24 h-[1px] bg-red-500/50 mx-auto mb-8"></div>
                        <p className="text-lg md:text-xl font-museum-serif italic text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            {isChinese
                                ? "为博物馆而生的跨文明大模型美学体系"
                                : "A Cross-Civilizational Aesthetic Framework for Museums"}
                        </p>
                    </motion.div>
                </header>

                {/* Article Content */}
                <article className="max-w-3xl mx-auto px-6 md:px-12 py-20 font-museum-body">
                    
                    {/* Introduction Block */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariant}
                        className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6 leading-8"
                    >
                            {isChinese ? (
                                <>
                                <p className="first-letter:text-5xl first-letter:font-museum-title first-letter:text-red-500 first-letter:mr-3 first-letter:float-left">
                                    在今日之世，节奏渐快，注意力渐短，人们与文化的距离正在悄然拉开。
                                    器物仍在博物馆静静伫立，但理解它们的方式，却在逐渐被遗忘。
                                </p>
                                <p>
                                    面对青铜器，人们看到纹样，却不了解其生长逻辑。
                                    面对玉石，人们看到光泽，却难进入其象学世界。
                                    面对陶瓷、书画、造像，人们常有直觉，却难以言说。
                                </p>
                                <blockquote className="border-l-2 border-red-700/40 pl-6 italic text-gray-400 font-museum-serif my-8">
                                    "文化像被罩上一层薄雾，看得见，却摸不着。人工智能能够识别，却很难真正理解。"
                                </blockquote>
                                <p>
                                    在这样的背景下，徐鹏林与徐念禾在构建 CulturaAI 大模型过程中提出了<span className="text-red-200 font-semibold">"天系美学"（五天论）</span>。
                                    它是一套跨文明的解释语言，一套可让大模型学习的审美结构，一套能让参观者与器物建立个人连接的认知路径。
                                </p>
                                <p className="text-center font-museum-title text-xl text-white mt-8 border-t border-b border-white/5 py-6">
                                    天系美学，就是博物馆、人工智能与人类理解能力之间的桥梁。
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="first-letter:text-5xl first-letter:font-museum-title first-letter:text-red-500 first-letter:mr-3 first-letter:float-left">
                                    In today's world, pace quickens and attention spans shorten—people and culture drift quietly apart.
                                    Artifacts remain still in museums, yet the ways to understand them are gradually being forgotten.
                                </p>
                                <p>
                                    Before bronzes, people see patterns but do not grasp their logic of formation.
                                    Before jade, people see luster but struggle to enter its symbolic world.
                                </p>
                                <blockquote className="border-l-2 border-red-700/40 pl-6 italic text-gray-400 font-museum-serif my-8">
                                    "Culture is like a thin mist—visible, yet intangible. AI can recognize, but struggles to truly understand."
                                </blockquote>
                                <p>
                                    In this context, Penglin Xu and Nianhe Xu proposed <span className="text-red-200 font-semibold">"Tian Aesthetics" (Five Tian Theory)</span> while building the CulturaAI model.
                                    It is a cross-civilizational interpretive language, an aesthetic structure AI can learn.
                                </p>
                                <p className="text-center font-museum-title text-xl text-white mt-8 border-t border-b border-white/5 py-6">
                                    Tian Aesthetics is the bridge between museums, artificial intelligence, and human understanding.
                                </p>
                            </>
                        )}
                    </motion.div>

                    {/* Section 1 */}
                    <SectionTitle 
                        number="01" 
                        title={isChinese ? "思想起点" : "The Origin"} 
                        subtitle={isChinese ? "古典系统的失效与新时代的美学鸿沟" : "The Limits of Classical Systems"}
                    />

                                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                                        viewport={{ once: true }}
                        variants={sectionVariant}
                        className="text-gray-300 leading-relaxed font-light text-lg mb-12"
                    >
                         {isChinese ? (
                            <>
                                <p>
                                    《云林石谱》《素园石谱》等古代赏石典籍，曾为文人提供审美坐标。
                                    "瘦、皱、漏、透""形、质、色、纹"构成了一个精密而优雅的语言系统。
                                    它们准确、讲究，却深深依赖经验、心性与共同文化背景。
                                </p>
                                <p>
                                    然而，当面对现代的画面石与数字图像，这些古典范式开始出现局限。
                                    古人以笔墨观石，今人以影像与算法识像，这两种观看方式属于完全不同的认知体系。
                                </p>
                                <p>
                                    笔墨所建立的是一种以心为度、以象为先的审美过程；
                                    算法所依赖的是一种以数据为基、以特征为先的识别过程。
                                </p>
                                <p>
                                    前者以有限的笔触提炼无限的意象，是从心出发的世界；
                                    后者以密集的像素拆解局部结构，是从算出发的世界。
                                </p>
                                <p>
                                    两者并非古今的差别，而是认知结构的差别——精妙而互不相通。
                                    这道鸿沟，使古典心法与现代智能长期难以对话。
                                </p>
                                <p>
                                    由此，一个新的文化命题出现：
                                    我们需要的不仅是技术，而是一套新的认知操作系统，能在传统文化、现代科学与人工智能之间实现兼容与共振。
                                </p>
                            </>
                         ) : (
                            <>
                                <p>
                                    Ancient stone appreciation texts like <em>Yunlin Shipu</em> and <em>Suyuan Shipu</em> once provided aesthetic coordinates for scholars.
                                    "Thin, wrinkled, perforated, translucent" and "form, quality, color, pattern" formed a precise and elegant linguistic system.
                                    They were accurate and refined, yet deeply dependent on experience, temperament, and shared cultural background.
                                </p>
                                <p>
                                    However, when facing modern pictorial stones and digital images, these classical paradigms began to show limitations.
                                    The ancients observed stones through brushwork; today's viewers use images and algorithms—two completely different cognitive systems.
                                </p>
                                <p>
                                    Brushwork established an aesthetic process centered on mind and image;
                                    Algorithms rely on a recognition process based on data and features.
                                </p>
                                <p>
                                    The former distills infinite imagery from finite strokes—a world starting from the heart;
                                    The latter deconstructs local structures with dense pixels—a world starting from computation.
                                </p>
                                <p>
                                    The difference is not temporal but structural—exquisite yet mutually incomprehensible.
                                    This chasm has long prevented dialogue between classical methods and modern intelligence.
                                </p>
                                <p>
                                    Thus, a new cultural proposition emerges:
                                    What we need is not merely technology, but a new cognitive operating system capable of achieving compatibility and resonance among traditional culture, modern science, and artificial intelligence.
                                </p>
                            </>
                         )}
                    </motion.div>

                    {/* Section 3 */}
                    <SectionTitle 
                        number="03" 
                        title={isChinese ? "重新学习如何\"看\"" : "Relearning How to 'See'"} 
                        subtitle={isChinese ? "天系美学的起点" : "The Starting Point of Tian Aesthetics"}
                    />

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariant}
                        className="text-gray-300 leading-relaxed font-light text-lg mb-12 space-y-4"
                    >
                        {isChinese ? (
                            <>
                                <p>
                                    赏石的最高境界，是人石合一，
                                    通过观石抵达心灵的净化与超脱。
                                    观石的方法，往往映照观世界的方法。
                                </p>
                                <p>
                                    博物馆亦如此。
                                    参观者面对一件器物时，被观看的并非物本身，
                                    而是观看者与文化之间的距离。
                                </p>
                                <p>
                                    天系美学不是创造一种新的美学风格，
                                    而是回应一个时代的核心问题：
                                    在加速与碎片化的世界中，人们如何重新学会理解器物？
                                    人工智能又如何帮助我们恢复这种能力？
                                </p>
                            </>
                        ) : (
                            <>
                                <p>
                                    The highest realm of stone appreciation is unity between person and stone,
                                    reaching spiritual purification and transcendence through observation.
                                    The method of viewing stones often reflects the method of viewing the world.
                                </p>
                                <p>
                                    Museums are similar.
                                    When visitors face an artifact, what is being observed is not the object itself,
                                    but the distance between the viewer and culture.
                                </p>
                                <p>
                                    Tian Aesthetics does not create a new aesthetic style,
                                    but responds to a core question of our time:
                                    In an accelerating and fragmented world, how can people relearn to understand artifacts?
                                    And how can artificial intelligence help us restore this ability?
                                </p>
                            </>
                        )}
                    </motion.div>

                    {/* Image Break 1 - Museum Frame Style */}
                    <div className="my-16 relative group">
                        <div className="absolute inset-0 border border-white/10 transform translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                        <div className="relative z-10 w-full h-64 md:h-96 bg-gray-800 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/images/culturaai/ai1.jpg"
                                            alt="CulturaAI"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const placeholder = target.nextElementSibling as HTMLElement;
                                    if (placeholder) placeholder.style.display = 'flex';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80 z-20 flex flex-col items-center justify-center p-8 text-center border border-white/5" style={{ display: 'none' }}>
                                <span className="font-museum-title text-red-500/50 text-4xl mb-2">✦</span>
                                <p className="font-museum-serif text-gray-500 italic">"Visualizing the Void"</p>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-center text-red-400/70 tracking-widest uppercase font-museum-body">
                            Figure I. The Cognitive Gap
                        </div>
                    </div>

                    {/* Section 2 */}
                    <SectionTitle 
                        number="02" 
                        title={isChinese ? "五天论的诞生" : "Five Tian Theory"} 
                        subtitle={isChinese ? "当哲学与人工智能相遇" : "Philosophy Meets AI"}
                    />

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariant}
                        className="text-gray-300 leading-relaxed font-light text-lg mb-12"
                    >
                        {isChinese ? (
                            <>
                                <p>
                                    "五天论"的出现，并非突发灵感，而是哲学、工程与美学三者的共振。
                                    在研究"如何让 AI 学会欣赏奇石"的过程中，徐鹏林与徐念禾发现：
                                    现有审美体系对机器而言不可读。
                                </p>
                                <p>
                                    东方美学意象深远，难以量化；
                                    西方美学逻辑清晰，却难触及自然造化与心性体验。
                                </p>
                                <p>
                                    于是，他们构建出一套兼具"心之感"与"理之形"的框架，
                                    既能保留东方审美的灵魂，又能让人工智能以结构化方式学习自然之美。
                                </p>
                            </>
                        ) : (
                            <>
                                <p>
                                    "Five Tian Theory" did not emerge from sudden inspiration but from the resonance of philosophy, engineering, and aesthetics.
                                    In researching "how to teach AI to appreciate scholar's rocks," Penglin Xu and Nianhe Xu discovered:
                                    Existing aesthetic systems were unreadable to machines.
                                </p>
                                <p>
                                    Eastern aesthetics, rich in imagery, were difficult to quantify;
                                    Western aesthetics, logically clear, could not touch natural creation and spiritual experience.
                                </p>
                                <p>
                                    Thus, they constructed a framework combining "feeling of the heart" and "form of reason,"
                                    preserving the soul of Eastern aesthetics while enabling AI to learn natural beauty in a structured way.
                                </p>
                            </>
                        )}
                    </motion.div>

                    <div className="bg-gray-800 p-8 border border-white/5 my-8">
                        <p className="text-red-200/90 mb-4 font-museum-serif text-lg italic text-center">
                            {isChinese ? "这一框架自诞生起便承担三重使命" : "This framework was born with a threefold mission"}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <MissionCard 
                                title={isChinese ? "人类可理解" : "Human Comprehensible"}
                                desc={isChinese ? "语言富于意境与情感，延续东方美学的精神性。" : "Language rich in mood and emotion, continuing the spirituality of Eastern aesthetics."}
                            />
                            <MissionCard 
                                title={isChinese ? "机器可解析" : "Machine Parsable"}
                                desc={isChinese ? "结构清晰、逻辑可量化，使算法能够学习、推演与生成。" : "Clear structure and quantifiable logic, enabling algorithms to learn, infer, and generate."}
                            />
                            <MissionCard 
                                title={isChinese ? "自然可对应" : "Nature Correspondent"}
                                desc={isChinese ? "忠实反映造化规律，使审美根植于自然世界本身。" : "Faithfully reflecting the laws of creation, grounding aesthetics in the natural world itself."}
                            />
                        </div>
                    </div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariant}
                        className="text-gray-300 leading-relaxed font-light text-lg mb-12 space-y-4"
                    >
                        {isChinese ? (
                            <>
                                <p>
                                    因此，五天论成为人、机、自然三方之间的桥梁，
                                    是一套介于哲学、艺术与认知科学之间的美学世界语。
                                </p>
                                <p>五天论并非抽象概念，而是一条通向理解之道：</p>
                                <ul className="list-none space-y-2 pl-6">
                                    <li>• 天然，对应道家"道法自然"</li>
                                    <li>• 天赋，对应儒家"各正性命"</li>
                                    <li>• 天工，对应西方形式美学</li>
                                    <li>• 天成，对应康德的"合目的性"</li>
                                    <li>• 天趣，对应禅宗的"明心见性"</li>
                                </ul>
                                <p>它以结构化方式重现了东方"由器入道"的全过程。</p>
                            </>
                        ) : (
                            <>
                                <p>
                                    Therefore, Five Tian Theory becomes a bridge among humans, machines, and nature—
                                    a universal aesthetic language situated between philosophy, art, and cognitive science.
                                </p>
                                <p>Five Tian Theory is not an abstract concept but a path toward understanding:</p>
                                <ul className="list-none space-y-2 pl-6">
                                    <li>• Natural Tian corresponds to Daoist "following nature's way"</li>
                                    <li>• Endowed Tian corresponds to Confucian "each fulfilling their nature"</li>
                                    <li>• Crafted Tian corresponds to Western formal aesthetics</li>
                                    <li>• Unified Tian corresponds to Kant's "purposiveness"</li>
                                    <li>• Resonant Tian corresponds to Zen's "seeing one's true nature"</li>
                                </ul>
                                <p>It systematically recreates the Eastern journey "from objects to the Way."</p>
                            </>
                        )}
                    </motion.div>

                    {/* Section 4 - The Core Five Tian List */}
                    <SectionTitle 
                        number="04" 
                        title={isChinese ? "五天" : "Five Tian"} 
                        subtitle={isChinese ? "从物到心的理解路径" : "A Path from Matter to Mind"}
                    />

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariant}
                        className="text-gray-300 leading-relaxed font-light text-lg mb-12"
                    >
                        {isChinese ? (
                            <p>
                                五天包括天然、天赋、天工、天成、天趣，
                                它们构成由外向内、由物入心的五重路径。
                            </p>
                        ) : (
                            <p>
                                The Five Tian include Natural, Endowed, Crafted, Unified, and Resonant,
                                forming a five-layered path from external to internal, from matter to the heart.
                            </p>
                        )}
                    </motion.div>

                    <div className="space-y-12 mt-12">
                        {/* 天然 */}
                        <div className="border-b border-white/5 pb-8">
                            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-red-400 font-museum-title">
                                {isChinese ? "天然：理解的起点" : "Natural Tian: The Starting Point of Understanding"}
                            </h3>
                            <div className="text-gray-300 font-light leading-7 space-y-2">
                                {isChinese ? (
                                    <>
                                        <p>天然关注对象本真的呈现。</p>
                                        <p>材料、结构、形态、纹理、色层、年代痕迹皆属于天然。</p>
                                        <p className="font-semibold text-white">如实之见，是理解的基础。</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Natural Tian focuses on the authentic presentation of objects.</p>
                                        <p>Materials, structures, forms, textures, color layers, and traces of time all belong to the natural.</p>
                                        <p className="font-semibold text-white">Seeing things as they are is the foundation of understanding.</p>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* 天赋 */}
                        <div className="border-b border-white/5 pb-8">
                            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-red-400 font-museum-title">
                                {isChinese ? "天赋：材料的禀性与潜能" : "Endowed Tian: Material Nature and Potential"}
                            </h3>
                            <div className="text-gray-300 font-light leading-7 space-y-2">
                                {isChinese ? (
                                    <>
                                        <p>天赋关注材料所携带的力量。</p>
                                        <p>玉的润、铜的韧、釉的流动、丝的柔韧、石的肌理、矿物的折光、木纹的走向，
                                        皆构成器物的内在能量。</p>
                                        <p className="font-semibold text-white">材质不是附属，而是意义的根基。</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Endowed Tian concerns the power carried by materials.</p>
                                        <p>The luster of jade, resilience of bronze, flow of glaze, flexibility of silk, texture of stone, refraction of minerals, direction of wood grain—
                                        all constitute the internal energy of artifacts.</p>
                                        <p className="font-semibold text-white">Materials are not accessories but the foundation of meaning.</p>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* 天工 */}
                        <div className="border-b border-white/5 pb-8">
                            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-red-400 font-museum-title">
                                {isChinese ? "天工：形象生成与造化之理" : "Crafted Tian: Image Generation and Creative Logic"}
                            </h3>
                            <div className="text-gray-300 font-light leading-7 space-y-2">
                                {isChinese ? (
                                    <>
                                        <p>天工解释器物为何如此呈现。</p>
                                        <p>纹样的生长、形体的安排、工艺的节奏与结构，都在此层展开。</p>
                                        <p>形非偶然，纹非装饰，比例非随意。</p>
                                        <p className="font-semibold text-white">图像本身就是文化。</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Crafted Tian explains why artifacts appear as they do.</p>
                                        <p>The growth of patterns, arrangement of forms, rhythm and structure of craftsmanship all unfold here.</p>
                                        <p>Form is not accidental, pattern is not mere decoration, proportion is not arbitrary.</p>
                                        <p className="font-semibold text-white">The image itself is culture.</p>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* 天成 */}
                        <div className="border-b border-white/5 pb-8">
                            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-red-400 font-museum-title">
                                {isChinese ? "天成：整体秩序与气韵" : "Unified Tian: Holistic Order and Spirit"}
                            </h3>
                            <div className="text-gray-300 font-light leading-7 space-y-2">
                                {isChinese ? (
                                    <>
                                        <p>天成强调整体性。</p>
                                        <p>重心、平衡、节奏、虚实、光影、气韵、构图完整性，
                                        共同构成器物的生命整体。</p>
                                        <p className="font-semibold text-white">所有部分结合后，气息才能稳定。</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Unified Tian emphasizes wholeness.</p>
                                        <p>Center of gravity, balance, rhythm, void and solid, light and shadow, spirit, compositional integrity—
                                        together they form the living whole of the artifact.</p>
                                        <p className="font-semibold text-white">Only when all parts unite does the spirit stabilize.</p>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* 天趣 */}
                        <div className="border-b border-white/5 pb-8">
                            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-red-400 font-museum-title">
                                {isChinese ? "天趣：共鸣的发生" : "Resonant Tian: The Occurrence of Connection"}
                            </h3>
                            <div className="text-gray-300 font-light leading-7 space-y-2">
                                {isChinese ? (
                                    <>
                                        <p>天趣指向人的内心世界。</p>
                                        <p>器物为何触动我？为何与生命经验产生回响？</p>
                                        <p>此时器物成为镜子，
                                        观者透过器物，看见自己，看见文明，看见生命。</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Resonant Tian points to the inner world of people.</p>
                                        <p>Why does an artifact move me? Why does it resonate with life experience?</p>
                                        <p>At this moment, the artifact becomes a mirror,
                                        through which the viewer sees themselves, sees civilization, sees life.</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <SectionTitle 
                        number="05" 
                        title={isChinese ? "为何属于博物馆" : "Why It Belongs to Museums"} 
                        subtitle={isChinese ? "天系美学的使命" : "The Mission of Tian Aesthetics"}
                    />

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariant}
                        className="text-gray-300 leading-relaxed font-light text-lg mb-12 space-y-4"
                    >
                        {isChinese ? (
                            <>
                                <p>因为它解决了博物馆最核心的难题：</p>
                                <p className="font-semibold text-white">器物如何重新被理解。</p>
                                <p>传统人工智能只能识别，却无法解释：</p>
                                <ul className="list-none space-y-2 pl-6">
                                    <li>• 力量为何从物中散发？</li>
                                    <li>• 气韵为何稳定？</li>
                                    <li>• 情绪为何被触发？</li>
                                    <li>• 文明为何如此呈现？</li>
                                </ul>
                                <p>
                                    天系美学为人工智能提供理解结构，
                                    为参观者提供意义入口。
                                </p>
                            </>
                        ) : (
                            <>
                                <p>Because it addresses museums' most fundamental challenge:</p>
                                <p className="font-semibold text-white">How artifacts can be understood anew.</p>
                                <p>Traditional AI can recognize but cannot explain:</p>
                                <ul className="list-none space-y-2 pl-6">
                                    <li>• Why does power emanate from matter?</li>
                                    <li>• Why does spirit stabilize?</li>
                                    <li>• Why are emotions triggered?</li>
                                    <li>• Why does civilization present itself this way?</li>
                                </ul>
                                <p>
                                    Tian Aesthetics provides AI with a structure for understanding,
                                    and provides visitors with an entry point to meaning.
                                </p>
                            </>
                        )}
                    </motion.div>

                    {/* Section 6 */}
                    <SectionTitle 
                        number="06" 
                        title={isChinese ? "核心价值" : "Core Value"} 
                        subtitle={isChinese ? "让人工智能成为桥梁" : "Making AI a Bridge"}
                    />

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariant}
                        className="text-gray-300 leading-relaxed font-light text-lg mb-12 space-y-4"
                    >
                        {isChinese ? (
                            <>
                                <p>
                                    无结构的人工智能只能识别，
                                    有结构的人工智能才能理解。
                                </p>
                                <p>
                                    基于天系美学，CulturaAI 能够解析材料，理解工艺，读懂构图秩序，
                                    进入气韵空间，甚至尝试生成意义。
                                </p>
                                <p>
                                    当参观者面对一件玉石，人工智能不仅给出类别，
                                    还能解释材料如何形成、力量从何而来、象为何生起、气韵如何稳定、为何令人安静。
                                </p>
                                <div className="text-center space-y-2 my-8">
                                    <p className="font-semibold text-white text-xl">AI 不替代参观者，</p>
                                    <p className="font-semibold text-white text-xl">AI 引导参观者。</p>
                                    <p className="font-semibold text-white text-xl">AI 搭桥，人跨越。</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <p>
                                    Unstructured AI can only recognize;
                                    structured AI can understand.
                                </p>
                                <p>
                                    Grounded in Tian Aesthetics, CulturaAI can analyze materials, understand craftsmanship, comprehend compositional order,
                                    enter the space of spirit, and even attempt to generate meaning.
                                </p>
                                <p>
                                    When visitors face a jade artifact, AI not only identifies its category
                                    but also explains how the material formed, where its power originates, why its imagery arises, how its spirit stabilizes, and why it brings tranquility.
                                </p>
                                <div className="text-center space-y-2 my-8">
                                    <p className="font-semibold text-white text-xl">AI does not replace visitors;</p>
                                    <p className="font-semibold text-white text-xl">AI guides visitors.</p>
                                    <p className="font-semibold text-white text-xl">AI builds bridges; people cross.</p>
                                </div>
                            </>
                        )}
                    </motion.div>

                    {/* Image Break 2 */}
                    <div className="my-20 relative group">
                        <div className="absolute inset-0 border border-white/10 transform translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                        <div className="relative z-10 w-full h-64 md:h-96 bg-gray-800 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/images/culturaai/ai2.jpg"
                                            alt="CulturaAI System"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const placeholder = target.nextElementSibling as HTMLElement;
                                    if (placeholder) placeholder.style.display = 'flex';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black opacity-80 z-20 flex flex-col items-center justify-center p-8 text-center border border-white/5" style={{ display: 'none' }}>
                                <span className="font-museum-title text-red-500/50 text-4xl mb-2">❖</span>
                                <p className="font-museum-serif text-gray-500 italic">"The Bridge of Understanding"</p>
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-center text-red-400/70 tracking-widest uppercase font-museum-body">
                            Figure II. The Bridge
                        </div>
                    </div>

                    {/* Section 7 */}
                    <SectionTitle 
                        number="07" 
                        title={isChinese ? "天系美学的意义" : "The Meaning"} 
                        subtitle={isChinese ? "器物被看见，文化被理解，人心被唤醒" : "Artifacts Are Seen, Culture Is Understood, Hearts Are Awakened"}
                    />

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariant}
                        className="text-gray-300 leading-relaxed font-light text-lg mb-12 space-y-4"
                    >
                        {isChinese ? (
                            <>
                                <p>
                                    天系美学是一种关系的恢复。
                                    它连接人与器物、人与文化、人与自然，也连接人与自己。
                                </p>
                                <p>
                                    真正的文化体验不是知识的堆砌，而是心境的回归。
                                    石不语，而道自显；器无心，而文明自明。
                                </p>
                                <p>
                                    当观者在博物馆灯光下凝视一件器物，
                                    若能在片刻静默中听见内心的声响，
                                    那便是文化真正的复苏。
                                </p>
                            </>
                        ) : (
                            <>
                                <p>
                                    Tian Aesthetics is a restoration of relationships.
                                    It connects people with artifacts, people with culture, people with nature, and people with themselves.
                                </p>
                                <p>
                                    True cultural experience is not the accumulation of knowledge but the return of inner peace.
                                    Stones speak not, yet the Way reveals itself; artifacts have no mind, yet civilization becomes clear.
                                </p>
                                <p>
                                    When a viewer gazes at an artifact under museum lights
                                    and can hear the resonance within in a moment of silence,
                                    that is the true revival of culture.
                                </p>
                            </>
                        )}
                    </motion.div>

                    {/* Conclusion */}
                    <div className="mt-24 pt-12 border-t border-red-600/30 text-center">
                        <h3 className="font-museum-title text-2xl text-white mb-6">
                            {isChinese ? "结语" : "Epilogue"}
                        </h3>
                        <p className="text-lg text-gray-400 mb-8 font-museum-serif">
                            {isChinese ? "桥不是唯一的路，但桥让更多人抵达" : "Bridges Are Not the Only Path, But Bridges Enable More to Arrive"}
                        </p>
                        
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={sectionVariant}
                            className="text-gray-300 leading-relaxed font-light text-lg mb-8 space-y-4"
                        >
                            {isChinese ? (
                                <>
                                    <p>
                                        古人凭心性与岁月，与器物缓慢相遇；
                                        现代节奏匆促，理解往往被中断。
                                    </p>
                                    <p>
                                        天系美学是一条稳妥、清晰、温和的路径，
                                        让更多人在有限时间中抵达文明之深处。
                                    </p>
                                    <p>
                                        器物无声，却能教人静心；
                                        文化无形，却能使人看见世界；
                                        天系美学无为，却能为众人搭起一座桥。
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p>
                                        The ancients, through contemplation and time, encountered artifacts slowly;
                                        modern pace rushes, and understanding is often interrupted.
                                    </p>
                                    <p>
                                        Tian Aesthetics is a steady, clear, gentle path,
                                        enabling more people to reach the depths of civilization within limited time.
                                    </p>
                                    <p>
                                        Artifacts are silent, yet teach people to calm their minds;
                                        Culture is formless, yet enables people to see the world;
                                        Tian Aesthetics does nothing, yet builds a bridge for all.
                                    </p>
                                </>
                            )}
                        </motion.div>
                        
                        <div className="font-museum-serif text-xl md:text-2xl text-red-100/90 leading-relaxed italic space-y-2 mt-12">
                             {isChinese ? (
                                <>
                                    <p>当人愿意在一件器物前停下来，</p>
                                    <p>心境归于平静的那一刻，</p>
                                    <p>器物之微与文明之大、人心之深与世界之广，</p>
                                    <p>便在此刻合而为一。</p>
                                </>
                            ) : (
                                <>
                                    <p>When a person is willing to pause before an artifact,</p>
                                    <p>in that moment when the mind returns to tranquility,</p>
                                    <p>the minuteness of artifacts and the vastness of civilization, the depth of the human heart and the breadth of the world,</p>
                                    <p>unite as one in that instant.</p>
                                </>
                            )}
                        </div>
                        </div>

                    {/* Back Button - Styled as a Museum label/button */}
                    <div className="mt-20 text-center pb-20">
                        <button
                            onClick={() => navigate(isChinese ? "/zh" : "/")}
                            className="group relative px-8 py-3 overflow-hidden rounded-sm transition-all duration-300"
                        >
                            <div className="absolute inset-0 border border-white/20 group-hover:border-red-500/50 transition-colors duration-300"></div>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative font-museum-body tracking-widest text-sm uppercase text-gray-300 group-hover:text-red-200 transition-colors">
                                {isChinese ? "返回首页" : "Return Home"}
                            </span>
                        </button>
                    </div>

                </article>
            </div>

        </main>
    );
}
