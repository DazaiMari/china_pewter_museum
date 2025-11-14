/**
 * 图片工具使用示例
 * 
 * 本文件展示了如何使用 CDN 图片工具
 * 实际使用时，请参考以下示例更新你的组件
 */

import React from 'react';
import { getImageUrl, useImageUrl } from './imageUtils';
import { Image } from '../components/Image';

// ============================================
// 方式一：使用工具函数（函数组件）
// ============================================
export function Example1() {
  // 直接使用工具函数
  const imageUrl = getImageUrl('/images/about/about1.jpg');
  
  return (
    <img 
      src={imageUrl} 
      alt="About" 
      className="rounded-lg"
    />
  );
}

// ============================================
// 方式二：使用 React Hook（推荐）
// ============================================
export function Example2() {
  // 使用 Hook，自动处理依赖
  const imageUrl = useImageUrl('/images/about/about1.jpg');
  
  return (
    <img 
      src={imageUrl} 
      alt="About" 
      className="rounded-lg"
    />
  );
}

// ============================================
// 方式三：使用 Image 组件（最推荐）
// ============================================
export function Example3() {
  // 使用封装好的 Image 组件，自动支持 CDN 和错误处理
  return (
    <Image 
      src="/images/about/about1.jpg" 
      alt="About" 
      className="rounded-lg"
    />
  );
}

// ============================================
// 方式四：批量处理多个图片
// ============================================
export function Example4() {
  const images = [
    '/images/about/about1.jpg',
    '/images/about/about2.jpg',
    '/images/about/about3.jpg',
    '/images/about/about4.jpg',
  ];
  
  // 批量获取 URL
  const imageUrls = images.map(path => getImageUrl(path));
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {imageUrls.map((url, index) => (
        <img 
          key={index}
          src={url} 
          alt={`About ${index + 1}`} 
          className="rounded-lg"
        />
      ))}
    </div>
  );
}

// ============================================
// 方式五：在现有代码中迁移
// ============================================
// 原来的代码：
// <img src="/images/about/about1.jpg" alt="About" />
//
// 迁移后的代码（方式 A - 使用工具函数）：
export function Example5A() {
  return (
    <img 
      src={getImageUrl('/images/about/about1.jpg')} 
      alt="About" 
    />
  );
}

// 迁移后的代码（方式 B - 使用 Image 组件，推荐）：
export function Example5B() {
  return (
    <Image 
      src="/images/about/about1.jpg" 
      alt="About" 
    />
  );
}

// ============================================
// 注意事项
// ============================================
// 1. 所有图片路径必须以 /images/ 开头
// 2. 如果配置了 VITE_CDN_URL，图片会自动通过 CDN 加载
// 3. 如果未配置，图片从当前域名加载（向后兼容）
// 4. Image 组件已包含懒加载和错误处理

