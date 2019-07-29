const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' },
    }
  },
  distDir: 'build',
  exportTrailingSlash: true,
  outDir: 'public'
});
