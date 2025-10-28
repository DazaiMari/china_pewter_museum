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
              {isChinese ? '錾花墨玉提梁鱼形锡茶壶' : 'Engraved Pewter Teapot with Jade Handle in the Shape of a Fish'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isChinese 
                ? '造型生动，寓意吉祥，锡艺与雕饰的完美结合'
                : 'Lively form and auspicious meaning — a perfect harmony of metalcraft and artistry'
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
                alt={isChinese ? '錾花墨玉提梁鱼形锡茶壶' : 'Engraved Pewter Teapot with Jade Handle in the Shape of a Fish'}
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
                  {isChinese ? '历史背景' : 'Historical Background'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '鱼形锡壶盛行于清末至民国时期，是锡器造型艺术中的代表作之一。此类器物多为民间匠人精工手作，兼具实用与观赏功能，常见于茶具陈设与节庆馈赠。鱼在中国传统文化中象征富足与吉庆，“鱼跃有余”寓意生活丰盈安泰，反映了当时社会的美好愿景与审美趣味。'
                    : 'Fish-shaped pewter teapots became popular from the late Qing Dynasty to the early Republic period, representing one of the most distinctive achievements in pewter design. Handcrafted by skilled artisans, these pieces combined practicality with ornamental elegance and were often presented as gifts or used for tea display. In Chinese culture, the fish symbolizes abundance and prosperity — the saying “year after year with surplus” conveys people’s wishes for wealth and harmony, reflecting both the optimism and refined taste of the era.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '工艺技艺' : 'Craftsmanship'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '壶身以优质锡铸造，通体錾刻鱼鳞、波纹与卷云纹饰，工艺细腻严谨，鳞片层次分明、线条流畅。鱼眼嵌红玛瑙珠，晶莹温润，令器物更具神采。提梁以墨玉雕制，两端嵌接锡质件，坚固而富质感。壶盖置于鱼身上方，与背鳍造型自然衔接，结构稳妥。整体经多道錾刻、打磨与抛光工序完成，金属光泽柔和，手工质感丰富。'
                    : 'The teapot is cast from high-quality pewter, its surface finely engraved with fish scales, waves, and swirling cloud motifs. The workmanship is meticulous — each scale is clearly defined and rhythmically arranged. The eyes are inlaid with red agate, giving the fish a vivid and spirited expression. The handle is carved from black jade, joined securely with pewter fittings for strength and elegance. The lid is set atop the fish’s back, seamlessly integrated with the dorsal fin design. The entire piece is carefully chased, polished, and hand-finished, producing a gentle metallic sheen and a smooth tactile quality.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '造型特点' : 'Design Features'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '整器以鲤鱼为形，壶首为流，鱼腹饱满，鱼尾高翘作装饰。提梁弯曲自然，配合墨玉质地，呈现古雅之韵。壶底刻有波浪纹饰，与鱼身呼应，寓意“游于清波、丰年有余”。整体比例匀称，构思巧妙，写实中见装饰美，凝聚工艺师高超的造型功力与艺术感悟。'
                    : 'The vessel takes the form of a carp, with the fish’s mouth serving as the spout, its body forming the main chamber, and the tail elegantly arched as a decorative element. The jade handle curves naturally, adding a subtle contrast in texture and color. The base is adorned with wave patterns that echo the fish’s flowing form, symbolizing movement and vitality. Balanced in proportion and lively in spirit, the piece achieves both structural harmony and artistic grace.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '艺术价值' : 'Artistic Value'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '此件錾花墨玉提梁鱼形锡茶壶兼具民间艺术的灵动与金属工艺的精致，是清末民初锡艺创新的代表之作。其造型寓意吉祥，工艺繁复细腻，展现出中国传统手工艺“以形寓意、以器载道”的精神内涵。作为集雕錾、嵌饰与造型于一体的精品，它在锡器艺术史与民俗文化研究中均具有重要的艺术与收藏价值。'
                    : 'This engraved pewter teapot with jade handle in the shape of a fish exemplifies the fusion of liveliness and refinement found in late Qing pewter craftsmanship. Its form embodies auspicious symbolism, while its exquisite technique reflects the aesthetic ideal of “conveying meaning through form.” Combining engraving, inlay, and sculptural modeling, the work stands as a masterpiece of traditional Chinese metal artistry and an important object for the study of folk craftsmanship and symbolic design in early modern China.'
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
