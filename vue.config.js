module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Shin\'s Portfolio', 
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/sass/main.scss";`
      }
    }
  }
}
