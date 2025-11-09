import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function Collection9() {
  const [isChinese, setIsChinese] = useState(true);
  return (
    <main className="bg-gradient-to-b from-gray-700 to-gray-400 text-white font-sans min-h-screen">
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
              {isChinese ? '日本 飞鸟纹磨砂瓶' : 'Japanese Matte Tin Vase with Flying Bird Motif'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isChinese 
                ? '静寂之光，金工之美'
                : 'Quiet Radiance, Refined Craft'
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
                src="/images/collection/collection9.jpg"
                alt={isChinese ? '日本 飞鸟纹磨砂瓶' : 'Japanese Matte Tin Vase with Flying Bird Motif'}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/collection/collection9-detail1.jpg"
                  alt="Modern Design Detail"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="/images/collection/collection9-detail2.jpg"
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
                  {isChinese ? '历史背景' : 'Historical Background'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '此瓶约制于二十世纪上半叶，是日本近代金工艺术中以飞鸟为题的代表作品之一。明治维新后，日本金属工艺在吸收西方金属冶炼与表面处理技术的同时，延续了传统金银错嵌与雕金技法，形成了既古雅又现代的独特审美体系。飞鸟纹题材源于古代祥瑞文化，象征高洁、自由与升华之意。'
                    : 'This vase, created in early 20th-century Japan, exemplifies the refined artistry of modern Japanese metalwork. Following the Meiji Restoration, Japanese artisans absorbed Western metal-refining and surface-finishing techniques while preserving traditional skills such as inlay, chiseling, and polishing. The flying bird motif, drawn from ancient auspicious symbolism, represents purity, transcendence, and freedom.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '工艺技艺' : 'Craftsmanship'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '器形浑圆饱满，肩部微收，颈口简洁。瓶身中段一圈环饰飞鸟纹带，构图疏密有致，飞鸟展翅于花枝之间，羽势凌空。整体线条纯净，造型比例恰到好处，体现日本工艺美学中“留白”与“克制”的精神。'
                    : 'Crafted primarily in fine tin and accented with copper, silver, and gold alloys, the vase combines matte finishing and metal inlay techniques. The surface is first sand-polished to achieve a soft, mist-like texture. The artisan then engraves the bird and floral patterns and inlays gold and silver lines to highlight movement and depth. The wings are layered with precision, the golden hues shimmering gently against the subdued gray ground—creating a sense of grace in stillness.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '造型特点' : 'Design Features'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '器形仿古鼎式，口大腹深，三足呈兽首状，稳重端庄。双侧环耳便于提携，比例匀称。纹饰以花鸟为主，辅以卷草、蜂巢地纹相衬，寓意花开富贵、岁岁平安。整体造型古雅而不失灵动，实用与审美融为一体。'
                    : 'The form is full and balanced, with a slightly constricted shoulder and plain narrow mouth. A decorative band encircles the midsection, where a bird in flight spreads its wings among flowering branches. The design embodies the Japanese sense of ma—the beauty of restraint and space—balancing strength with serenity.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '艺术价值' : 'Artistic Value'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '此瓶将东方金工传统与现代审美理念融为一体，展现了金属材料在“光泽—质感—造型”三重维度上的表现力。飞鸟的动态寓意着自由与生机，而磨砂质地则营造出时间沉静的气息，形成鲜明的视觉与精神对比。它不仅是一件金属器物，更是一种关于“寂静与生命”的艺术表达。'
                    : 'This vase reflects the synthesis of traditional Eastern craft and modern aesthetics, demonstrating the expressive potential of metal in both texture and form. The dynamic flight of the bird contrasts with the tranquil matte surface, evoking the poetic dialogue between silence and vitality. It stands not merely as an object of function but as a meditation on light, movement, and time.'
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
