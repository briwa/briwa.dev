module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')

  return {
    templateFormats: [
      'md',
      'njk',
      'html',
      'liquid'
    ],
    pathPrefix: '/',
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site'
    },
    passthroughFileCopy: true
  }
}
