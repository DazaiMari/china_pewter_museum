import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
    const [isChinese, setIsChinese] = useState(true);

    useEffect(() => {
        const sections = document.querySelectorAll("section.fade");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );
        sections.forEach((section) => observer.observe(section));

        const left = document.getElementById("scrollLeft");
        const right = document.getElementById("scrollRight");
        const container = document.getElementById("scrollContainer");
        if (left && right && container) {
            left.onclick = () =>
                container.scrollBy({
                    left: -container.offsetWidth,
                    behavior: "smooth",
                });
            right.onclick = () =>
                container.scrollBy({
                    left: container.offsetWidth,
                    behavior: "smooth",
                });
        }
    }, []);

    return (
        <main className="bg-gray-900 text-white font-sans overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm text-gray-100 py-10 z-50 flex justify-center items-center gap-8 text-sm md:text-base">
                <div className="flex items-center gap-3">
                    <img src="/images/logo.jpg" alt="logo" className="w-10 h-10" />
                    <p className="text-1xl font-bold whitespace-nowrap">
                        {isChinese ? "中国锡器博物馆" : "CHINA PEWTER MUSEUM"}
                    </p>
                </div>
                <a
                    href="#hero"
                    className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center"
                >
                    {isChinese ? "首页" : "Home"}
                </a>
                <a
                    href="#about"
                    className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center"
                >
                    {isChinese ? "关于" : "About"}
                </a>
                <a
                    href="#Exhibitions & Collections"
                    className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center"
                >
                    {isChinese ? "展览与收藏" : "Exhibitions & Collections"}
                </a>
                <a
                    href="#Craft & Culture"
                    className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center"
                >
                    {isChinese ? "工艺与文化" : "Craft & Culture"}
                </a>
                <a
                    href="#Learning & Discovery"
                    className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center"
                >
                    {isChinese ? "研学与教育" : "Learning & Discovery"}
                </a>
                <a
                    href="#Events & Partnerships"
                    className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center"
                >
                    {isChinese ? "活动与交流" : "Events & Partnerships"}
                </a>
                <motion.button
                    onClick={() => setIsChinese(!isChinese)}
                    className="bg-red-800 hover:bg-red-700 px-3 py-1 rounded-md text-white text-xs font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isChinese ? "EN" : "中文"}
                </motion.button>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="relative h-screen flex items-end justify-start">
                {/* 背景图固定 */}
                <div className="fixed inset-0 z-0">
                    <img
                        src="/images/Welcom.png"
                        alt="Museum Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* 左下角文字 */}
                <div className="relative z-10 p-10 md:p-20 text-left">
                    <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-snug">
                        {isChinese ? (
                            <>
                                <span className="text-xl md:text-2xl">欢迎来到</span>
                                <br />
                                <span className="text-2xl md:text-3xl">中国锡器博物馆</span>
                            </>
                        ) : (
                            <>
                                <span className="text-xl md:text-2xl">WELCOME TO</span>
                                <br />
                                <span className="text-2xl md:text-3xl">CHINA PEWTER MUSEUM</span>
                            </>
                        )}
                    </h1>

                    <p className="text-lg text-gray-200">
                        9:30 – 16:30 ({isChinese ? "周一闭馆" : "Closed Mondays"})
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section
                id="intro"
                className="relative bg-[#0f172a] py-24 px-6 md:px-20 text-center fade z-10"
            >
                <h2 className="text-lg md:text-2xl font-bold text-white mb-6 leading-snug">
                    {isChinese
                        ? "让金属有温度，让文化会呼吸"
                        : "Where Metal Breathes and Culture Lives"}
                </h2>

                <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-4 text-sm">
                    <p>
                        {isChinese
                            ? "在黎里古镇的古巷与河湾间，一座明代古宅温润如锡，沉静如诗。中国锡器博物馆，于此安放光影与匠心。这里没有冷冰冰的展柜，而是一场跨越千年的对话——人与器、心与文明。"
                            : "Amid the alleys and waterways of Lili Ancient Town, a Ming Dynasty mansion stands—serene as pewter, timeless as poetry. Here, the China Pewter Museum breathes new life into craft and heritage. This is not a hall of silent objects, but a living dialogue between people and things, between touch and time."}
                    </p>
                </div>
            </section>

            {/* About Section */}
            <div className="relative z-10 bg-[#0f172a]">
                <section
                    id="about"
                    className="bg-[#0f172a] text-white py-24 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center fade"
                >
                    {/* Left side: Text */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                            {isChinese ? "关于博物馆" : "About the Museum"}
                        </h2>

                        <p className="text-gray-300 leading-relaxed text-lg mb-4 whitespace-pre-line">
                            {isChinese
                                ? `中国锡器博物馆位于中国苏州黎里古镇，馆舍依托明代毛宅修复而成。
由徐鹏林创办，于二〇一七年正式开馆，
是中国规模最大、最具代表性的锡器专题博物馆。                    

博物馆被列入中国非物质文化遗产体系，并获评为：
苏州市中小学生综合素质发展活动基地、
苏州市科普教育基地、
长三角生态绿色一体化发展示范区首批科学教育基地，
并担任全国工业博物馆联盟铸造行业分盟轮值理事长单位。

博物馆扎根江南水乡，以锡为媒，探索金属与文化的共鸣。
锡柔而不弱，润而不寒，象征着东方文化中力量与温度的平衡。
通过展览、研学与交流合作，博物馆致力于让“技”与“道”相连，
让传统与创新共生，让手艺与教育相融。

在这里，展示不止于器物，更是一次精神的唤醒。
中国锡器博物馆的使命，是让锡文化“活起来、传下去、走出去”
让金属有温度，让文化会呼吸。`
                                : `The China Pewter Museum, located in Lili Ancient Town, Suzhou, China, is housed within the restored Mao Mansion, a Ming-dynasty residence of historic character.
Founded by Xu Penglin and opened in 2017, it is China’s largest institution dedicated to pewter culture and preservation.

The museum is officially recognized as part of China’s Intangible Cultural Heritage, and serves as a Suzhou Comprehensive Quality Development Activity Base for Primary and Secondary School Students, a Suzhou Science Popularization Base, and one of the First Batch of Science Education Bases in the Yangtze River Delta Leading Demonstration Zone. It also serves as the Rotating Director of the Foundry Industry Sub-Alliance under the National Industrial Museum Alliance of China.

Rooted in the ancient water town of Jiangnan, the museum regards pewter not only as a metal of craft, but as a vessel of spirit. Soft yet enduring, pewter reflects the Chinese pursuit of harmony, restraint, and warmth within strength.
Through exhibitions, learning and discovery programs, and collaborative projects, the museum seeks to connect technology with culture, tradition with innovation, and craftsmanship with education.

For the museum, to display is to awaken — to let visitors sense that metal is not cold, but alive with memory and meaning.
Its mission is to let pewter culture come alive, be passed on, and reach the wider world — to let metal hold warmth, and culture breathe.`}
                        </p>
                    </div>

                    {/* Right side: Images */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/about/about1.jpg"
                            alt="about1"
                            className="rounded-lg shadow-md object-cover w-full h-48 md:h-60"
                        />
                        <img
                            src="/images/about/about2.jpg"
                            alt="about2"
                            className="rounded-lg shadow-md object-cover w-full h-48 md:h-60"
                        />
                        <img
                            src="/images/about/about3.jpg"
                            alt="about3"
                            className="rounded-lg shadow-md object-cover w-full h-48 md:h-60"
                        />
                        <img
                            src="/images/about/about4.jpg"
                            alt="about4"
                            className="rounded-lg shadow-md object-cover w-full h-48 md:h-60"
                        />
                    </div>
                </section>
            </div>

            {/* 展览与收藏 Section */}
            <div className="relative z-10 bg-[#0f172a]">
                <section
                    id="Exhibitions & Collections"
                    className="bg-[#0f172a] text-white py-24 px-4 md:px-10 text-center fade"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                        {isChinese ? "展览与收藏" : "Exhibitions & Collections"}
                    </h2>
                    <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg mb-16 whitespace-pre-line">
                        <p>
                            {isChinese
                                ? `博物馆通过常设展与专题展，系统展示锡器的多样面貌。
展厅按主题分区陈列，涵盖食具、茶具、酒具、闺房用具、文房用具、照明用具、祭祀用具及雕像饰品等类别。
观众可在器物之间感受古人生活的节奏与审美秩序，体会锡在饮食、居家、礼仪与精神生活中的广泛应用。

海外展区收藏来自日本、英国与荷兰的锡器作品，
以对照的方式呈现这一材料跨越地域与文化的共通审美。
这些展品让人看到，锡不仅属于中国，也属于世界。

自十六世纪起，中国精工锡器经由海上丝绸之路远销东南亚、印度与欧洲。
至十八世纪中期，锡器与瓷器、漆器并列，成为中国手工艺走向世界的象征。
馆藏中保存着这一时期的外销锡器，
它们见证了中西交流的轨迹，也承载了工艺与文明的互映。

每一件展品，都记录着人类与金属共生的故事。
在光影与陈列之间，锡的光泽仍在缓缓诉说着生活的温度与时代的记忆。`
                                : `Through both permanent and special exhibitions, the museum presents the rich diversity of Chinese pewter. The galleries are arranged by theme, ranging from tableware, teaware, and wine vessels to boudoir articles, scholar’s objects, lighting tools, ritual implements, and decorative sculptures. Walking among these artifacts, visitors can sense the rhythm and aesthetic order of traditional life, and appreciate pewter’s integral role in dining, domestic, ceremonial, and spiritual culture.

The international section features pewter works from Japan, Britain and the Netherlands, highlighting the shared appreciation of this gentle metal across cultures. Here, visitors see that pewter belongs not only to China but to the world.

From the sixteenth century onward, Chinese pewter craftsmanship traveled along the Maritime Silk Road to Southeast Asia, India and Europe. By the mid-eighteenth century, pewter stood alongside porcelain and lacquerware as a symbol of China’s artistry reaching the world. The museum’s collection preserves export pewter from this era, living records of exchange between East and West, where craft and civilization met in quiet dialogue.

Every object in the gallery carries its own story. In the play of light and shadow, pewter continues to speak, its sheen holding the warmth of life and the memory of time.`}
                        </p>
                    </div>

                    {/* 滚动容器 */}
                    <div className="relative max-w-[1600px] mx-auto">
                        <button
                            id="scrollLeft"
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#000000b0] to-transparent text-white p-5 rounded-full z-30 hover:scale-110 transition duration-300"
                        >
                            ‹
                        </button>
                        <button
                            id="scrollRight"
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-[#000000b0] to-transparent text-white p-5 rounded-full z-30 hover:scale-110 transition duration-300"
                        >
                            ›
                        </button>

                        <div
                            id="scrollContainer"
                            className="grid grid-flow-col auto-cols-[90%] sm:auto-cols-[48%] md:auto-cols-[23%] overflow-x-auto scroll-smooth gap-8 px-4 md:px-6 pb-4 hide-scrollbar snap-x snap-mandatory"
                        >
                            {[
                                {
                                    id: 1,
                                    title: isChinese ? "食具" : "Tableware",
                                    desc: isChinese
                                        ? "以实用为先，形制规整，体现锡器在饮食文化中的温润气度。"
                                        : "Functional and elegant, reflecting pewter’s graceful presence in Chinese dining culture.",
                                    img: "/images/collection/collection1.jpg",
                                },
                                {
                                    id: 2,
                                    title: isChinese ? "茶具" : "Tea Ware",
                                    desc: isChinese
                                        ? "以锡保香、避湿之特性，承载千年茶文化的清雅与仪式感。"
                                        : "Known for preserving aroma and freshness, pewter vessels embody the spirit of Chinese tea rituals.",
                                    img: "/images/collection/collection2.jpg",
                                },
                                {
                                    id: 3,
                                    title: isChinese ? "酒具" : "Wine Ware",
                                    desc: isChinese
                                        ? "温润如玉的锡酒器，凝结古人待客的礼节与风雅。"
                                        : "Pewter wine sets, warm and refined, capture the etiquette and elegance of ancient gatherings.",
                                    img: "/images/collection/collection3.jpg",
                                },
                                {
                                    id: 4,
                                    title: isChinese ? "闺房用具" : "Boudoir Utensils",
                                    desc: isChinese
                                        ? "精巧雅致，寄寓生活情趣与东方审美的温柔格调。"
                                        : "Delicate and refined, reflecting the grace and elegance of traditional domestic life.",
                                    img: "/images/collection/collection4.jpg",
                                },
                                {
                                    id: 5,
                                    title: isChinese ? "文房用具" : "Scholar’s Utensils",
                                    desc: isChinese
                                        ? "炉、瓶、盒等文房器物，凝聚书香与匠心的双重气息。"
                                        : "Incense burners and ink boxes blending artistry and scholarly refinement.",
                                    img: "/images/collection/collection5.jpg",
                                },
                                {
                                    id: 6,
                                    title: isChinese ? "照明用具" : "Lighting Ware",
                                    desc: isChinese
                                        ? "烛台灯具，形制多样，映照古人的审美与生活之光。"
                                        : "Candleholders and lamps that illuminate both craft and culture.",
                                    img: "/images/collection/collection6.jpg",
                                },
                                {
                                    id: 7,
                                    title: isChinese ? "祭供用具" : "Ritual Utensils",
                                    desc: isChinese
                                        ? "承载敬祖礼仪，融信仰与美学于一体的锡制供器。"
                                        : "Ritual pewter vessels uniting belief, heritage, and artistry.",
                                    img: "/images/collection/collection7.jpg",
                                },
                                {
                                    id: 8,
                                    title: isChinese
                                        ? "雕像 饰件 花瓶 烟具"
                                        : "Sculptures & Decorative Pewter",
                                    desc: isChinese
                                        ? "从雕像到饰件，锡以柔韧之性塑造生命与纪念的艺术。"
                                        : "From figurines to vases and smoking sets, pewter conveys artistry and remembrance.",
                                    img: "/images/collection/collection8.jpg",
                                },
                                {
                                    id: 9,
                                    title: isChinese ? "国外锡器" : "Overseas Pewter",
                                    desc: isChinese
                                        ? "展示世界各地锡文化的交流与融合。"
                                        : "Showcasing global influences and the dialogue of pewter across cultures.",
                                    img: "/images/collection/collection9.jpg",
                                },
                            ].map((item) => (
                                <a
                                    key={item.id}
                                    href={`/collections/${item.id}`}
                                    className="bg-[#13203b] hover:bg-[#182a4d] transition-all duration-300 shadow-lg rounded-lg snap-start"
                                >
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="text-left p-6">
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
                </section>
            </div>
            {/* Craft & Culture Section */}
            <div className="relative z-10 bg-[#0f172a]">
                <section
                    id="Craft & Culture"
                    className="bg-[#0f172a] text-white py-24 px-6 md:px-20 text-center fade"
                >
                    {/* 标题 */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                        {isChinese ? "工艺与文化" : "Craft & Culture"}
                    </h2>

                    {/* 段落文字 */}
                    <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg mb-16 text-left space-y-6">
                        <p>
                            {isChinese
                                ? "锡，柔而不弱，润而不寒，素光含静气。在它的延展与回收之间，蕴藏着金属最温柔的秩序。自古以来，锡被视为调和之材——既能与铜成青，又能与银共白，在火与手的交替中，显露出东方文化中“中和”之美。"
                                : "Pewter is soft yet enduring, gentle yet firm — its muted glow carrying the quiet spirit of balance. For centuries, it has been known as a metal of harmony, blending with copper to form bronze or with silver to yield light brilliance — a reflection of the Eastern pursuit of balance between strength and grace."}
                        </p>
                        <p>
                            {isChinese
                                ? "制锡之道，不止于技。冶炼、浇铸、锤打、焊接、打磨、抛光，每一道工序，都是人与物的对话：力量、节奏与心性的平衡。打锡之人，在敲击的回声中体会静气；观锡之人，在光泽的流转中感受时间。工艺的意义，在于以形入心，以物见道。"
                                : "The making of pewter is more than skill — it is a dialogue between hand and material, between strength, rhythm, and patience. The craftsman listens through the hammer’s rhythm, and the viewer feels through the shifting glow. Here, technique becomes meditation, and form leads to insight."}
                        </p>
                    </div>

                    {/* 动态中英文打锡流程图 */}
                    <div className="max-w-6xl mx-auto text-white text-center mt-16">
                        <h3 className="text-2xl font-bold mb-8">
                            {isChinese ? "传统打锡工艺流程" : "Traditional Pewter Craft Process"}
                        </h3>

                        <div className="flex flex-wrap justify-center items-center gap-4 text-base md:text-lg leading-relaxed">
                            {(isChinese
                                    ? [
                                        "原料锡",
                                        "熔锡",
                                        "压锡片",
                                        "打样裁剪",
                                        "模铸",
                                        "冷锻捶打",
                                        "焊接组合",
                                        "挫修",
                                        "削光",
                                        "砂磨",
                                        "擦洗",
                                        "纹饰",
                                    ]
                                    : [
                                        "Raw Tin",
                                        "Melting",
                                        "Sheet Rolling",
                                        "Pattern Cutting",
                                        "Casting",
                                        "Cold Hammering",
                                        "Joining & Assembly",
                                        "Filing & Finishing",
                                        "Polishing",
                                        "Sanding",
                                        "Cleaning",
                                        "Decoration",
                                    ]
                            ).map((step, index, arr) => (
                                <React.Fragment key={index}>
                                    <div className="bg-[#1e2a45] px-4 py-3 rounded-md shadow-md whitespace-nowrap hover:scale-105 transition-all duration-300">
                                        {step}
                                    </div>
                                    {index < arr.length - 1 && (
                                        <span className="text-gray-400 text-2xl">→</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* 工艺流程图图片 */}
                    <div className="max-w-6xl mx-auto my-16">
                        <img
                            src="/images/process.jpg" // 请将“传统打锡工艺流程.jpg”重命名为 process.jpg 并放入 public/images
                            alt="Traditional Pewter Craft Process"
                            className="rounded-lg shadow-lg mx-auto"
                        />
                    </div>

                    {/* 结语 */}
                    <div className="max-w-6xl mx-auto text-white italic leading-relaxed text-center">
                        <p>
                            {isChinese
                                ? "每一次锤击，都是对时间的回应；每一道光泽，都是对心性的修炼。传统工艺让金属拥有了生命，也让人心找到安处。"
                                : "Each strike of the hammer answers the call of time; each sheen polished reflects the discipline of the heart. Traditional craftsmanship breathes life into metal — and stillness into the maker’s soul."}
                        </p>
                    </div>
                </section>
            </div>
            {/* Learning & Discovery Section */}
            <div className="relative z-10 bg-[#0f172a]">
                <section
                    id="Learning & Discovery"
                    className="bg-[#0f172a] text-white py-24 px-6 md:px-20 text-center fade"
                >
                    {/* 标题 */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                        {isChinese ? "研学与教育" : "Learning & Discovery"}
                    </h2>

                    {/* 段落文字 */}
                    <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg mb-16 text-left space-y-6">
                        <p>
                            {isChinese
                                ? "如果说展厅是静观的课堂，工坊便是动手的学堂。中国锡器博物馆将传统工艺教育融入日常体验，让观众在‘做中学’、在‘造中悟’。每一次触摸锡片的温度、聆听锤击的节奏，都是一次从感官到心性的修行。"
                                : "If the exhibition hall is a classroom for contemplation, the workshop is one for creation. The China Pewter Museum brings traditional craft education into everyday experience—where visitors learn by doing and reflect by making. Each touch of warm pewter, each rhythm of hammering, becomes a meditation in motion."}
                        </p>
                        <p>
                            {isChinese
                                ? "博物馆在‘研学4.0’理念下，将金属工艺、文化叙事与创造性思维结合，面向青少年、家庭与国际访客推出多层次课程体系。通过亲手打锡、模具设计、器物拓印等体验活动，学习者在实践中理解工艺之理，感受文化之魂。"
                                : "Under the ‘Learning 4.0’ initiative, the museum integrates metalwork, storytelling, and creative thinking into a layered education system for students, families, and international visitors. Through hands-on experiences—pewter hammering, mold design, and relief printing—learners grasp not only the technique, but the spirit of craftsmanship."}
                        </p>
                        <p>
                            {isChinese
                                ? "我们相信，文化的学习不止是知识的传递，更是心灵的唤醒。无论是儿童的第一次敲打，还是匠人的一次讲解，都是文化生命延续的节点。"
                                : "We believe that learning culture is not merely the transfer of knowledge, but the awakening of awareness. Whether it is a child’s first hammer strike or a craftsman’s gentle demonstration, each moment becomes part of culture’s living continuity."}
                        </p>
                    </div>

                    {/* 学习与体验卡片 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                        {[
                            {
                                id: 1,
                                title: isChinese ? "打锡体验课程" : "Pewter Workshop",
                                desc: isChinese
                                    ? "亲手完成一件锡器作品，从敲打、焊接到打磨，体验传统工艺的全流程。"
                                    : "Create your own pewter piece—from hammering and joining to polishing—experiencing the full craft journey.",
                                img: "/images/learning/learning1.jpg",
                            },
                            {
                                id: 2,
                                title: isChinese ? "青少年创意课堂" : "Youth Creative Class",
                                desc: isChinese
                                    ? "结合艺术与科学，让学生在设计与实践中培养动手力与审美力。"
                                    : "Combining art and science, these classes help students cultivate creativity through design and hands-on making.",
                                img: "/images/learning/learning2.jpg",
                            },
                            {
                                id: 3,
                                title: isChinese ? "国际文化交流营" : "International Cultural Experience Camp",
                                desc: isChinese
                                    ? "海外游客踊跃参与打锡体验，在锤炼与光泽之间，感受中国手工的温度与细腻。"
                                    : "Overseas visitors actively take part in pewter-craft workshops, experiencing the warmth and refinement of Chinese craftsmanship.",
                                img: "/images/learning/learning3.jpg",
                            },
                        ].map((item) => (
                            <div
                                key={item.id}
                                className="group bg-[#13203b] hover:bg-[#1a2c4d] rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-1"
                            >
                                <div className="relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />
                                </div>
                                <div className="p-6 text-left">
                                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-400 transition-colors duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-snug">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 结语 */}
                    <div className="max-w-4xl mx-auto text-gray-400 italic leading-relaxed text-center">
                        <p>
                            {isChinese
                                ? "学习的终点，不是记忆，而是发现。唯有亲手触摸文化，方能真正理解文化的温度。"
                                : "The goal of learning is not memory, but discovery. Only through touch can we truly understand the warmth of culture."}
                        </p>
                    </div>
                </section>
            </div>

            {/* Events Section */}
            <div className="relative z-10 bg-[#0f172a]">
                <section
                    id="Events & Partnerships"
                    className="bg-[#0f172a] text-white py-24 px-6 md:px-20 text-center fade"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                        {isChinese ? "活动与交流" : "Events & Partnerships"}
                    </h2>

                    <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg mb-2">
                        <p className="mb-6">
                            {isChinese
                                ? "从区域峰会到国际展会，博物馆积极参与文化交流与国际展览，让锡的温度跨越语言与国界。"
                                : "From regional summits to international fairs, the museum brings the story of Chinese pewter to the world—bridging traditions with dialogue, and craft with innovation."}
                        </p>

                        <ul className="text-left list-disc list-inside space-y-2 text-gray-400 mx-auto max-w-2xl">
                            <li>
                                {isChinese
                                    ? "长三角一体化发展峰会"
                                    : "Yangtze River Delta Integration Development Summit"}
                            </li>
                            <li>
                                {isChinese
                                    ? "中法文化交流论坛"
                                    : "Sino-French Cultural Exchange Forum"}
                            </li>
                            <li>
                                {isChinese
                                    ? "中国国际进口博览会"
                                    : "China International Import Expo"}
                            </li>
                            <li>
                                {isChinese
                                    ? "中国国际旅游交易会"
                                    : "China International Tourism Expo"}
                            </li>
                            <li>
                                {isChinese
                                    ? "中国道口锡器文化节"
                                    : "China Daokou Tinware Cultural Festival"}
                            </li>
                        </ul>

                        <p className="mt-8 text-gray-300">
                            {isChinese
                                ? "近年来，中国锡器博物馆连续两届受邀在民非博物馆馆长国际论坛上作主题发言：第三届论坛分享了我馆在博物馆选址、展陈策划、文化教育、文创设计和旅游研学活动中的探索与实践；第四届则以“民非博物馆如何扩大影响力”为主题，系统交流了社会力量参与文化传播的经验与思考。论坛分享了我们联合地方政府主办了首届中国道口锡器文化节，以地方文化为基底，以工艺体验和公众参与为路径，推动锡文化走向社会、融入生活，探索出一条兼具学术深度与公众活力的传播之路。"
                                : "In recent years, the China Pewter Museum has been invited to deliver keynote speeches at the International Forum for Private Museum Directors for two consecutive sessions. At the third forum, we shared our exploration and practices in museum site selection, exhibition planning, cultural education, creative design, and cultural tourism programs. At the fourth forum, themed “How Private Museums Can Expand Their Influence”, we presented our experience and reflections on the role of social forces in cultural communication. During the forum, we also shared the case of our joint initiative with the local government — the First China Daokou Pewter Culture Festival. Rooted in regional culture and driven by craft experience and public participation, the festival promotes pewter culture to the broader society and everyday life, creating a pathway that combines academic depth with public vitality."}
                        </p>

                        <p className="mt-8 text-gray-400 italic">
                            {isChinese
                                ? "在每一次交流中，中国锡文化都以柔韧的金属，讲述坚韧的故事。"
                                : "With every exhibition, tin speaks its universal language of light and endurance."}
                        </p>
                    </div>
                </section>

                {/* 活动卡片区 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto mt-1 px-2">
                    {[
                        {
                            id: 1,
                            title: isChinese ? "中法文化交流论坛" : "Sino-French Forum",
                            desc: isChinese
                                ? "法国学生来华，与中国工艺师共同探讨锡器的当代表达。"
                                : "French students visited China to explore the contemporary expression of pewter craftsmanship with Chinese artisans.",
                            img: "/images/events/event1.jpg",
                        },
                        {
                            id: 2,
                            title: isChinese ? "长三角文化峰会" : "Yangtze Delta Summit",
                            desc: isChinese
                                ? "博物馆代表分享民间工艺的创新保护经验。"
                                : "Museum representatives share experiences in heritage innovation.",
                            img: "/images/events/event2.jpg",
                        },
                        {
                            id: 3,
                            title: isChinese ? "锡器国际设计展" : "Pewter Design Expo",
                            desc: isChinese
                                ? "展示传统锡工艺与现代设计融合的跨界作品。"
                                : "Showcasing cross-cultural pewter works blending tradition and design.",
                            img: "/images/events/event3.jpg",
                        },
                        {
                            id: 4,
                            title: isChinese ? "道口锡文化节" : "Daokou Tinware Festival",
                            desc: isChinese
                                ? "让传统工艺走进生活，传递手作的温度与美感。"
                                : "Bringing pewter craft into daily life through interactive festivals.",
                            img: "/images/events/event4.jpg",
                        },
                    ].map((item) => (
                        <div
                            key={item.id}
                            className="group block overflow-hidden bg-gray-800 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                        >
                            <div className="relative">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />
                            </div>
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-400 transition-colors duration-500">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-snug">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Footer */}
            <footer className="bg-black text-center py-8 text-gray-400 text-sm relative z-10">
                <p>
                    {isChinese
                        ? "© 2025 中国锡器博物馆 | 传承匠心，用心设计"
                        : "© 2025 China Pewter Museum | Designed with Heritage and Heart"}
                </p>
            </footer>
        </main>
    );
}

