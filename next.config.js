module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' },
    }
  },
  distDir: 'build',
  trailingSlash: true,
  outDir: 'public'
};
