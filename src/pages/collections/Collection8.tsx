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
              {isChinese ? '錾花三足鼎式香炉' : 'Fine-Engraved Tripod Incense Burner'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isChinese 
                ? '清雅鼎形，花鸟满工'
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
                alt={isChinese ? '錾花三足鼎式香炉' : 'Fine-Engraved Tripod Incense Burner'}
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
                    ? '香炉为中国传统器具中最具文化象征的种类之一，常见于书斋、佛堂及闺房空间，用以焚香静心、清气怡神。此件錾花三足鼎式香炉约制于清末民初，承袭明清金属香具之制，同时融入地方工艺师的创新理念，呈现出庄重而富文人气息的器物风格。'
                    : 'The incense burner holds a central place in Chinese ritual and domestic culture, symbolizing purity and contemplation. This fine-engraved tripod incense burner, made in the late Qing to early Republic period, continues the lineage of traditional bronze-inspired forms while reflecting local innovation in tin craftsmanship. Its elegant proportions and refined surface make it both a functional vessel and a work of literati taste.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '工艺技艺' : 'Craftsmanship'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '炉体以精炼锡铸造，三足承鼎，双耳对称。全器通体满工錾花，工匠以细錾描绘花卉与鸟雀纹样，纹线清晰，布局匀整。花瓣以点錾衬地，叶脉与羽翎刻画细腻，金属表面经打磨抛光后泛出柔和银光。口沿处饰以铜质包边，既增强强度，又增色层次。整体工艺规整精湛，显见当时锡器工坊的高水平。'
                    : 'Cast in high-quality tin, the vessel stands on three animal-head feet with paired loop handles on each side. The entire surface is decorated with dense hand-chiseled floral and bird motifs, each petal and feather delicately rendered. The background is filled with fine dotted patterns, producing a subtle contrast of light and shadow. The rim is reinforced with a thin copper band, enhancing both durability and visual depth. The polished surface emits a soft silvery luster, typical of mature tin craftsmanship.'
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
                    : 'The form follows the ancient tripod cauldron, with a wide mouth and deep belly supported by robust legs. The floral-and-bird frieze around the body conveys wishes for prosperity and longevity, while the scroll and honeycomb patterns add rhythmic texture. The design achieves harmony between solidity and elegance, function and ornament.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '艺术价值' : 'Artistic Value'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '此香炉体现了晚清至民初锡器工艺中“以古为新”的审美取向。其錾刻细腻，构图饱满，既保留传统礼器的端庄格调，又呈现生活化的温度。作为文人案头与香道空间的常用器具，它不仅是嗅觉与仪式之器，更是修身与静心的媒介，代表了中国金属艺术从礼器向生活美学的转化过程。'
                    : 'This incense burner exemplifies the refined aesthetics of late Qing and early Republican tinwork—where ritual dignity meets domestic grace. Beyond its practical role in incense rituals, it embodies the ideal of inner cultivation through everyday objects. As a masterpiece of engraved tin art, it reveals how traditional Chinese metalcraft evolved from ceremonial symbolism to an expression of serene, lived beauty.'
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
