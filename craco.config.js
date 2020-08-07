// const { when, whenDev, whenProd, whenCI, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const CracoAntDesignPlugin = require("craco-antd")
const path = require('path');

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  style: {
    modules: {
      localIdentName: ""
    },
    css: {
      loaderOptions: (cssLoaderOptions, { env, paths }) => { return cssLoaderOptions; }
    },
    sass: {
      loaderOptions: {
        prependData: `@import "~@/styles/common.scss";`
      }
    },
    postcss: {
      mode: "extends" /* (default value) */ || "file",
      plugins: [],
      env: {
        autoprefixer: { /* Any autoprefixer options: https://github.com/postcss/autoprefixer#options */ },
        stage: 3, /* Any valid stages: https://cssdb.org/#staging-process. */
        features: { /* Any CSS features: https://preset-env.cssdb.org/features. */ }
      },
      loaderOptions: (postcssLoaderOptions, { env, paths }) => { return postcssLoaderOptions; }
    }
  },
  eslint: {
    enable: true /* (default value) */,
    mode: "extends" /* (default value) */ || "file",
    configure: (eslintConfig, { env, paths }) => { return eslintConfig; },
    loaderOptions: (eslintOptions) => { return eslintOptions; }
  },
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: (babelLoaderOptions) => { return babelLoaderOptions; }
  },
  typescript: {
    enableTypeChecking: true /* (default value)  */
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    },
    plugins: [],
    configure: (webpackConfig, { env, paths }) => { return webpackConfig; }
  },
  jest: {
    babel: {
      addPresets: true, /* (default value) */
      addPlugins: true  /* (default value) */
    },
    configure: (jestConfig, { env, paths, resolve, rootDir }) => { return jestConfig; }
  },
  devServer: {
    // port: 9999, // 端口配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.com',
    //     ws: false, // websocket
    //     changeOrigin: true, //是否跨域
    //     secure: false,  // 如果是https接口，需要配置这个参数
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin
    }
  ]
};
