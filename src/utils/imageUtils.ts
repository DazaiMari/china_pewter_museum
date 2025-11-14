/**
 * 图片工具函数
 * 支持 CDN 加速，通过环境变量配置 CDN 域名
 */

/**
 * 获取图片的完整 URL
 * 如果配置了 CDN 域名，则使用 CDN，否则使用相对路径
 * 
 * @param imagePath 图片路径，例如 '/images/about/about1.jpg'
 * @returns 完整的图片 URL
 * 
 * @example
 * getImageUrl('/images/about/about1.jpg')
 * // 如果 VITE_CDN_URL=https://cdn.example.com
 * // 返回: 'https://cdn.example.com/images/about/about1.jpg'
 * // 否则返回: '/images/about/about1.jpg'
 */
export function getImageUrl(imagePath: string): string {
  // 移除开头的斜杠（如果有），确保路径格式正确
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // 获取 CDN URL（从环境变量）
  // @ts-ignore - Vite 环境变量类型已在 vite-env.d.ts 中定义
  const cdnUrl = import.meta.env.VITE_CDN_URL || '';
  
  // 如果配置了 CDN URL，则使用 CDN
  if (cdnUrl) {
    // 确保 CDN URL 不以斜杠结尾，路径以斜杠开头
    const baseUrl = cdnUrl.endsWith('/') ? cdnUrl.slice(0, -1) : cdnUrl;
    return `${baseUrl}/${cleanPath}`;
  }
  
  // 否则使用相对路径（本地或同域）
  return `/${cleanPath}`;
}

/**
 * 获取多个图片 URL
 * @param imagePaths 图片路径数组
 * @returns 图片 URL 数组
 */
export function getImageUrls(imagePaths: string[]): string[] {
  return imagePaths.map(path => getImageUrl(path));
}

/**
 * 预加载图片
 * @param imageUrl 图片 URL
 * @returns Promise，图片加载完成后 resolve
 */
export function preloadImage(imageUrl: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = imageUrl;
  });
}

/**
 * 批量预加载图片
 * @param imageUrls 图片 URL 数组
 * @returns Promise，所有图片加载完成后 resolve
 */
export function preloadImages(imageUrls: string[]): Promise<void[]> {
  return Promise.all(imageUrls.map(url => preloadImage(url)));
}

