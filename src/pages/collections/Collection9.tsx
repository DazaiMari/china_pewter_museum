import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function Collection9() {
  const [isChinese, setIsChinese] = useState(true);
  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans min-h-screen">
      {/* Navigation */}
      <Navbar isChinese={isChinese} onLanguageToggle={() => setIsChinese(!isChinese)} />
      <section className="pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isChinese ? '当代设计系列4' : 'Contemporary Pewter Series 4'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isChinese 
                ? '传统工艺与现代审美的结合，赋予锡器新的生命'
                : 'A fusion of heritage and modern aesthetics, giving new life to traditional craft'
              }
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6"
            >
              <img
                src="/images/collection/collection4.jpg"
                alt={isChinese ? '当代设计系列4' : 'Contemporary Pewter Series 4'}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/collection/collection4-detail1.jpg"
                  alt="Modern Design Detail"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="/images/collection/collection4-detail2.jpg"
                  alt="Contemporary Style"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '设计特色' : 'Design Features'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '这一系列作品展现了当代设计师对锡器艺术的独特理解。通过简约的线条和现代的造型语言，重新定义了锡器在当代生活中的美学价值。'
                    : 'This series showcases contemporary designers\' unique understanding of pewter art. Through simple lines and modern sculptural language, it redefines the aesthetic value of pewter in contemporary life.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '材料探索' : 'Material Exploration'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '设计师们大胆尝试锡器与其他现代材料的结合，如玻璃、木材、陶瓷等，创造出丰富的质感和层次感。这种跨界融合为传统锡器注入了新的活力。'
                    : 'Designers boldly experiment with combining pewter and other modern materials such as glass, wood, and ceramics, creating rich textures and layers. This cross-boundary fusion injects new vitality into traditional pewter.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '生活美学' : 'Life Aesthetics'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '这些作品不仅仅是艺术品，更是现代生活美学的体现。它们完美融入当代家居环境，为日常生活增添诗意和温度。'
                    : 'These works are not merely art pieces but embodiments of modern life aesthetics. They seamlessly integrate into contemporary home environments, adding poetry and warmth to daily life.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '未来展望' : 'Future Vision'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '这一系列作品代表了锡器艺术的发展方向。它们证明了传统工艺在当代设计中的无限可能，为锡器文化的传承和发展开辟了新的道路。'
                    : 'This series represents the direction of pewter art development. They prove the infinite possibilities of traditional craftsmanship in contemporary design, opening new paths for the inheritance and development of pewter culture.'
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-8 text-gray-400 text-sm">
        <p>
          {isChinese 
            ? '© 2025 中国锡器博物馆 | 传承匠心，用心设计' 
            : '© 2025 China Pewter Museum | Designed with Heritage and Heart'
          }
        </p>
      </footer>
    </main>
  );
}
