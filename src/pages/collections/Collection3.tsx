import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function Collection3() {
  const [isChinese, setIsChinese] = useState(true);

  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans min-h-screen">
      {/* Navigation */}
      <Navbar isChinese={isChinese} onLanguageToggle={() => setIsChinese(!isChinese)} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {isChinese ? '当代设计系列' : 'Contemporary Pewter Series'}
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
                src="/images/collection/collection3.jpg"
                alt={isChinese ? '当代设计系列' : 'Contemporary Pewter Series'}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/collection/collection3-detail1.jpg"
                  alt="Modern Design Detail"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="/images/collection/collection3-detail2.jpg"
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
                  {isChinese ? '设计理念' : 'Design Philosophy'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '当代设计师在传承传统锡器工艺的基础上，融入现代设计语言和审美理念。这些作品既保持了锡器的温润质感，又具有鲜明的时代特征，展现了传统工艺在当代的无限可能。'
                    : 'Contemporary designers integrate modern design language and aesthetic concepts while preserving traditional pewter craftsmanship. These works maintain the warm texture of pewter while exhibiting distinct contemporary characteristics, showcasing the infinite possibilities of traditional craft in modern times.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '创新工艺' : 'Innovative Techniques'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '结合现代科技与传统工艺，采用新的成型技术和表面处理工艺。设计师们探索了锡器与其他材料的结合，创造出独特的视觉效果和触感体验。'
                    : 'Combining modern technology with traditional craftsmanship, employing new forming techniques and surface treatments. Designers explore the integration of pewter with other materials, creating unique visual effects and tactile experiences.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '功能创新' : 'Functional Innovation'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '当代锡器设计不仅注重美观，更强调实用性和人机工程学。设计师们重新思考锡器在现代生活中的角色，创造出既美观又实用的现代生活用品。'
                    : 'Contemporary pewter design emphasizes not only aesthetics but also functionality and ergonomics. Designers reconsider the role of pewter in modern life, creating beautiful yet practical contemporary household items.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '文化传承' : 'Cultural Heritage'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '这些当代作品体现了对传统文化的尊重和传承。设计师们通过现代设计语言重新诠释传统锡器文化，使其在当代社会中焕发新的生命力。'
                    : 'These contemporary works reflect respect for and continuation of traditional culture. Designers reinterpret traditional pewter culture through modern design language, breathing new life into it within contemporary society.'
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
