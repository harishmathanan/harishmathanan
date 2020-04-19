
module.exports = function(config) {

  // returns all posts
  config.addCollection('post', collection => {
    return collection.getFilteredByGlob('posts/*.md')
  });

  // returns the last 5 posts
  config.addCollection('home', collection => {
    const arr = collection.getFilteredByGlob('posts/*.md')
    return arr.slice(Math.max(arr.length - 5, 0))  
  });

  config.addPassthroughCopy("img");
  config.addPassthroughCopy("css");
};
