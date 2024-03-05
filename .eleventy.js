// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};

// _data/randomName.js
const names = ['Olivia', 'Noah', 'Emma', 'Liam', 'Amelia', 'Oliver'];

module.exports = function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
};