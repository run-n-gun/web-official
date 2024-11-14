import React from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const Live2DModelComponent = dynamic(() => import('@/app/component/live-2d'), {ssr: false})

const Example = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Script
        src="/live2dcubismcore.min.js"
        strategy="afterInteractive" // 페이지가 인터랙티브 상태가 된 이후에 로드
        onLoad={() => console.log('live2dcubismcore.min.js loaded')}
      />
      <Live2DModelComponent />
    </div>
  );
};

export default Example;
