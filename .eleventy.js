module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
            input: "web",
            output: "docs",
            includes: "_includes"
        }
    }
};
