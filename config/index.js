const path = require('path')
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const config = {
  projectName: 'Internet_Hospital_consumer',
  date: '2022-1-10',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [

  ],
  defineConstants: {},
  alias: {
    '@actions': path.resolve(__dirname, '..', 'src/actions'),
    '@assets': path.resolve(__dirname, '..', 'src/assets'),
    '@components': path.resolve(__dirname, '..', 'src/components'),
    '@constants': path.resolve(__dirname, '..', 'src/constants'),
    '@reducers': path.resolve(__dirname, '..', 'src/reducers'),
    '@styles': path.resolve(__dirname, '..', 'src/styles'),
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    '@config': path.resolve(__dirname, '..', 'src/config'),
  },
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  mini: {
    plugins : [
      // // 使用 ParallelUglifyPlugin 并行压缩输出JS代码
      // new ParallelUglifyPlugin({
      //   // 传递给 UglifyJS的参数如下：
      //   uglifyJS: {
      //     output: {
      //       /*
      //        是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，
      //        可以设置为false
      //       */
      //       beautify: false,
      //       /*
      //        是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
      //       */
      //       comments: false
      //     },
      //     compress: {
      //       /*
      //        是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用
      //        不大的警告
      //       */
      //       warnings: false,
      //
      //       /*
      //        是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句
      //       */
      //       drop_console: true,
      //
      //       /*
      //        是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 5, 默认为不
      //        转换，为了达到更好的压缩效果，可以设置为false
      //       */
      //       collapse_vars: true,
      //
      //       /*
      //        是否提取出现了多次但是没有定义成变量去引用的静态值，比如将 x = 'xxx'; y = 'xxx'  转换成
      //        var a = 'xxxx'; x = a; y = a; 默认为不转换，为了达到更好的压缩效果，可以设置为false
      //       */
      //       reduce_vars: true
      //     }
      //   },
      //   test: /.js$/g,
      //   include: [],
      //   exclude: [],
      //   cacheDir: '',
      //   workerCount: '',
      //   sourceMap: false
      // }),
    ],
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/]
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  // //压缩配置
  // webpackChain(chain, webpack) {
  //   if (process.env.NODE_ENV !== 'development') {//只在生产环境下生效
  //     chain.mode("production");
  //     chain.optimization.minimize(true);
  //     chain.plugin("terser").use(TerserPlugin, [
  //       {
  //         cache: true,
  //         extractComments: false,
  //         parallel: true,
  //         terserOptions: {
  //           output: {
  //             comments: false
  //           },
  //           compress: {
  //             pure_funcs: ["console.log"],//过滤掉打印
  //           }
  //         }
  //       }
  //     ]);
  //   }
  // },
  h5: {
    esnextModules: ['taro-ui-vue'],
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
