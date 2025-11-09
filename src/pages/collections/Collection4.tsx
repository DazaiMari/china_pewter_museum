import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function Collection4() {
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
              {isChinese ? '錾花点铜喜字妆奁' : 'Engraved Pewter Boudoir Casket with Copper-Infused Alloy and “Double Happiness” Motif'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isChinese 
                ? 'Refined craftsmanship and symbolic beauty — a gentle reflection of feminine elegance'
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
                alt={isChinese ? '錾花点铜喜字妆奁' : 'Engraved Pewter Boudoir Casket with Copper-Infused Alloy and “Double Happiness” Motif'}
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
                  {isChinese ? '历史背景' : 'Historical Background'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '妆奁为古代闺阁女子日常所用之器，亦为出嫁嫁妆的重要组成部分。此件錾花点铜喜字妆奁，约制于清末至民国时期，体量虽小，却体现出当时金属工艺的精湛与审美的讲究。造型规整、纹饰繁丽，寓意吉庆圆满，是近代闺房用具中极具代表性的精品。'
                    : 'Boudoir caskets were essential personal items for women in traditional Chinese households, often serving both as daily containers and as part of a bride’s dowry. This engraved pewter casket with copper-infused alloy and “Double Happiness” design dates to the late Qing to early Republican period. Though modest in size, it reveals exquisite workmanship and the refined aesthetics of its time. Its elegant structure and auspicious decoration embody the artistry and grace of domestic life in that era.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '工艺技艺' : 'Craftsmanship'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '奁体以点铜锡合金铸造，工匠在炼锡过程中加入适量铜质，使材质更为坚实耐磨，并呈现柔润的金属光泽。通体錾刻缠枝花卉与喜字纹饰，线条细密流畅，层次分明。盖内嵌镜一面，嵌合精密，启合灵活。整体经錾刻、打磨、抛光等多道工序完成，兼具坚固性与精致感，体现出传统金属工艺的高水准。'
                    : 'The casket is cast from a copper-infused pewter alloy, in which a small amount of copper was added during smelting to enhance hardness, durability, and surface luster. The entire surface is delicately engraved with entwined floral patterns and double-happiness motifs, with precise lines and balanced composition. A mirror is inset beneath the hinged lid, fitted seamlessly for smooth opening and closing. The piece is completed through multiple stages of engraving, polishing, and finishing, achieving both structural strength and refined delicacy — a hallmark of high-level traditional metal craftsmanship.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '造型特点' : 'Design Features'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '妆奁呈长方形盒状，正面设抽屉并配铜锁，便于收纳饰物。盖面以“喜”字为中心，四周环饰四只展翼蝙蝠与缠枝花卉，寓意“福至双喜”，象征婚庆吉祥与美满团圆。整体构图对称严整，比例匀称，线条流畅，展现出闺阁器物特有的温婉秩序与装饰之美。'
                    : 'The casket has a rectangular form, with a front drawer secured by a small brass lock for storing jewelry or personal ornaments. The lid centers on the “Double Happiness” character, surrounded by four flying bats and curling floral scrolls, symbolizing “Blessings upon Double Happiness” — an auspicious wish for harmony and marital joy. The symmetrical design, clean proportions, and flowing lines evoke the order and refinement characteristic of women’s chamber furnishings in late imperial China.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '艺术价值' : 'Artistic Value'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '錾花点铜喜字妆奁兼具材质创新与文化象征的双重价值。其合金技术提升了锡器的实用性能，而纹饰设计则融入了深厚的吉祥文化与女性审美意趣。作为清末民初闺房用具的代表之作，它不仅是生活器具，更是工艺与文化融合的艺术载体，为研究近代锡器工艺及社会生活提供了珍贵的实物依据。'
                    : 'This engraved pewter boudoir casket represents a union of material innovation and cultural symbolism. The copper-alloy composition enhanced the practical strength of pewter, while its intricate decorative program reflects deep-rooted motifs of joy, fortune, and feminine grace. As a representative piece of late Qing and early Republican boudoir utensils, it transcends mere utility to become a vessel of artistic and cultural meaning, offering valuable insight into both the craftsmanship and social aesthetics of its age.'
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
