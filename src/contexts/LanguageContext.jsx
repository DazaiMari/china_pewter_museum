import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 根据 URL 判断当前语言
  const getCurrentLanguage = () => {
    return location.pathname.startsWith('/zh') ? 'zh' : 'en';
  };

  const [language, setLanguage] = useState(getCurrentLanguage());

  // 监听 URL 变化，更新语言状态
  useEffect(() => {
    const currentLang = getCurrentLanguage();
    if (currentLang !== language) {
      setLanguage(currentLang);
    }
  }, [location.pathname]);

  // 切换语言
  const switchLanguage = (newLang) => {
    if (newLang === language) return;

    let newPath = location.pathname;
    
    if (newLang === 'zh') {
      // 切换到中文：添加 /zh 前缀
      if (!newPath.startsWith('/zh')) {
        newPath = '/zh' + newPath;
      }
    } else {
      // 切换到英文：移除 /zh 前缀
      if (newPath.startsWith('/zh')) {
        newPath = newPath.replace(/^\/zh/, '') || '/';
      }
    }

    navigate(newPath);
    setLanguage(newLang);
  };

  const value = {
    language,
    switchLanguage,
    isZh: language === 'zh',
    isEn: language === 'en',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

