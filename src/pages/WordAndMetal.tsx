import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function WordAndMetal() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-400">
              Word and Metal｜铭文厅
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg md:text-xl">
              Explore the stories and poetic inscriptions engraved in pewter's surface.
              <br />探索镌刻在锡器表面的诗意铭文和故事。
            </p>
          </motion.div>

          {/* Poetry Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-white">Poetry in Metal｜金属中的诗歌</h2>
              <div className="space-y-8">
                <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-amber-400">
                  <blockquote className="text-gray-300 italic text-xl leading-relaxed mb-6">
                    "如锡之纯，如金之贵，<br />
                    匠心独运，传承千年。"
                  </blockquote>
                  <p className="text-amber-400 text-sm">— 明代工匠铭文</p>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-amber-400">
                  <blockquote className="text-gray-300 italic text-xl leading-relaxed mb-6">
                    "Pure as tin, precious as gold,<br />
                    Crafted with heart, passed down through ages."
                  </blockquote>
                  <p className="text-amber-400 text-sm">— Ming Dynasty Artisan Inscription</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-white">Inscription Techniques｜铭文工艺</h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Engraving｜雕刻",
                    desc: "Hand-carved characters using traditional tools｜使用传统工具手工雕刻文字",
                    icon: "✍️"
                  },
                  {
                    step: "2", 
                    title: "Casting｜铸造",
                    desc: "Characters formed during the casting process｜在铸造过程中形成的文字",
                    icon: "🔥"
                  },
                  {
                    step: "3",
                    title: "Inlaying｜镶嵌",
                    desc: "Gold or silver inlaid characters｜镶嵌金银文字",
                    icon: "✨"
                  }
                ].map((technique, i) => (
                  <div key={i} className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                      {technique.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">{technique.icon}</span>
                        <h3 className="text-xl font-semibold text-white">{technique.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{technique.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Calligraphy Styles Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-16"
          >
            <h3 className="text-3xl font-semibold mb-8 text-center text-amber-400">Calligraphy Styles｜书法风格</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { style: "Seal Script｜篆书", period: "Ancient｜古代", desc: "Earliest Chinese writing style" },
                { style: "Clerical Script｜隶书", period: "Han Dynasty｜汉朝", desc: "Official script of the Han dynasty" },
                { style: "Regular Script｜楷书", period: "Tang Dynasty｜唐朝", desc: "Standard modern Chinese script" },
                { style: "Running Script｜行书", period: "Song Dynasty｜宋朝", desc: "Semi-cursive flowing style" }
              ].map((calligraphy, i) => (
                <div key={i} className="text-center p-6 bg-gray-700 rounded-lg">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-black font-bold text-lg mx-auto mb-4">
                    {calligraphy.style.split('｜')[0].charAt(0)}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{calligraphy.style}</h4>
                  <p className="text-amber-400 text-sm mb-2">{calligraphy.period}</p>
                  <p className="text-gray-300 text-sm">{calligraphy.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Famous Inscriptions Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h3 className="text-3xl font-semibold mb-8 text-amber-400">Famous Inscriptions｜著名铭文</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Imperial Vessel｜皇家器皿",
                  inscription: "御制锡器，万世永宝",
                  translation: "Imperial pewter vessel, treasured for eternity",
                  period: "Qing Dynasty｜清朝"
                },
                {
                  title: "Scholar's Teapot｜文人茶壶",
                  inscription: "茶香四溢，文思泉涌",
                  translation: "Tea fragrance fills the air, literary thoughts flow like spring water",
                  period: "Ming Dynasty｜明朝"
                }
              ].map((item, i) => (
                <div key={i} className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                  <h4 className="text-xl font-semibold text-white mb-4">{item.title}</h4>
                  <div className="bg-gray-900 p-6 rounded-lg mb-4">
                    <p className="text-2xl text-amber-400 mb-2">{item.inscription}</p>
                    <p className="text-gray-300 italic">{item.translation}</p>
                  </div>
                  <p className="text-amber-400 text-sm">{item.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
