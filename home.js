import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
export default function Home() {
    const isChinese = true;
    // 滚动逻辑
    useEffect(() => {
        const setupScroll = (id) => {
            const left = document.getElementById(`scrollLeft-${id}`);
            const right = document.getElementById(`scrollRight-${id}`);
            const container = document.getElementById(`scrollContainer-${id}`);
            if (left && right && container) {
                left.onclick = () => container.scrollBy({ left: -400, behavior: "smooth" });
                right.onclick = () => container.scrollBy({ left: 400, behavior: "smooth" });
            }
        };
        ["exhibitions", "events", "products", "learning"].forEach(setupScroll);
    }, []);
    return (_jsxs("main", { className: "bg-gray-900 text-white font-sans overflow-x-hidden", children: [_jsx("section", { className: "h-[90vh] flex items-center justify-center bg-cover bg-center text-center", style: { backgroundImage: "url('/images/hero.jpg')" }, children: _jsxs("div", { className: "bg-black/40 p-10 rounded-xl", children: [_jsx("h1", { className: "text-5xl font-bold mb-4", children: isChinese ? "让金属有温度，让文化会呼吸" : "Where Metal Breathes and Culture Lives" }), _jsx("p", { className: "text-gray-300 text-lg max-w-2xl mx-auto", children: isChinese
                                ? "在黎里古镇的古巷与河湾间，一座明代古宅温润如锡，沉静如诗。"
                                : "In the ancient town of Lili, a Ming-era residence glows softly like pewter, tranquil and timeless." })] }) }), _jsx(SectionScroll, { id: "exhibitions", title: isChinese ? "展览与收藏" : "Exhibitions & Collections", desc: isChinese
                    ? "馆藏横跨明清至今，涵盖生活器具、宗教用器与当代艺术作品。"
                    : "The museum’s collection spans from the Ming and Qing dynasties to today.", items: [...Array(8)].map((_, i) => ({
                    id: i + 1,
                    title: isChinese ? `展品 ${i + 1}` : `Collection ${i + 1}`,
                    desc: isChinese
                        ? "锡器的温润与工艺之美。"
                        : "The grace and craftsmanship of pewter through time.",
                    img: `/images/collection/collection${i + 1}.jpg`,
                    link: `/collections/${i + 1}`,
                })), hasLink: true }), _jsx(SectionScroll, { id: "events", title: isChinese ? "活动与交流" : "Events & Partnerships", desc: isChinese
                    ? "从区域峰会到国际展会，博物馆积极参与文化交流与国际展览，让锡的温度跨越语言与国界。"
                    : "From regional summits to international fairs, the museum brings Chinese pewter to the world.", items: [
                    {
                        id: 1,
                        title: isChinese ? "中法文化交流论坛" : "Sino-French Forum",
                        desc: isChinese
                            ? "法国学生来华，与中国工艺师共同探讨锡器的当代表达。"
                            : "French students explored pewter design with Chinese artisans.",
                        img: "/images/events/event1.jpg",
                    },
                    {
                        id: 2,
                        title: isChinese ? "长三角文化峰会" : "Yangtze Delta Summit",
                        desc: isChinese
                            ? "博物馆代表分享民间工艺的创新保护经验。"
                            : "Museum representatives shared insights on heritage innovation.",
                        img: "/images/events/event2.jpg",
                    },
                    {
                        id: 3,
                        title: isChinese ? "锡器国际设计展" : "Pewter Design Expo",
                        desc: isChinese
                            ? "展示传统锡工艺与现代设计融合的跨界作品。"
                            : "Showcasing works blending tradition and modern design.",
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
                ], hasLink: false }), _jsx(SectionScroll, { id: "products", title: isChinese ? "文创用品" : "Cultural & Creative Products", desc: isChinese
                    ? "以锡为媒介，延伸生活之美与审美日常。"
                    : "Pewter-inspired creations that bring art into everyday life.", items: [
                    {
                        id: 1,
                        title: isChinese ? "锡质茶具" : "Pewter Tea Set",
                        desc: isChinese
                            ? "以锡保香、避湿，融合现代审美与传统手艺。"
                            : "Tea sets combining modern design with pewter tradition.",
                        img: "/images/products/product1.jpg",
                    },
                    {
                        id: 2,
                        title: isChinese ? "器皿系列" : "Vessel Collection",
                        desc: isChinese
                            ? "以东方造型语言重释古典美。"
                            : "Reinterpreting classical elegance in modern form.",
                        img: "/images/products/product2.jpg",
                    },
                    {
                        id: 3,
                        title: isChinese ? "礼盒设计" : "Gift Sets",
                        desc: isChinese
                            ? "融合工艺与生活，传递温度与仪式感。"
                            : "Blending craft and lifestyle in meaningful design.",
                        img: "/images/products/product3.jpg",
                    },
                ], hasLink: false }), _jsx(SectionScroll, { id: "learning", title: isChinese ? "研学与教育" : "Learning & Discovery", desc: isChinese
                    ? "如果说展厅是时间的剧场，那么研学，就是让观众成为演员的舞台。"
                    : "If the exhibition hall is a theatre of time, Learning is where visitors become performers.", items: [
                    {
                        id: 1,
                        title: isChinese ? "锡器手作课程" : "Pewter Craft Workshop",
                        desc: isChinese
                            ? "亲手体验锡工艺的锻打与雕刻，感受手作之美。"
                            : "Hands-on pewter crafting workshops for all ages.",
                        img: "/images/learning/learning1.jpg",
                        link: "/learning",
                    },
                    {
                        id: 2,
                        title: isChinese ? "青少年研学" : "Youth Learning Program",
                        desc: isChinese
                            ? "让青少年在实践中了解非遗与美学。"
                            : "Immersive learning programs for young learners.",
                        img: "/images/learning/learning2.jpg",
                        link: "/learning",
                    },
                ], hasLink: true }), _jsx("footer", { className: "bg-black text-center py-8 text-gray-400 text-sm relative z-10", children: _jsx("p", { children: isChinese
                        ? "© 2025 中国锡器博物馆 | 传承匠心，用心设计"
                        : "© 2025 China Pewter Museum | Designed with Heritage and Heart" }) })] }));
}
/* ---------- 可复用滚动组件 ---------- */
function SectionScroll({ id, title, desc, items, hasLink, }) {
    return (_jsxs("div", { id: id, className: "relative z-10 bg-[#0f172a] py-24 text-center fade", children: [_jsx("h2", { className: "text-3xl md:text-5xl font-bold mb-8 leading-snug", children: title }), desc && (_jsx("div", { className: "max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg mb-12", children: _jsx("p", { children: desc }) })), _jsxs("div", { className: "relative", children: [_jsx("button", { id: `scrollLeft-${id}`, className: "absolute left-0 top-1/2 -translate-y-1/2 bg-red-700/50 text-white p-3 rounded-full z-20 hover:bg-red-600/70 transition", children: "\u2039" }), _jsx("button", { id: `scrollRight-${id}`, className: "absolute right-0 top-1/2 -translate-y-1/2 bg-red-700/50 text-white p-3 rounded-full z-20 hover:bg-red-600/70 transition", children: "\u203A" }), _jsx("div", { id: `scrollContainer-${id}`, className: "flex overflow-x-scroll scroll-smooth space-x-6 px-10 pb-4 no-scrollbar", children: items.map((item) => hasLink ? (_jsxs("a", { href: item.link, className: "flex-shrink-0 w-[360px] bg-[#13203b] hover:bg-[#182a4d] transition-all duration-300 shadow-lg", children: [_jsx("div", { className: "h-[420px] overflow-hidden", children: _jsx("img", { src: item.img, alt: item.title, className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105" }) }), _jsxs("div", { className: "p-6 text-left", children: [_jsx("h3", { className: "text-xl font-bold mb-3", children: item.title }), _jsx("p", { className: "text-gray-300 text-sm leading-relaxed", children: item.desc })] })] }, item.id)) : (_jsxs("div", { className: "flex-shrink-0 w-[360px] bg-[#13203b] hover:bg-[#182a4d] transition-all duration-300 shadow-lg", children: [_jsx("div", { className: "h-[420px] overflow-hidden", children: _jsx("img", { src: item.img, alt: item.title, className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105" }) }), _jsxs("div", { className: "p-6 text-left", children: [_jsx("h3", { className: "text-xl font-bold mb-3", children: item.title }), _jsx("p", { className: "text-gray-300 text-sm leading-relaxed", children: item.desc })] })] }, item.id))) })] })] }));
}
