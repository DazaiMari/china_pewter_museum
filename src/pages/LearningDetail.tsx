import React, { useState } from 'react';

export default function LearningDetail() {
  const [isChinese, setIsChinese] = useState(true);

  const toggleLanguage = () => {
    setIsChinese(!isChinese);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      {/* Header with Language Toggle */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-400">
            {isChinese ? '锡器工艺学习' : 'Tin Craft Learning'}
          </h1>
          <button
            onClick={toggleLanguage}
            className="group relative px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
            aria-label={isChinese ? 'Switch to English' : '切换到中文'}
          >
            <span className="font-medium">
              {isChinese ? 'EN' : '中文'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          {isChinese 
            ? '探索传统锡器制作工艺的精髓，从融锡到打磨，体验千年传承的匠人精神。' 
            : 'Discover the essence of traditional tin craft making, from melting to polishing, experiencing the artisan spirit passed down through millennia.'
          }
        </p>
      </div>

      {/* Learning Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      {
        id: 1,
        title: isChinese ? '融锡' : 'Melting',
        subtitle: isChinese ? '融锡' : 'Melting',
        desc: isChinese
          ? '了解锡的低熔点科学，在物理与艺术交融中发现奥秘。'
          : 'Discover the science of tin’s low melting point—where physics meets art.',
        img: '/images/learning/learning1.jpg',
      },
      {
        id: 2,
        title: isChinese ? '打锤' : 'Hammering',
        subtitle: isChinese ? '打锤' : 'Hammering',
        desc: isChinese
          ? '感受金属成形的节奏与韵律。'
          : 'Feel the rhythm of metal taking form.',
        img: '/images/learning/learning2.jpg',
      },
      {
        id: 3,
        title: isChinese ? '錾花' : 'Engraving',
        subtitle: isChinese ? '錾花' : 'Engraving',
        desc: isChinese
          ? '一场耐心与创造力的考验。'
          : 'A test of patience and creativity.',
        img: '/images/learning/learning3.jpg',
      },
      {
        id: 4,
        title: isChinese ? '打磨' : 'Polishing',
        subtitle: isChinese ? '打磨' : 'Polishing',
        desc: isChinese
          ? '使用结节草进行传统打磨，感受时间与光的流动。'
          : 'Polish with traditional Jiejie grass, where sunlight and time flow together.',
        img: '/images/learning/learning3.jpg',
      },
    ].map((item, index) => (
      <article
        key={item.id}
        className="group block overflow-hidden rounded-xl shadow-lg bg-gray-800 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-amber-400 focus-within:ring-opacity-50"
        style={{
          animationDelay: `${index * 100}ms`,
          animation: 'fadeInUp 0.6s ease-out forwards',
          opacity: 0,
          transform: 'translateY(20px)'
        }}
        role="article"
        aria-labelledby={`learning-${item.id}-title`}
      >
        <div className="relative overflow-hidden">
          <img
            src={item.img}
            alt={isChinese ? `${item.title}工艺展示` : `${item.title} craft demonstration`}
            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/logo.png'; // Fallback image
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500" />
          
          {/* Step Number Badge */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
            {item.id}
          </div>
          
          {/* Hover Overlay with Learn More */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          </div>
        </div>
        
        <div className="p-6 text-left">
          <h3 
            id={`learning-${item.id}-title`}
            className="text-xl font-semibold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors duration-300"
          >
            {item.title}
            <span className="block text-sm text-gray-400 font-normal mt-1">
              {isChinese ? '传统工艺' : 'Traditional Craft'}
            </span>
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {item.desc}
          </p>
          
          {/* Progress Indicator */}
          <div className="mt-4 flex items-center space-x-2">
            <div className="flex-1 bg-gray-700 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-amber-400 to-amber-600 h-1 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(item.id / 4) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-400">
              {isChinese ? '步骤' : 'Step'} {item.id}/4
            </span>
          </div>
        </div>
      </article>
    ))}
      </div>
      
      {/* Footer Section */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">
            {isChinese ? '开始您的锡器工艺之旅' : 'Begin Your Tin Craft Journey'}
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {isChinese 
              ? '每一件锡器都承载着匠人的智慧与情感，让我们一起探索这门古老而美丽的艺术。'
              : 'Every tin craft carries the wisdom and emotion of artisans. Let\'s explore this ancient and beautiful art together.'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
