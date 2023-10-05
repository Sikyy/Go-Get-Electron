const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

// 添加以下规则来处理JSX文件
rules.push({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
