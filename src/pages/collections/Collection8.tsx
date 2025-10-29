import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function Collection8() {
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
              {isChinese ? '仙鹤立像锡雕' : 'Fine-Engraved Tripod Incense Burner'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isChinese 
                ? '祥瑞长生，雅器生辉'
                : 'Grace in Form, Harmony in Craft'
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
                src="/images/collection/collection8.jpg"
                alt={isChinese ? '仙鹤立像锡雕' : 'Fine-Engraved Tripod Incense Burner'}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/collection/collection8-detail1.jpg"
                  alt="Modern Design Detail"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="/images/collection/collection8-detail2.jpg"
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
                    ? '仙鹤自古为中国文化中象征高洁、长寿与祥瑞的灵禽，常见于宫廷陈设与文人雅玩。此件仙鹤立像锡雕约制于清末民初，是锡艺由实用器向陈设艺术演进的代表之作。它体现了晚清工艺师在吸收传统造像法则的基础上，对动物形象塑造与工艺表现的高度掌握。'
                    : 'In Chinese culture, the crane symbolizes purity, longevity, and auspicious blessings. This standing tin sculpture of an immortal crane, produced in the late Qing to early Republic period, marks the transition of tin craftsmanship from utilitarian ware to decorative art. It reflects the mastery of artisans who skillfully combined traditional sculptural form with the refined techniques of metalcraft.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '工艺技艺' : 'Craftsmanship'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '全器以精炼锡铸造，辅以錾刻、嵌饰与焊接工艺完成。鹤首红冠，双目嵌蓝玻璃珠，羽翼与颈部以细錾线勾勒羽纹，层次分明。鹤身挺立于八角台座之上，台面围以栏杆，红柱与银灰相映成趣。台座脚作四曲足式，承托稳健。整体结构协调、比例匀称，细部打磨极为精致，展现出锡雕工艺的高度成熟。'
                    : 'Cast in pure tin and finished through chiseling, inlay, and soldering, the sculpture features a red-crested head with blue glass-inlaid eyes. The feathers are meticulously engraved with fine lines, giving the surface texture and rhythm. The crane stands gracefully upon an octagonal pedestal enclosed by railings with red posts, the silver-gray body contrasting elegantly against the warm accents. The four-legged base provides firm support, and every detail—from the beak to the talons—reveals exquisite workmanship.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '造型特点' : 'Design Features'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '鹤体修长，颈部微弯，双喙微启，神态生动。羽毛错落有致，金属光泽与形体韵律相得益彰。八角台座象征方圆并合，寓意天地和谐。整体造型既具礼器之庄重，又有陈设之优雅。'
                    : 'The crane’s long neck curves gently, its beak slightly open as if mid-call, exuding vitality and serenity. The layered plumage and lustrous tin finish create a play of light and shadow. The octagonal base symbolizes harmony between heaven and earth, balancing form and meaning.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '艺术价值' : 'Artistic Value'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '此件仙鹤立像将象征性与装饰性完美结合，体现了中国传统文化中“以形寓意、以器载道”的美学精神。作为锡器艺术向雕塑领域延伸的典范之作，它不仅承载祈寿纳福的文化意涵，更见证了锡艺从日常实用走向艺术表现的历史进程。'
                    : 'This sculpture seamlessly unites symbolism and artistry, embodying the traditional Chinese ideal of conveying virtue through form. As a representative of tin sculpture’s artistic maturity, it not only expresses wishes for peace and longevity but also stands as a milestone in the evolution of tin craftsmanship from household utility to fine art.'
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
