const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // 设置你希望服务器监听的端口号

// 静态文件托管 - 提供 Vue 应用的静态资源
app.use(express.static(path.join(__dirname, '../dist')));

// 添加中间件来设置响应头
app.use((req, res, next) => {
  const allowedDomains = ['*'];
  // 检查请求的域名是否在允许的域名列表中
  if (allowedDomains.includes(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
    next();
  });

// 定义路由和处理程序
app.get('/api/data', (req, res) => {
  // 在这里处理请求并返回响应
  const data = { message: '这是一个示例接口'+req.headers.origin };
  res.json(data);
});

// 默认路由请求返回 Vue 应用的入口页
app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器已启动，正在监听端口号 ${port}`);
});