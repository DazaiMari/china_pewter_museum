import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * 结构化数据组件 - 让 Google 在搜索结果中显示 Logo
 * 使用 Schema.org 标记
 */
export default function StructuredData() {
  const { isZh } = useLanguage();

  useEffect(() => {
    // 移除旧的结构化数据（如果存在）
    const oldScript = document.querySelector('script[data-type="structured-data"]');
    if (oldScript) {
      oldScript.remove();
    }

    // 创建结构化数据
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Museum",
      "name": isZh ? "中国锡器博物馆" : "China Pewter Museum",
      "alternateName": isZh ? "China Pewter Museum" : "中国锡器博物馆",
      "url": "https://pewtermuseum.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pewtermuseum.org/images/logo.png",
        "width": 600,
        "height": 60
      },
      "image": "https://pewtermuseum.org/images/bg-museum.jpg",
      "description": isZh 
        ? "中国锡器博物馆位于中国苏州黎里古镇，是中国规模最大、最具代表性的锡器专题博物馆。"
        : "The China Pewter Museum, located in Lili Ancient Town, Suzhou, China, is China's largest institution dedicated to pewter culture and preservation.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lili Ancient Town, Wujiang District",
        "addressRegion": "Suzhou, Jiangsu Province",
        "addressCountry": "CN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "31.0",
        "longitude": "120.6"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:30",
        "closes": "16:30"
      },
      "sameAs": [
        "https://www.youtube.com/@chinaPewterMuseum"
      ],
      "priceRange": isZh ? "免费参观" : "Free admission",
      "foundingDate": "2017",
      "founder": {
        "@type": "Person",
        "name": isZh ? "徐鹏林" : "Xu Penglin"
      }
    };

    // 创建并添加 script 标签
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'structured-data');
    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);

    // 清理函数
    return () => {
      const scriptToRemove = document.querySelector('script[data-type="structured-data"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [isZh]);

  return null; // 这个组件不渲染任何内容
}

