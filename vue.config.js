module.exports = {

  publicPath: './',
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "./src/assets/scss/common.scss";`
        }
      }
    }
};
//
// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `@import "./src/assets/scss/common.scss";`
//       }
//     },
//   },
