module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/styles/settings/_settings.bootstrap.scss";
                    @import "@/assets/styles/settings/_settings.tools.scss";
                    @import "@/assets/styles/settings/_settings.colors.scss";
                    @import "@/assets/styles/settings/_settings.typo.scss";
               `
            }
        }
    }
};
