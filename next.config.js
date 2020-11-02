module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/movie',
        permanent: true
      }
    ];
  }
};
