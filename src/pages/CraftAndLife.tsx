import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function CraftAndLife() {
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
              Craft and Life｜匠艺厅
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg md:text-xl">
              Experience how pewter became part of daily life through utensils, tea sets, and rituals.
              <br />见证锡器如何通过器皿、茶具和仪式成为日常生活的一部分。
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Tea Culture｜茶文化",
                desc: "Pewter tea sets were essential for traditional Chinese tea ceremonies, keeping tea warm and enhancing flavor.",
                descCn: "锡制茶具是传统中国茶道的重要组成部分，保温效果佳，能提升茶香。",
                icon: "🍵",
                features: ["Heat retention｜保温", "Flavor enhancement｜提香", "Traditional design｜传统设计"]
              },
              {
                title: "Daily Utensils｜日常器皿",
                desc: "From bowls to plates, pewter utensils were common in households, valued for their durability and beauty.",
                descCn: "从碗到盘子，锡制器皿在家庭中很常见，以其耐用性和美观性而受到重视。",
                icon: "🍽️",
                features: ["Durability｜耐用性", "Beauty｜美观性", "Practical use｜实用价值"]
              },
              {
                title: "Ritual Objects｜仪式用品",
                desc: "Pewter was used in religious and ceremonial contexts, symbolizing purity and permanence.",
                descCn: "锡器用于宗教和仪式场合，象征着纯洁和永恒。",
                icon: "🕯️",
                features: ["Purity｜纯洁", "Permanence｜永恒", "Sacred use｜神圣用途"]
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-amber-400">{item.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{item.desc}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.descCn}</p>

                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-16"
          >
            <h3 className="text-3xl font-semibold mb-8 text-center text-amber-400">Crafting Process｜制作工艺</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Mining｜采矿", desc: "Extract tin ore from the earth｜从地下开采锡矿石" },
                { step: "2", title: "Smelting｜冶炼", desc: "Purify tin through heating｜通过加热提纯锡" },
                { step: "3", title: "Casting｜铸造", desc: "Pour molten tin into molds｜将熔化的锡倒入模具" },
                { step: "4", title: "Finishing｜精加工", desc: "Polish and decorate the piece｜抛光并装饰成品" }
              ].map((process, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{process.title}</h4>
                  <p className="text-gray-300 text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h3 className="text-3xl font-semibold mb-8 text-amber-400">Featured Collection｜精选藏品</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Tea Set｜茶具", period: "Qing Dynasty｜清朝", desc: "Complete pewter tea ceremony set" },
                { name: "Dining Bowls｜餐具", period: "Ming Dynasty｜明朝", desc: "Traditional household pewter bowls" },
                { name: "Ritual Vessels｜礼器", period: "Song Dynasty｜宋朝", desc: "Ceremonial pewter vessels" }
              ].map((item, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="w-full h-32 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Image Placeholder｜图片占位符</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.name}</h4>
                  <p className="text-amber-400 text-sm mb-2">{item.period}</p>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
