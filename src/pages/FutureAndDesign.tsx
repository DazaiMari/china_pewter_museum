import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function FutureAndDesign() {
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
              Future and Design｜未来厅
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg md:text-xl">
              Experience the intersection of traditional craftsmanship and modern innovation.
              <br />体验传统工艺与现代创新的交汇点。
            </p>
          </motion.div>

          {/* Innovation Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-white">Modern Applications｜现代应用</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600">
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">Contemporary Design｜当代设计</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Modern designers are reimagining pewter for contemporary living, creating pieces that honor tradition while meeting today's needs.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    现代设计师正在重新构想锡器的当代用途，创造既尊重传统又满足现代需求的作品。
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600">
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">Sustainable Craft｜可持续工艺</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Pewter's recyclability and durability make it an ideal material for sustainable design practices.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    锡器的可回收性和耐用性使其成为可持续设计实践的理想材料。
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-8 text-amber-400">Innovation Showcase｜创新展示</h3>
              <div className="space-y-4">
                {[
                  { tech: "3D Printing Integration｜3D打印集成", color: "bg-green-400", desc: "Combining traditional craft with digital fabrication" },
                  { tech: "Smart Pewter Objects｜智能锡器", color: "bg-blue-400", desc: "IoT-enabled pewter products for modern homes" },
                  { tech: "Digital Craft Tools｜数字工艺工具", color: "bg-purple-400", desc: "Advanced tools for precision crafting" },
                  { tech: "Collaborative Design｜协作设计", color: "bg-yellow-400", desc: "Global artisan networks and shared knowledge" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{item.tech}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Technology Integration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-16"
          >
            <h3 className="text-3xl font-semibold mb-8 text-center text-amber-400">Technology Integration｜技术融合</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Design｜数字设计",
                  icon: "💻",
                  features: ["CAD Modeling｜CAD建模", "Virtual Prototyping｜虚拟原型", "3D Visualization｜3D可视化"],
                  desc: "Using modern software to design and prototype pewter objects"
                },
                {
                  title: "Smart Manufacturing｜智能制造",
                  icon: "🤖",
                  features: ["Precision Tools｜精密工具", "Quality Control｜质量控制", "Automated Processes｜自动化流程"],
                  desc: "Advanced manufacturing techniques for consistent quality"
                },
                {
                  title: "Digital Heritage｜数字遗产",
                  icon: "📱",
                  features: ["AR Experiences｜AR体验", "Virtual Tours｜虚拟参观", "Interactive Learning｜互动学习"],
                  desc: "Preserving and sharing traditional knowledge digitally"
                }
              ].map((tech, i) => (
                <div key={i} className="text-center p-6 bg-gray-700 rounded-lg">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-4">{tech.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{tech.desc}</p>
                  <div className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Future Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h3 className="text-3xl font-semibold mb-8 text-amber-400">Future Vision｜未来愿景</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <h4 className="text-2xl font-semibold text-white mb-6">Preserving Tradition｜传承传统</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  While embracing modern technology, we remain committed to preserving the traditional techniques and cultural significance of pewter craftsmanship.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  在拥抱现代技术的同时，我们仍然致力于保护锡器工艺的传统技术和文化意义。
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <h4 className="text-2xl font-semibold text-white mb-6">Inspiring Innovation｜激发创新</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We believe that the future of pewter lies in the creative fusion of ancient wisdom with contemporary innovation.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  我们相信锡器的未来在于古代智慧与当代创新的创造性融合。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
