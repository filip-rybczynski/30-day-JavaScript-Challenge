const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    drumKit: "./src/js/drum-kit.js",
    clock: "./src/js/clock.js",
    cssVariables: "./src/js/css-var.js",
    imageGallery: "./src/js/image-gallery.js",
    citySearch: "./src/js/city-search.js",
    menu: "./src/js/menu.js",
    htmlCanvas: "./src/js/html-canvas.js",
    checklist: "./src/js/checklist.js",
    customPlayer: "./src/js/custom-player.js",
    keySequence: "./src/js/key-sequence.js",
    imageSlide: "./src/js/image-slide.js",
    tapasMenu: "./src/js/menu-challenge.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
              {
                tag: "audio",
                attribute: "src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|wav)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index", "menu"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/drum-kit.html",
      inject: true,
      chunks: ["index", "drumKit"],
      filename: "drum-kit.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/clock.html",
      inject: true,
      chunks: ["index", "clock"],
      filename: "clock.html",
    }),
        new HtmlWebpackPlugin({
      template: "./src/pages/css-variables.html",
      inject: true,
      chunks: ["index", "cssVariables"],
      filename: "css-variables.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/arrays1.html",
      inject: true,
      chunks: ["index"],
      filename: "arrays1.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/image-gallery.html",
      inject: true,
      chunks: ["index", "imageGallery"],
      filename: "image-gallery.html",
    }),
        new HtmlWebpackPlugin({
      template: "./src/pages/city-search.html",
      inject: true,
      chunks: ["index", "citySearch"],
      filename: "city-search.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/arrays2.html",
      inject: true,
      chunks: ["index"],
      filename: "arrays2.html",
    }),    
    new HtmlWebpackPlugin({
      template: "./src/pages/html-canvas.html",
      inject: true,
      chunks: ["index", "htmlCanvas"],
      filename: "html-canvas.html",
    }),
        new HtmlWebpackPlugin({
      template: "./src/pages/dev-tools.html",
      inject: true,
      chunks: ["index"],
      filename: "dev-tools.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/checklist.html",
      inject: true,
      chunks: ["index", "checklist"],
      filename: "checklist.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/custom-player.html",
      inject: true,
      chunks: ["index", "customPlayer"],
      filename: "custom-player.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/key-sequence.html",
      inject: true,
      chunks: ["index", "keySequence"],
      filename: "key-sequence.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/image-slide.html",
      inject: true,
      chunks: ["index", "imageSlide"],
      filename: "image-slide.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/reference-vs-copy.html",
      inject: true,
      chunks: ["index"],
      filename: "reference-vs-copy.html",
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/menu.html",
      inject: true,
      chunks: ["index", "tapasMenu"],
      filename: "menu.html",
    }),
  ],
};