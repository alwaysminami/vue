module.exports = {
  chainWebpack: (config) => {
    // prefetch 기능 비활성화
    config.plugins.delete('prefetch');
  },
};