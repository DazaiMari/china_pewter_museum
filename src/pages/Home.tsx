import * as React from "react";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Home() {
  const [isChinese, setIsChinese] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll('section.fade');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <main className="bg-gray-900 text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm text-gray-100 py-10 z-50 flex justify-center items-center gap-8 text-sm md:text-base">
      <div className="flex items-center gap-3">
        <img src="/images/logo.jpg" alt="logo" className="w-10 h-10" />
        <p className="text-1xl font-bold whitespace-nowrap">{isChinese ? '中国锡器博物馆' : 'CHINA PEWTER MUSEUM'}</p>
      </div>
      <a href="#hero" className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center">
        {isChinese ? '首页' : 'Home'}
      </a>
      <a href="#about" className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center">
        {isChinese ? '关于' : 'About'}
      </a>
      <a href="#exhibitions" className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center">
        {isChinese ? '展览与收藏' : 'Exhibitions'}
      </a>
      <a href="#events" className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center">
        {isChinese ? '活动与交流' : 'Events'}
      </a>
      <a href="#learning" className="hover:text-red-400 transition whitespace-nowrap min-w-[60px] text-center">
        {isChinese ? '研学与教育' : 'Learning'}
      </a>
      <motion.button
        onClick={() => setIsChinese(!isChinese)}
        className="bg-red-800 hover:bg-red-700 px-3 py-1 rounded-md text-white text-xs font-medium transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isChinese ? 'EN' : '中文'}
      </motion.button>
    </nav>
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-end justify-start">
        {/* 背景图固定，不随滚动 */}
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
          <h1 className="text-2xl md:text-4xl font-bold mb-3">
            {isChinese ? '欢迎来到中国锡器博物馆' : 'WELCOME TO CHINA PEWTER MUSEUM'}
          </h1>
          <p className="text-lg text-gray-200">
             9:00 – 17:00 ({isChinese ? '周一闭馆' : 'Closed Mondays'})
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="relative bg-[#0f172a] py-24 px-6 md:px-20 text-center fade z-10">
        <h2 className="text-lg md:text-2xl font-bold text-white mb-6 leading-snug">
          {isChinese
            ? '让金属有温度，让文化会呼吸'
            : 'Where Metal Breathes and Culture Lives'}
        </h2>

        <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-4 text-sm">
          <p>
            {isChinese
              ? '在黎里古镇的古巷与河湾间，一座明代古宅温润如锡，沉静如诗。中国锡器博物馆，于此安放光影与匠心。这里没有冷冰冰的展柜，而是一场跨越千年的对话——人与器、心与文明。'
              : 'Amid the alleys and waterways of Lili Ancient Town, a Ming Dynasty mansion stands—serene as pewter, timeless as poetry. Here, the China Pewter Museum breathes new life into craft and heritage. This is not a hall of silent objects, but a living dialogue between people and things, between touch and time.'}
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
            {isChinese ? '关于博物馆' : 'About the Museum'}
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            {isChinese
              ? '中国锡器博物馆创立于 2017 年，位于苏州黎里古镇明代毛宅，是传统与现代的桥梁，让文化在体验中延续。'
              : 'Founded in 2017, the China Pewter Museum stands as a bridge between heritage and modernity. Located in a Ming Dynasty mansion in Suzhou’s Lili Ancient Town, it reimagines what a museum can be — living, breathing, and participatory.'}
          </p>
        </div>
        {/* Right side: 4 images grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/about/about1.jpg"
            alt="about1"
            className="rounded-lg shadow-md object-cover w-full h-48 md:h-36"
          />
          <img  
            src="/images/about/about2.jpg"
            alt="about2"
            className="rounded-lg shadow-md object-cover w-full h-48 md:h-36"
          />
          <img
            src="/images/about/about3.jpg"
            alt="about3"
            className="rounded-lg shadow-md object-cover w-full h-48 md:h-36"
          />
          <img
            src="/images/about/about4.jpg"
            alt="about4"
            className="rounded-lg shadow-md object-cover w-full h-48 md:h-36"
            />
          </div>
        </section>
      </div>

      {/*  & Collections Section */}
      <div className="relative z-10 bg-[#0f172a]">
        <section
          id="exhibitions"
          className="bg-[#0f172a] text-white py-24 px-6 md:px-20 text-center fade"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-snug">
            {isChinese ? '展览与收藏' : 'Exhibitions & Collections'}
          </h2>

          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg mb-16">
            <p>
              {isChinese
                ? '馆藏横跨明清至今，涵盖生活器具、宗教用器与当代艺术作品。每件锡器，都是一个有温度的金属故事。从宋元的家用锡盒，到民国的婚庆锡壶，再到现代设计师的再创，锡器折射出中国人生活的秩序与情感。'
                : 'The museum’s collection spans from the Ming and Qing dynasties to today—from domestic pewter cups to ceremonial vessels and contemporary designs. Each piece of tin tells a story of warmth and endurance, a reflection of how the Chinese have shaped metal, and how metal, in turn, has shaped their way of life.'}
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {[
              {
                id: 1,
                title: isChinese ? '食具' : 'Tableware',
                desc: isChinese
                  ? '以实用为先，形制规整，体现锡器在饮食文化中的温润气度。'
                  : 'Functional and elegant, reflecting pewter’s graceful presence in Chinese dining culture.',
                img: '/images/collection/collection1.jpg',
              },
              {
                id: 2,
                title: isChinese ? '茶具' : 'Tea Ware',
                desc: isChinese
                  ? '以锡保香、避湿之特性，承载千年茶文化的清雅与仪式感。'
                  : 'Known for preserving aroma and freshness, pewter vessels embody the spirit of Chinese tea rituals.',
                img: '/images/collection/collection2.jpg',
              },
              {
                id: 3,
                title: isChinese ? '酒具' : 'Wine Ware',
                desc: isChinese
                  ? '温润如玉的锡酒器，凝结古人待客的礼节与风雅。'
                  : 'Pewter wine sets, warm and refined, capture the etiquette and elegance of ancient gatherings.',
                img: '/images/collection/collection3.jpg',
              },
              {
                id: 4,
                title: isChinese ? '闺房用具' : 'Boudoir Utensils',
                desc: isChinese
                  ? '精巧雅致，寄寓生活情趣与东方审美的温柔格调。'
                  : 'Delicate and refined, reflecting the grace and elegance of traditional domestic life.',
                img: '/images/collection/collection4.jpg',
              },
              {
                id: 5,
                title: isChinese ? '文房用具' : 'Scholar’s Utensils',
                desc: isChinese
                  ? '炉、瓶、盒等文房器物，凝聚书香与匠心的双重气息。'
                  : 'Incense burners and ink boxes blending artistry and scholarly refinement.',
                img: '/images/collection/collection5.jpg',
              },
              {
                id: 6,
                title: isChinese ? '照明用具' : 'Lighting Ware',
                desc: isChinese
                  ? '烛台灯具，形制多样，映照古人的审美与生活之光。'
                  : 'Candleholders and lamps that illuminate both craft and culture.',
                img: '/images/collection/collection6.jpg',
              },
              {
                id: 7,
                title: isChinese ? '祭供用具' : 'Ritual Utensils',
                desc: isChinese
                  ? '承载敬祖礼仪，融信仰与美学于一体的锡制供器。'
                  : 'Ritual pewter vessels uniting belief, heritage, and artistry.',
                img: '/images/collection/collection7.jpg',
              },
              {
                id: 8,
                title: isChinese ? '雕像 饰件 花瓶 烟具' : 'Sculptures & Decorative Pewter',
                desc: isChinese
                  ? '从雕像到饰件，锡以柔韧之性塑造生命与纪念的艺术。'
                  : 'From figurines to vases and smoking sets, pewter conveys artistry and remembrance.',
                img: '/images/collection/collection8.jpg',
              },
              {
                id: 9,
                title: isChinese ? '国外锡器' : 'Overseas Pewter',
                desc: isChinese
                  ? '展示世界各地锡文化的交流与融合。'
                  : 'Showcasing global influences and the dialogue of pewter across cultures.',
                img: '/images/collection/collection9.jpg',
              },
            ].map((item) => (
              <a
                key={item.id}
                href={`/collections/${item.id}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>
                <div className="absolute bottom-0 p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm leading-snug">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

     
        {/* Events & Partnerships Section */}
      <div className="relative z-10 bg-[#0f172a]">
      <section
        id="events"
        className="bg-[#0f172a] text-white py-24 px-6 md:px-20 text-center fade"
      >
        {/* 标题与说明 */}
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-snug">
          {isChinese ? '活动与交流' : 'Events & Partnerships'}
        </h2>

        <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg mb-12">
          <p className="mb-6">
            {isChinese
              ? '从区域峰会到国际展会，博物馆积极参与文化交流与国际展览，让锡的温度跨越语言与国界。'
              : 'From regional summits to international fairs, the museum brings the story of Chinese pewter to the world—bridging traditions with dialogue, and craft with innovation.'}
          </p>

          <ul className="text-left list-disc list-inside space-y-2 text-gray-400 mx-auto max-w-2xl">
            <li>
              {isChinese
                ? '长三角一体化发展峰会'
                : 'Yangtze River Delta Integration Development Summit'}
            </li>
            <li>
              {isChinese
                ? '中法文化交流论坛'
                : 'Sino-French Cultural Exchange Forum'}
            </li>
            <li>
              {isChinese
                ? '中国国际进口博览会'
                : 'China International Import Expo'}
            </li>
            <li>
              {isChinese
                ? '中国国际旅游交易会'
                : 'China International Tourism Expo'}
            </li>
            <li>
              {isChinese
                ? '中国道口锡器文化节'
                : 'China Daokou Tinware Cultural Festival'}
            </li>
          </ul>

          <p className="mt-8 text-gray-400 italic">
            {isChinese
              ? '在每一次交流中，中国锡文化都以柔韧的金属，讲述坚韧的故事。'
              : 'With every exhibition, tin speaks its universal language of light and endurance.'}
          </p>
        </div>
        {/* 活动卡片区 */}
        <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
          {[
            {
              id: 1,
              title: isChinese ? '中法文化交流论坛' : 'Sino-French Forum',
              desc: isChinese
                ? '法国学生来华，与中国工艺师共同探讨锡器的当代表达'
                : 'French students visited China to explore the contemporary expression of pewter craftsmanship with Chinese artisans.',
              img: '/images/events/event1.jpg',
            },
            {
              id: 2,
              title: isChinese ? '长三角文化峰会' : 'Yangtze Delta Summit',
              desc: isChinese
                ? '博物馆代表分享民间工艺的创新保护经验。'
                : 'Museum representatives share experiences in heritage innovation.',
              img: '/images/events/event2.jpg',
            },
            {
              id: 3,
              title: isChinese ? '锡器国际设计展' : 'Pewter Design Expo',
              desc: isChinese
                ? '展示传统锡工艺与现代设计融合的跨界作品。'
                : 'Showcasing cross-cultural pewter works blending tradition and design.',
              img: '/images/events/event3.jpg',
            },
            {
              id: 4,
              title: isChinese ? '道口锡文化节' : 'Daokou Tinware Festival',
              desc: isChinese
                ? '让传统工艺走进生活，传递手作的温度与美感。'
                : 'Bringing pewter craft into daily life through interactive festivals.',
              img: '/images/events/event4.jpg',
            },
          ].map((item) => (
            <div
              key={item.id}
              className="group block overflow-hidden rounded-xl shadow-lg bg-gray-800 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      </div>
        {/* Learning & Discovery Section */}
       <div className="relative z-10 bg-white">
        <section
          id="learning"
          className="bg-[#0f172a] text-white py-24 px-6 md:px-20 text-center fade"
        >
          {/* 标题 */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-snug">
            {isChinese ? '研学与教育' : 'Learning & Discovery'}
          </h2>

          {/* 双语介绍 */}
          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg mb-16">
            <p>
              {isChinese
                ? '如果说展厅是时间的剧场，那么研学，就是让观众成为演员的舞台。中国锡器博物馆开创“研学4.0”模式，让学习不再是被动接受，而是沉浸体验。'
                : 'If the exhibition hall is a theatre of time, then Learning & Discovery is the stage where visitors become performers. The museum’s Learning 4.0 program transforms education into immersive experience—welcoming children, adults, and elders alike.'}
            </p>
          </div>

          {/* 打锡工艺流程卡片 */}
         <a href="/learning" className="hover:text-red-400 transition">
          Learn More
         </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-center py-8 text-gray-400 text-sm relative z-10">
        <p>
          {isChinese
            ? '© 2025 中国锡器博物馆 | 传承匠心，用心设计'
            : '© 2025 China Pewter Museum | Designed with Heritage and Heart'}
        </p>
      </footer>
    </main>
  );
}
