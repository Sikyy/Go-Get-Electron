import React, { useState } from 'react';

const DownloadMagnet = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadClick = () => {
    setIsLoading(true);
    // 发送请求到磁力链接下载路由
    // 这里您可以使用Fetch或Axios等库发送HTTP请求
    fetch('/magnet', {
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
        {isLoading ? 'Downloading Magnet Link...' : 'Download Magnet Link'}
      </button>
    </div>
  );
};

export default DownloadMagnet;