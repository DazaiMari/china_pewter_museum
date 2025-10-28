import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function Collection5() {
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
              {isChinese ? '嵌铜石榴喜鹊纹笔筒' : 'Inlaid Copper Brush Pot with Pomegranate and Magpie Motif'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isChinese 
                ? '清雅凝光，寓意吉庆的文人器具'
                : 'Grace in Silver, Auspicious Joy in Bloom'
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
                src="/images/collection/collection5.jpg"
                alt={isChinese ? '嵌铜石榴喜鹊纹笔筒' : 'Inlaid Copper Brush Pot with Pomegranate and Magpie Motif'}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/collection/collection5-detail1.jpg"
                  alt="Modern Design Detail"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="/images/collection/collection5-detail2.jpg"
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
                    ? '笔筒为文房四宝之一，自古为文人案头常设之物。此件嵌铜石榴喜鹊纹笔筒约制于清末民初，工艺精湛，造型端整，延续了传统锡器装饰技法的典雅气韵。其制式规整、色泽温润，体现出晚清至民国时期文人用器的审美取向与生活格调。'
                    : 'The brush pot, one of the essential tools of the scholar’s studio, was an indispensable object on a literati’s desk. This piece, dating from the late Qing to early Republic period, reflects the refined taste and cultural sentiment of that era. Crafted with precision and restraint, its form is upright and balanced, while its silvery sheen conveys both purity and quiet elegance—an embodiment of the cultured life of scholars at the turn of the century.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '工艺技艺' : 'Craftsmanship'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '笔筒以精炼锡铸造，表面经细致打磨与抛光，光泽柔亮如银。器身装饰以嵌铜工艺完成，工匠先錾出纹样轮廓，再嵌入薄铜片，经锤合、磨平与抛光，使纹饰与器身浑然一体。嵌铜线条流畅、色泽温和，于银白锡质之上映出细腻的金属层次。整体工艺既坚实耐久，又充满温润光泽之美。'
                    : 'The pot is made of fine, polished tin, its surface meticulously burnished to a gentle silver luster. The decorative motifs are rendered through copper inlay, a technique in which artisans chisel delicate outlines into the tin surface, embed thin copper sheets, then hammer and polish them flush. The warm tone of the copper contrasts subtly with the cool sheen of the tin, producing a harmonious interplay of light and texture. This craftsmanship not only strengthens the metal structure but also enriches the visual depth of the design.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '造型特点' : 'Design Features'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '器身高约十二厘米，比例修长，口沿微外撇，下承圈足。筒壁环饰石榴与喜鹊纹样，寓意“喜上眉梢，硕果盈枝”。花枝舒展，喜鹊生动，构图饱满而不繁冗，展现出清雅而吉祥的文人气息。金锡相映，光泽柔和，极具案头陈设之美。'
                    : 'Standing about 12 centimeters tall, the brush pot features a slightly flared rim and a stable circular base. Around its body unfolds a continuous design of pomegranates and magpies, symbolizing abundance, happiness, and auspicious celebration—“joy upon joy.” The composition is full yet balanced, with lively birds and blossoming branches rendered in flowing lines. The contrast of gold-toned copper and silver-white tin gives the piece a serene yet radiant presence, ideal for both use and display.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '艺术价值' : 'Artistic Value'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '此件嵌铜石榴喜鹊纹笔筒兼具实用与陈设之美，是文房器具中极富文化意味的一类。其工艺展现了传统金属装饰的高超技法，纹饰则寄寓吉祥与雅趣，折射出文人阶层以器明志、以物养性的生活理想。作为清末民初锡器文房用品的代表，它在工艺史与美学研究中皆具有重要价值。'
                    : 'This inlaid copper brush pot represents a perfect union of function and artistry. Beyond its practical role in the scholar’s studio, it expresses the literati ideal of harmony between craftsmanship and meaning—where objects embody both elegance and aspiration. As a fine example of late Qing to early Republican tin craftsmanship, it stands as testimony to the enduring refinement of China’s metal artistry and its deep connection to scholarly aesthetics.'
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
