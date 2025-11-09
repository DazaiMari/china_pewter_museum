import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function Collection2() {
  const [isChinese, setIsChinese] = useState(true);

  return (
    <main className="bg-gradient-to-b from-gray-700 to-gray-400 text-white font-sans min-h-screen">
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
              {isChinese ? '威海卫紫砂锡镶壶' : 'Pewter-Inlaid Yixing Teapot of Weihaiwei'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isChinese 
                ? '紫砂温润，锡饰生辉，地方工艺臻于化境'
                : 'The warmth of clay meets the brilliance of pewter — craftsmanship at its finest'
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
                alt={isChinese ? '威海卫紫砂锡镶壶' : 'Pewter-Inlaid Yixing Teapot of Weihaiwei'}
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
                    ? '威海卫紫砂锡镶壶兴起于十九世纪末至二十世纪初，源于当时租界贸易与工艺创新的活跃。当地匠人结合紫砂成型与锡雕装饰技艺，创制出外覆金属纹饰的壶具。二十世纪二三十年代，威海卫锡镶业达到鼎盛，作坊林立，产品远销海外，成为中国北方金属工艺的重要代表。'
                    : 'The pewter-inlaid Yixing teapot of Weihaiwei emerged in the late 19th to early 20th century, a period marked by vibrant trade and artisanal innovation in the leased territory. Local craftsmen combined traditional Yixing clay techniques with decorative pewter craftsmanship to create teapots adorned with metal reliefs. By the 1920s and 1930s, the pewter-inlay industry in Weihaiwei had reached its peak, with numerous workshops producing works that were exported to Southeast Asia and Europe, earning recognition as an important center of northern Chinese metal artistry.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '工艺技艺' : 'Craftsmanship'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '壶体以宜兴紫砂烧制而成，外层包镶精錾锡片，装饰以双龙纹、花鸟纹、寿字纹等图案。工匠采用“倒龙”“整龙”“镶龙”等技法，将龙形模片翻铸后錾刻打磨，再嵌焊于壶体之上，线条遒劲、鳞纹细腻。部分作品辅以鎏银、嵌铜，质感丰富。锡片经手工抛光后，呈现柔亮金属光泽，与紫砂本色相映成趣。'
                    : 'The teapot body is crafted from fine Yixing clay, overlaid with intricately engraved pewter sheets depicting dragons, birds, floral patterns, and longevity motifs. Artisans employed specialized techniques such as inverted casting, complete inlay, and joined relief to shape the dragon motifs — first casting the design in mold form, then engraving, hammering, and welding the pieces onto the clay surface. Some examples were further embellished with silver or copper inlay, enhancing the texture and visual depth. The polished pewter contrasts elegantly with the matte clay, creating a refined interplay of warmth and luster.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '造型特点' : 'Design Features'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '壶形圆润端稳，短流圆口，铜质提梁坚实。双龙盘绕壶身，神态生动，象征祥瑞与尊贵。整体比例匀称，层次分明，兼具陈设美感与观赏价值。壶底常刻有“威海和成锡店”或“威海和成监制”款识，为地方名坊的典型印记。'
                    : 'The vessel presents a rounded and stable form, with a short spout, broad mouth, and sturdy brass handle. Twin dragons coil dynamically around the body, symbolizing auspicious power and noble status. The composition is well-balanced and layered, combining structural harmony with aesthetic grace. The base often bears inscriptions such as “Weihai Hecheng Pewter Shop” or “Supervised by Hecheng, Weihai,” marking the hallmark of distinguished local workshops.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '艺术价值' : 'Artistic Value'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '威海卫紫砂锡镶壶以装饰性金属工艺为核心，展现了地方匠人对传统图案语言的再创造与艺术化表达。它不仅反映了近代威海卫地区手工产业的繁荣，也见证了中国金属工艺在装饰性方向上的高度成就，具有重要的历史与艺术研究价值。'
                    : 'The pewter-inlaid teapot of Weihaiwei represents the culmination of decorative metal artistry in early modern China. Its exquisite craftsmanship and symbolic ornamentation reflect the ingenuity of regional artisans in transforming traditional motifs into elegant works of art. Beyond its technical sophistication, the piece testifies to the prosperity of local craftsmanship in the early twentieth century and stands as a significant artifact in the history of Chinese pewter and decorative arts.'
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
