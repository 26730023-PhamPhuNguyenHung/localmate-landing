import React, { useState } from 'react';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean; // True cho LCP / Hero images
  fallbackSrc?: string;
  aspectRatio?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  fallbackSrc = '/logo.png',
  aspectRatio,
  className,
  style,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const combinedStyle: React.CSSProperties = {
    maxWidth: '100%',
    height: height ? 'auto' : undefined,
    display: 'block',
    ...(aspectRatio ? { aspectRatio } : {}),
    ...style
  };

  return (
    <img
      src={imgSrc}
      alt={alt || ''}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={handleError}
      className={className}
      style={combinedStyle}
      {...rest}
    />
  );
};
