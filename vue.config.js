module.exports = {
  // 出力フォルダ
  outputDir: 'docs/',
  assetsDir: './',
  publicPath: './',
  // Vuetify
  transpileDependencies: ['vuetify'],
  // PWA 設定
  pwa: {
    name: 'COCOAログ解析',
    themeColor: '#FD8865',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    // アイコンのパス
    iconPaths: {
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: null,  // 設定しない
      msTileImage: null,  // 設定しない
    },
    // manifest.json の内容
    manifestOptions: {
      'name': 'COCOAログチェッカー',
      'short_name': 'COCOAログ解析',
      'description': 'iOS/Androidの約2週間の接触通知のログを解析し、自分の周りに陽性者が何人いたかを表示します。',
      'start_url': '.',
      'display': 'standalone',
      'theme_color': '#FD8865',
      'background_color': '#FD8865',
      'icons': [
        {
          'src': 'img/icons/icon.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/icon-maskable.png',
          'sizes': '192x192',
          'type': 'image/png',
          'purpose': 'maskable',
        },
      ]
    }
  }
}