module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addFilter("svgContents", function(file) {
        const fs = require('fs');

        let relativeFilePath = `.${file}`

        let data = fs.readFileSync(relativeFilePath, function(err, contents) {
            if (err) return err
            return contents
        });

        return data.toString('utf8')
    });

    return {
        dir: {
            input: "web",
            output: "docs",
            includes: "_includes"
        }
    }
};
