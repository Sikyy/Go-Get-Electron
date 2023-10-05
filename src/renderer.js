/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
// 在 renderer.js 中引入您的 React 组件
import React from 'react';
import ReactDOM from 'react-dom';
import DownloadVideo from './components/DownloadVideo';
import DownloadTorrent from './components/DownloadTorrent';
import DownloadMagnet from './components/DownloadMagnet';

console.log('👋 This message is being logged by "renderer.js", included via webpack');
// 渲染 React 组件到目标元素
ReactDOM.render(<DownloadVideo />, document.getElementById('download-video'));
ReactDOM.render(<DownloadTorrent />, document.getElementById('download-torrent'));
ReactDOM.render(<DownloadMagnet />, document.getElementById('download-magnet'));
