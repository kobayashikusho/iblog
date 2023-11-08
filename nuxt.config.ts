// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore()`
          'defineStore',
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
  plugins: [
    "~/plugins/directive.ts"
  ],
  devServer: {
    port: 80,
    // host: ["0.0.0.0", "127.0.0.1", "192.168.1.7", "2409:8a60:3c28:68a0:d18:f86d:e366:6de4"]
    host: [
      { host: 'localhost', port: 80 },
      { host: '0.0.0.0', port: 80 },
      { host: '2409:8a60:3c28:68a0:d18:f86d:e366:6de4', port: 80 },
      { host: 'nuxt3.iqwq.com', port: 80 },
    ]
  },
  app: {
    buildAssetsDir: "/_xiaolin/",
    rootId: "_xiaolin",
    rootTag: "div",
    baseURL: "/",
    head: {
      htmlAttrs: {
        lang: "zh-CN"
      },
      title: "iblog",
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: "description",
          content: "hi ~ iblog, this is me one web !"
        },
        {
          name: "keywords",
          content: "xiaolin,iblog,iqwq"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        { rel: 'stylesheet', href: '/assets/css/main.css' },
        { rel: 'stylesheet', href: '/assets/css/theme.css' },
        { rel: "icon", href: "/assets/images/favicon.ico" }
      ],
      style: [],
      script: [],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required iblog' }
      ],
    }
  }
})
