import React from 'react';
import { getImageUrl } from '../utils/imageUtils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

/**
 * 优化的图片组件，自动支持 CDN
 * 
 * @example
 * <Image 
 *   src="/images/about/about1.jpg" 
 *   alt="About" 
 *   className="rounded-lg"
 * />
 */
export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  fallback = '/images/logo.png',
  ...props 
}) => {
  const imageUrl = getImageUrl(src);
  const fallbackUrl = getImageUrl(fallback);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackUrl) {
      target.src = fallbackUrl;
    }
  };

  return (
    <img
      src={imageUrl}
      alt={alt}
      loading="lazy"
      onError={handleError}
      {...props}
    />
  );
};

