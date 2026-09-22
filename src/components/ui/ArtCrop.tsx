import React from 'react';

export interface ArtCropProps {
  image: number;
  box: [number, number, number, number]; // [x, y, w, h]
  className?: string;
  role?: string;
  ariaLabel?: string;
  alt?: string;
  style?: React.CSSProperties;
}

export const ArtCrop: React.FC<ArtCropProps> = ({
  image,
  box,
  className = '',
  role,
  ariaLabel,
  alt = '',
  style
}) => {
  const [x, y, w, h] = box;
  return (
    <div
      className={`art ${className}`}
      style={{
        aspectRatio: `${w}/${h}`,
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        ...style
      }}
      role={role}
      aria-label={ariaLabel}
    >
      <picture>
        <source srcSet={`/images/landing/artwork-${image}.webp`} type="image/webp" />
        <img
          src={`/images/landing/artwork-${image}.png`}
          alt={alt}
          width="1672"
          height="941"
          decoding="async"
          loading={image === 1 ? 'eager' : 'lazy'}
          style={{
            position: 'absolute',
            width: `${(1672 / w) * 100}%`,
            left: `${(-x / w) * 100}%`,
            top: `${(-y / h) * 100}%`,
            maxWidth: 'none',
            height: 'auto',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        />
      </picture>
    </div>
  );
};

export default ArtCrop;
