module.exports = {
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