export default {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' },
    }
  },
  trailingSlash: true,
  output: "export"
}
