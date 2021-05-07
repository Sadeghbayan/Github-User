module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Github-User/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_mixins.scss";
          `
      }
    }
  }
};
