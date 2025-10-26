import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function HallOfOrigins() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation Bar */}
      <Navbar />


      {/* Hero Section */}
      <section className="pt-20 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-400">
              Hall of Origins｜起源厅
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg md:text-xl">
              Discover the birth of tin — where fire, earth, and human hands first met.
              <br />探索锡的诞生——火、土与人类双手最初相遇的地方。
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-white">The Ancient Art｜古老工艺</h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Tin has been used by humans for over 4,000 years. In ancient China, tin was considered one of the five precious metals, 
                alongside gold, silver, copper, and iron. The art of pewter making reached its peak during the Ming and Qing dynasties.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                锡被人类使用已有4000多年的历史。在古代中国，锡被认为是五大贵金属之一，与金、银、铜、铁并列。锡器制作工艺在明清时期达到巅峰。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">Ancient mining techniques｜古代采矿技术</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">Traditional smelting methods｜传统冶炼方法</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">Handcrafting tools｜手工制作工具</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-6 text-amber-400">Featured Artifacts｜精选文物</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-400 pl-4">
                  <h4 className="font-semibold text-white mb-2">Ancient Tin Vessel｜古代锡器</h4>
                  <p className="text-gray-400 text-sm mb-2">Ming Dynasty (1368-1644)｜明代</p>
                  <p className="text-gray-300 text-sm">A beautifully crafted vessel showcasing traditional Chinese pewter artistry.</p>
                </div>
                <div className="border-l-4 border-amber-400 pl-4">
                  <h4 className="font-semibold text-white mb-2">Traditional Tools｜传统工具</h4>
                  <p className="text-gray-400 text-sm mb-2">Hand-forged iron｜手工锻造铁器</p>
                  <p className="text-gray-300 text-sm">Tools used by master craftsmen for centuries.</p>
                </div>
                <div className="border-l-4 border-amber-400 pl-4">
                  <h4 className="font-semibold text-white mb-2">Mining Artifacts｜采矿文物</h4>
                  <p className="text-gray-400 text-sm mb-2">Ancient mining equipment｜古代采矿设备</p>
                  <p className="text-gray-300 text-sm">Equipment used to extract tin from the earth.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-amber-400">Historical Timeline｜历史时间线</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">2000 BC</div>
                <h4 className="font-semibold text-white mb-2">Bronze Age｜青铜时代</h4>
                <p className="text-gray-300 text-sm">First use of tin in bronze alloys｜锡首次用于青铜合金</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">1368</div>
                <h4 className="font-semibold text-white mb-2">Ming Dynasty｜明朝</h4>
                <p className="text-gray-300 text-sm">Peak of Chinese pewter craftsmanship｜中国锡器工艺巅峰</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">2017</div>
                <h4 className="font-semibold text-white mb-2">Museum Founded｜博物馆成立</h4>
                <p className="text-gray-300 text-sm">China Pewter Museum established｜中国锡器博物馆成立</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
