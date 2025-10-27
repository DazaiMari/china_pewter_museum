import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function Collection1() {
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
              {isChinese ? '明代锡盏' : 'Ming Dynasty Pewter Cup'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isChinese 
                ? '古朴典雅，展现明代器物的温润与含蓄之美'
                : 'Elegant and understated, reflecting the refined pewter artistry of the Ming era'
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
                src="/images/collection/collection1.jpg"
                alt={isChinese ? '明代锡盏' : 'Ming Dynasty Pewter Cup'}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/collection/collection1-detail1.jpg"
                  alt="Detail 1"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="/images/collection/collection1-detail2.jpg"
                  alt="Detail 2"
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
                    ? '明代锡器制作工艺达到巅峰，这件锡盏体现了当时工匠的精湛技艺。锡器在明代不仅是实用器具，更是身份地位的象征。其温润的质感和简洁的造型，反映了明代文人的审美追求。'
                    : 'The Ming Dynasty marked the pinnacle of pewter craftsmanship. This cup exemplifies the masterful skills of Ming artisans. Pewter vessels were not merely utilitarian objects but symbols of status and refinement, reflecting the aesthetic sensibilities of Ming literati.'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '工艺特点' : 'Craftsmanship Features'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '采用传统铸造工艺，表面经过精细打磨，呈现出独特的金属光泽。器型简洁大方，线条流畅，体现了明代器物"简约而不简单"的设计理念。'
                    : 'Crafted using traditional casting techniques with meticulous surface finishing, revealing a distinctive metallic luster. The simple yet elegant form with flowing lines embodies the Ming philosophy of "simplicity without simplicity."'
                  }
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {isChinese ? '文化价值' : 'Cultural Significance'}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {isChinese 
                    ? '这件锡盏承载着深厚的文化内涵，是研究明代社会生活、工艺技术和审美观念的重要实物资料。它见证了锡器在中国传统文化中的重要地位。'
                    : 'This pewter cup carries profound cultural significance, serving as important material evidence for studying Ming Dynasty social life, craftsmanship, and aesthetic concepts. It testifies to the important role of pewter in traditional Chinese culture.'
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
