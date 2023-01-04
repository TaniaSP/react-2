module.exports = {
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: '/search',
        destination: '/',
      },
      {
        source: '/search/:queryParam*',
        destination: '/',
      },
    ]
  },
}