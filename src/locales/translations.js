export const translations = {
  en: {
    site: {
      name: "China Pewter Museum",
      description: "Exploring the art and history of Chinese pewter craftsmanship",
      keywords: "china pewter museum, pewter, Chinese pewter, tin crafts, pewter museum"
    },
    nav: {
      home: "Home",
      collections: "Collections",
      learning: "Learning",
      about: "About",
      contact: "Contact",
      language: "中文"
    },
    home: {
      hero: {
        title: "China Pewter Museum",
        subtitle: "Exploring the Art and History of Chinese Pewter Craftsmanship"
      },
      collections: {
        title: "Featured Collections",
        viewAll: "View All Collections"
      },
      about: {
        title: "About the Museum",
        description: "Dedicated to preserving and showcasing the rich heritage of Chinese pewter craftsmanship"
      }
    },
    collections: {
      title: "Collections",
      details: "View Details",
      backToList: "Back to Collections"
    },
    learning: {
      title: "Learning Center",
      subtitle: "Discover the history and techniques of pewter making"
    }
  },
  zh: {
    site: {
      name: "中国锡器博物馆",
      description: "探索中国锡器工艺的艺术与历史",
      keywords: "中国锡器博物馆, 锡器, 中国锡器, 锡工艺, 锡器博物馆"
    },
    nav: {
      home: "首页",
      collections: "馆藏",
      learning: "学习",
      about: "关于",
      contact: "联系",
      language: "English"
    },
    home: {
      hero: {
        title: "中国锡器博物馆",
        subtitle: "探索中国锡器工艺的艺术与历史"
      },
      collections: {
        title: "精选馆藏",
        viewAll: "查看所有馆藏"
      },
      about: {
        title: "关于博物馆",
        description: "致力于保护和展示中国锡器工艺的丰富遗产"
      }
    },
    collections: {
      title: "馆藏",
      details: "查看详情",
      backToList: "返回馆藏列表"
    },
    learning: {
      title: "学习中心",
      subtitle: "了解锡器制作的历史和技术"
    }
  }
};

export const useTranslation = (language) => {
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // 返回 key 作为后备
      }
    }
    
    return value || key;
  };

  return { t };
};

