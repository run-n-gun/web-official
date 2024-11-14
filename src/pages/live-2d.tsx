import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const Live2DModelComponent = dynamic(() => import('@/app/component/live-2d'), {ssr: false})

const Example = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Script
        src="/live2dcubismcore.min.js"
        onLoad={() => {
          console.log('live2dcubismcore.min.js loaded')
          setIsLoaded(true)
        }}
      />
      {isLoaded && (
        <Live2DModelComponent />

      )}
    </div>
  );
};

export default Example;
