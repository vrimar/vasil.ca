const isProdudction = process.env.NODE_ENV === 'production';

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' },
    }
  },
  trailingSlash: true,
  assetPrefix: isProdudction ? '/vasil.ca/' : undefined
};
