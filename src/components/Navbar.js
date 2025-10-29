import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export default function Navbar({ isChinese, onLanguageToggle }) {
    return (_jsxs("nav", { className: "fixed top-0 w-full bg-black/50 backdrop-blur-sm text-gray-100 py-4 z-50 flex justify-center items-center gap-8 text-sm md:text-base", children: [_jsx("div", { className: "flex items-center gap-3", children: _jsx("a", { href: "/", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("img", { src: "/images/logo.jpg", alt: "logo", className: "w-10 h-10" }), _jsx("p", { className: "text-1xl font-bold whitespace-nowrap", children: isChinese ? '中国锡器博物馆' : 'CHINA PEWTER MUSEUM' })] }) }) }), _jsx(motion.button, { onClick: onLanguageToggle, className: "bg-red-800 hover:bg-red-700 px-3 py-1 rounded-md text-white text-xs font-medium transition-colors", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: isChinese ? 'EN' : '中文' })] }));
}
