import { useMemo } from 'react';
import { getImageUrl } from '../utils/imageUtils';

/**
 * React Hook: 获取图片 URL（支持 CDN）
 * 
 * @param imagePath 图片路径，例如 '/images/about/about1.jpg'
 * @returns 完整的图片 URL
 * 
 * @example
 * const imageUrl = useImageUrl('/images/about/about1.jpg');
 * <img src={imageUrl} alt="About" />
 */
export function useImageUrl(imagePath: string): string {
  return useMemo(() => getImageUrl(imagePath), [imagePath]);
}

/**
 * React Hook: 获取多个图片 URL
 * 
 * @param imagePaths 图片路径数组
 * @returns 图片 URL 数组
 */
export function useImageUrls(imagePaths: string[]): string[] {
  return useMemo(() => imagePaths.map(path => getImageUrl(path)), [imagePaths]);
}

