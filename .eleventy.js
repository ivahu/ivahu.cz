module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addFilter("dateformat", function(dateIn) {
        const day = new Intl.DateTimeFormat('cs-CZ', { day: 'numeric' }).format(dateIn);
        const month = new Intl.DateTimeFormat('cs-CZ', { month: 'numeric' }).format(dateIn);
        const year = new Intl.DateTimeFormat('cs-CZ', { year: 'numeric' }).format(dateIn);
        //console.log(`${day}. ${month}. ${year}`);

        return `${day}. ${month}. ${year}`;
    });

    return {
        dir: {
            input: "web",
            output: "docs",
            includes: "_includes"
        }
    }
};
