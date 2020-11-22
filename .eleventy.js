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

    eleventyConfig.addFilter("dateformat", function(dateIn) {
        const day = new Intl.DateTimeFormat('cs-CZ', { day: 'numeric' }).format(dateIn);
        const month = new Intl.DateTimeFormat('cs-CZ', { month: 'numeric' }).format(dateIn);
        const year = new Intl.DateTimeFormat('cs-CZ', { year: 'numeric' }).format(dateIn);
        //console.log(`${day}. ${month}. ${year}`);

        return `${day}. ${month}. ${year}`;
    });

    eleventyConfig.addFilter('slicejs', function (dataIn, count) {
        return dataIn.slice(0, count);
    });

    return {
        dir: {
            input: "web",
            output: "docs",
            includes: "_includes"
        }
    }
};
