import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Collection2() {
  const [isChinese, setIsChinese] = useState(true);

  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans min-h-screen">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isChinese ? '清代龙纹锡壶' : 'Qing Dragon Pewter Pot'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isChinese 
                ? '纹饰精致，寓意祥瑞，是锡器雕刻艺术的代表'
                : 'Detailed dragon engravings symbolizing prosperity — a fine example of pewter craftsmanship'
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
                src="/images/collection/collection2.jpg"
                alt={isChinese ? '清代龙纹锡壶' : 'Qing Dragon Pewter Pot'}
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

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '历史背景' : 'Historical Background'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '清代锡器工艺在明代基础上进一步发展，龙纹装饰成为皇室和贵族器物的标志。这件锡壶的龙纹雕刻精细入微，体现了清代工匠对细节的极致追求。'
                    : 'Qing Dynasty pewter craftsmanship evolved from Ming foundations, with dragon motifs becoming symbols of imperial and noble vessels. The intricate dragon engravings on this pot exemplify the Qing artisans\' pursuit of perfection in detail.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '雕刻工艺' : 'Engraving Techniques'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '采用传统錾刻工艺，龙纹线条流畅有力，层次分明。工匠运用深浅不同的雕刻技法，营造出立体感强烈的视觉效果。每一道纹路都经过精心打磨，展现出金属的天然美感。'
                    : 'Employing traditional chiseling techniques, the dragon motifs feature fluid and powerful lines with distinct layers. Artisans used varying depths of engraving to create strong three-dimensional effects, with every line meticulously polished to reveal the natural beauty of metal.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '象征意义' : 'Symbolic Meaning'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '龙在中国文化中象征着权力、威严和祥瑞。这件锡壶上的龙纹不仅具有装饰功能，更承载着祈福纳祥的美好寓意。它反映了清代社会对传统文化的重视和传承。'
                    : 'In Chinese culture, dragons symbolize power, majesty, and auspiciousness. The dragon motifs on this pewter pot serve not only decorative purposes but also carry blessings and good fortune. It reflects the Qing society\'s emphasis on traditional cultural heritage.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '艺术价值' : 'Artistic Value'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '这件锡壶是清代锡器艺术的典型代表，其精湛的雕刻技艺和丰富的文化内涵，使其成为研究清代工艺美术的重要实物。它不仅具有实用价值，更是一件珍贵的艺术品。'
                    : 'This pewter pot is a quintessential example of Qing Dynasty pewter art. Its exquisite engraving techniques and rich cultural significance make it an important artifact for studying Qing Dynasty decorative arts. Beyond its utilitarian value, it stands as a precious work of art.'
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
