// src/components/DownloadVideo.js

import React, { useState } from 'react';

const DownloadVideo = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadClick = () => {
    // 发送请求到视频下载路由
    setIsLoading(true);
    fetch('/download', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleDownloadClick} disabled={isLoading}>
        {isLoading ? 'Downloading...' : 'Download Video'}
      </button>
    </div>
  );
};

export default DownloadVideo;