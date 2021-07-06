const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    import: false,
    localIdentName: "[local]"
  },
  
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    })
  ),
  webpack(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    config.module.rules.push({
      test: /\.less$/,
      use: [{
          loader: "css-loader"
      }, {
          loader: "less-loader",
          options: {
            lessOptions: {
               javascriptEnabled: true
            }
          }
      }]
  });
    return config;
  }
});
