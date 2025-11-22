# Sitemap 优化说明文档

## 📋 概述

新的 sitemap.xml 已针对多语言 SEO 进行了全面优化，包含了所有英文和中文页面，共 **22 个 URL**。

## 🎯 主要改进

### 1. ✅ 添加 `x-default` 标记
```xml
<xhtml:link rel="alternate" hreflang="x-default" href="https://pewtermuseum.org/" />
```
**作用**：告诉搜索引擎，当用户的语言偏好不匹配时，应该显示哪个版本（默认英文）。

### 2. ✅ 添加 `changefreq`（更新频率）
- **首页**：`weekly` - 每周更新
- **Learning 页面**：`monthly` - 每月更新
- **Collection 页面**：`monthly` - 每月更新

**作用**：提示搜索引擎爬虫多久来抓取一次。

### 3. ✅ 优化结构和注释
- 按页面类型分组（Homepage、Learning、Collections）
- 每个 Collection 都有中英文名称注释
- 清晰的分隔符

### 4. ✅ 完整的 hreflang 标记
每个 URL 都包含三个 hreflang 标记：
- `hreflang="en"` - 英文版
- `hreflang="zh"` - 中文版
- `hreflang="x-default"` - 默认版（英文）

## 📊 页面统计

| 页面类型 | 英文版 | 中文版 | 总计 |
|---------|--------|--------|------|
| 首页 | 1 | 1 | 2 |
| Learning | 1 | 1 | 2 |
| Collections | 9 | 9 | 18 |
| **总计** | **11** | **11** | **22** |

## 🗂️ URL 结构

### 英文版（默认）
```
https://pewtermuseum.org/
https://pewtermuseum.org/learning
https://pewtermuseum.org/collections/1
https://pewtermuseum.org/collections/2
...
https://pewtermuseum.org/collections/9
```

### 中文版
```
https://pewtermuseum.org/zh/
https://pewtermuseum.org/zh/learning
https://pewtermuseum.org/zh/collections/1
https://pewtermuseum.org/zh/collections/2
...
https://pewtermuseum.org/zh/collections/9
```

## 🎨 Collection 页面列表

| ID | 英文名称 | 中文名称 |
|----|---------|---------|
| 1 | Qing Dynasty Pewter Yi Pin Guo | 清代锡一品锅 |
| 2 | Pewter-Inlaid Yixing Teapot | 威海卫紫砂锡镶壶 |
| 3 | Pewter Wine Vessels | 锡酒具 |
| 4 | Boudoir Utensils | 闺房用具 |
| 5 | Scholar's Utensils | 文房用具 |
| 6 | Lighting Ware | 照明用具 |
| 7 | Ritual Utensils | 祭供用具 |
| 8 | Sculptures & Decorative Pewter | 雕像饰件 |
| 9 | Overseas Pewter | 国外锡器 |

## 🔧 优先级设置

```xml
<priority>1.0</priority>  <!-- 首页：最高优先级 -->
<priority>0.9</priority>  <!-- Learning 页面：高优先级 -->
<priority>0.8</priority>  <!-- Collection 页面：中高优先级 -->
```

**说明**：
- `1.0` = 最重要（首页）
- `0.9` = 非常重要
- `0.8` = 重要
- 优先级范围：0.0 到 1.0

## 📅 更新日期

所有页面的 `lastmod` 都设置为：**2025-11-22**

这告诉搜索引擎这些页面最后更新的时间。

## 🌐 命名空间说明

```xml
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:xhtml="http://www.w3.org/1999/xhtml"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
```

- **标准 sitemap 命名空间**：基础 sitemap 协议
- **xhtml 命名空间**：支持多语言 hreflang 标记
- **image 命名空间**：预留用于未来添加图片信息

## 🔍 SEO 最佳实践

### 1. Hreflang 标记的作用
```xml
<!-- 英文页面 -->
<url>
  <loc>https://pewtermuseum.org/collections/1</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://pewtermuseum.org/collections/1" />
  <xhtml:link rel="alternate" hreflang="zh" href="https://pewtermuseum.org/zh/collections/1" />
  <xhtml:link rel="alternate" hreflang="x-default" href="https://pewtermuseum.org/collections/1" />
</url>
```

**搜索引擎会：**
- 英文用户搜索 "china pewter museum" → 显示 `pewtermuseum.org/`
- 中文用户搜索 "中国锡器博物馆" → 显示 `pewtermuseum.org/zh/`
- 其他语言用户 → 显示默认英文版

### 2. Changefreq 的作用
- 引导搜索引擎爬虫的抓取频率
- 不是强制性的，只是建议
- 帮助搜索引擎更有效地分配爬虫资源

### 3. Priority 的作用
- 相对优先级（仅在本站内部比较）
- 帮助搜索引擎理解哪些页面更重要
- 不影响你的网站相对于其他网站的排名

## 📤 提交到搜索引擎

### Google Search Console
1. 登录 [Google Search Console](https://search.google.com/search-console)
2. 选择你的网站
3. 点击左侧菜单 "索引" → "站点地图"
4. 输入：`https://pewtermuseum.org/sitemap.xml`
5. 点击"提交"

### Bing Webmaster Tools
1. 登录 [Bing Webmaster](https://www.bing.com/webmasters)
2. 添加你的网站
3. 提交 sitemap URL

### 百度站长平台（针对中国用户）
1. 登录 [百度站长平台](https://ziyuan.baidu.com)
2. 添加网站
3. 提交 sitemap

## ✅ 验证 Sitemap

### 在线验证工具
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Sitemap Validator](https://technicalseo.com/tools/sitemap-validator/)

### 本地验证
```bash
# 使用 curl 检查
curl https://pewtermuseum.org/sitemap.xml

# 检查 XML 格式
xmllint --noout sitemap.xml
```

## 📈 预期效果

### 短期（1-2周）
- ✅ Google 开始索引新的语言页面
- ✅ Search Console 显示已发现的 URL

### 中期（1-2个月）
- ✅ 中英文页面都出现在搜索结果中
- ✅ 用户根据语言看到对应版本
- ✅ 流量开始按语言分类

### 长期（3-6个月）
- ✅ 搜索排名稳定提升
- ✅ 多语言流量均衡增长
- ✅ 降低跳出率（用户看到自己语言的版本）

## 🔄 维护建议

### 添加新页面时
1. 同时创建英文和中文版本
2. 在 sitemap.xml 中添加两个 URL
3. 确保包含完整的 hreflang 标记
4. 提交更新后的 sitemap 到搜索引擎

### 定期检查
- **每月**：检查 Search Console 的覆盖率报告
- **每季度**：验证所有 URL 是否正常访问
- **每半年**：更新 `lastmod` 日期

## 📝 文件位置

```
public/
  └── sitemap.xml          # 本 sitemap 文件
  └── robots.txt           # 引用 sitemap
```

确保 `robots.txt` 包含：
```
Sitemap: https://pewtermuseum.org/sitemap.xml
```

## 🎯 总结

✅ **22 个 URL** 全部包含  
✅ **完整的 hreflang 标记** 支持多语言 SEO  
✅ **x-default 标记** 指定默认语言  
✅ **changefreq 和 priority** 优化爬虫行为  
✅ **清晰的结构和注释** 易于维护  

---

**创建日期**: 2025-11-22  
**格式版本**: XML Sitemap 0.9  
**状态**: ✅ 准备就绪

