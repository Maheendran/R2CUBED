// components/ProgressiveImage.js
'use client'
// components/ProgressiveImage.js

import { useState, useEffect } from 'react';

const ProgressiveImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [blurLoaded, setBlurLoaded] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setLoaded(true);
    };
    const blurImg = new Image();
    blurImg.src = `${src}?blur=100`; // Add blur parameter to the image URL
    blurImg.onload = () => {
      setBlurLoaded(true);
    };
  }, [src]);

  return (
    <div className={`progressive-image-container ${className}`}>
      {!blurLoaded && <div className="placeholder blur"></div>}
      <img
        src={src}
        alt={alt}
        className={`progressive-image ${loaded ? 'loaded' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ProgressiveImage;
