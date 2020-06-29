module.exports = {
    publicPath: '', // fixme : should this be '' or '/'?
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/sass/_main.scss";`
            }
        }
    }
};