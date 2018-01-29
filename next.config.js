// next.config.js
module.exports = {
  exportPathMap: function() {

    return {
      '/': { page: '/' },
      '/essays': { page: '/essays' },
      '/2017/its-hard-to-forego-efficiency': { page: '/2017/its-hard-to-forego-efficiency' },
      '/about': { page: '/about' },
      // '/readme.md': { page: '/readme' },
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    }
  }
}