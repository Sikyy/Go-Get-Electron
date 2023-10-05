import React, { useState } from 'react';

const DownloadTorrent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadClick = () => {
    setIsLoading(true);
    // 发送请求到种子下载路由
    // 这里您可以使用Fetch或Axios等库发送HTTP请求
    fetch('/torrent', {
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
        {isLoading ? 'Downloading Torrent...' : 'Download Torrent'}
      </button>
    </div>
  );
};

export default DownloadTorrent;