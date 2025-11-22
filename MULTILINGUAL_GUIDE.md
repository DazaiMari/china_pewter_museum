# 多语言 URL 结构实现指南 | Multilingual URL Structure Guide

## 📋 概述 | Overview

成功实现了英文/中文双语 URL 结构：
- **英文主站（默认）**: https://pewtermuseum.org/
- **中文版**: https://pewtermuseum.org/zh/

## 🎯 实现功能 | Implemented Features

### 1. 多语言路由 | Multi-language Routing

#### 英文路由（默认）| English Routes (Default)
```
https://pewtermuseum.org/
https://pewtermuseum.org/learning
https://pewtermuseum.org/collections/1-9
```

#### 中文路由 | Chinese Routes
```
https://pewtermuseum.org/zh/
https://pewtermuseum.org/zh/learning
https://pewtermuseum.org/zh/collections/1-9
```

### 2. SEO 优化 | SEO Optimization

#### Hreflang 标签
每个页面自动包含 hreflang 标签，告诉搜索引擎不同语言版本的 URL：

```html
<link rel="alternate" hreflang="en" href="https://pewtermuseum.org/" />
<link rel="alternate" hreflang="zh" href="https://pewtermuseum.org/zh/" />
<link rel="alternate" hreflang="x-default" href="https://pewtermuseum.org/" />
```

#### Meta 标签动态更新
根据当前语言自动更新：
- `<title>` - 页面标题
- `<meta name="description">` - 页面描述
- `<meta name="keywords">` - 关键词
- Open Graph 标签（社交媒体分享）
- Twitter Card 标签

#### Canonical URL
自动设置正确的 canonical URL，防止重复内容影响 SEO 排名。

### 3. 搜索引擎优化策略 | Search Engine Strategy

#### 针对不同搜索关键词显示对应语言版本

**英文搜索** "china pewter museum" → Google 会显示:
```
https://pewtermuseum.org/
```

**中文搜索** "中国锡器博物馆" → Google/百度会显示:
```
https://pewtermuseum.org/zh/
```

这是通过以下方式实现的：

1. **Hreflang 标签** - 告诉搜索引擎每个 URL 对应的语言
2. **语言特定的内容和 meta 标签** - 每个版本有对应语言的内容
3. **Sitemap.xml** - 包含所有语言版本的 URL 和对应的 hreflang 引用
4. **结构化数据** - 通过 Open Graph 标签提供语言信息

### 4. 语言切换功能 | Language Switcher

- 位于导航栏右上角
- 点击切换按钮，URL 会自动更新
- 页面内容立即切换到对应语言
- 保持当前页面位置（如 /collections/1 → /zh/collections/1）

## 📁 项目文件结构 | Project Structure

```
src/
├── contexts/
│   └── LanguageContext.jsx          # 语言上下文管理
├── components/
│   ├── Navbar.tsx                   # 导航栏（含语言切换）
│   └── SEOHead.jsx                  # SEO 优化组件
├── locales/
│   └── translations.js              # 翻译文件
├── pages/
│   ├── Home.tsx
│   ├── LearningDetail.tsx
│   └── collections/
│       └── Collection[1-9].tsx
└── App.jsx                          # 主路由配置

public/
├── sitemap.xml                      # 网站地图（含多语言）
└── robots.txt                       # 搜索引擎爬虫配置
```

## 🔧 技术实现 | Technical Implementation

### 1. 语言上下文（LanguageContext）

```jsx
import { useLanguage } from './contexts/LanguageContext';

function MyComponent() {
  const { language, switchLanguage, isZh, isEn } = useLanguage();
  
  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={() => switchLanguage('zh')}>中文</button>
      <button onClick={() => switchLanguage('en')}>English</button>
    </div>
  );
}
```

### 2. SEO 组件使用

```jsx
import SEOHead from '../components/SEOHead';

function MyPage() {
  return (
    <>
      <SEOHead 
        customTitle="My Page Title"
        customDescription="My page description"
      />
      {/* 页面内容 */}
    </>
  );
}
```

### 3. 翻译系统

```jsx
import { useTranslation } from '../locales/translations';
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return <h1>{t('site.name')}</h1>;
}
```

## 🚀 部署配置 | Deployment Configuration

### Nginx 配置示例

确保服务器正确处理 SPA 路由：

```nginx
server {
    listen 80;
    server_name pewtermuseum.org;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 确保 sitemap 和 robots.txt 可访问
    location = /sitemap.xml {
        try_files $uri =404;
    }
    
    location = /robots.txt {
        try_files $uri =404;
    }
}
```

### Vite 配置

确保 `vite.config.js` 支持 SPA 路由：

```js
export default {
  // ... 其他配置
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
}
```

## 📊 Google Search Console 配置

1. **提交 Sitemap**
   - 登录 Google Search Console
   - 添加 sitemap：`https://pewtermuseum.org/sitemap.xml`

2. **验证 Hreflang 实现**
   - 使用 "国际定位" 报告检查 hreflang 标签
   - 确保没有错误或警告

3. **监控索引状态**
   - 检查英文和中文版本是否都被索引
   - 查看不同语言的搜索词表现

## 🧪 测试清单 | Testing Checklist

- [ ] 访问 `/` 显示英文版
- [ ] 访问 `/zh/` 显示中文版
- [ ] 点击语言切换按钮，URL 正确更新
- [ ] 检查页面 HTML 源码，确认 hreflang 标签存在
- [ ] 检查 meta 标签随语言切换而更新
- [ ] 测试所有路由（/collections/1-9, /learning）的英文/中文版本
- [ ] 验证 sitemap.xml 格式正确
- [ ] 验证 robots.txt 可访问

## 🔍 SEO 验证工具

- **Hreflang 测试**: https://technicalseo.com/tools/hreflang/
- **Rich Results 测试**: https://search.google.com/test/rich-results
- **PageSpeed Insights**: https://pagespeed.web.dev/

## 📝 维护注意事项

### 添加新页面时

1. 在 `App.jsx` 中添加英文和中文路由
2. 在页面组件中使用 `<SEOHead />` 组件
3. 更新 `sitemap.xml` 添加新页面的 URL
4. 在 `translations.js` 中添加翻译内容

### 更新翻译内容

编辑 `src/locales/translations.js`：

```js
export const translations = {
  en: {
    myNewKey: "My English text"
  },
  zh: {
    myNewKey: "我的中文文本"
  }
};
```

## 🎉 完成的功能

✅ 英文/中文双语 URL 结构
✅ 自动语言检测和切换
✅ SEO 优化（hreflang, meta 标签, canonical URL）
✅ Sitemap 包含所有语言版本
✅ 搜索引擎友好的多语言支持
✅ 社交媒体分享优化（Open Graph）
✅ 语言切换保持页面位置

---

**开发时间**: 2025-11-22  
**框架**: React + Vite + React Router v6  
**语言**: 英文（默认）+ 中文

