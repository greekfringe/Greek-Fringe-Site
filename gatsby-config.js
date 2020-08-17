/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* SEO */
  siteMetadata: {
    title: "Greek Frine",
    description: "Your portal to contemporary Hellenic art and music from around the globe.",
    url: "https://www.greekfringe.com", // No trailing slash allowed!
    image: "../gf.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@greekfringe",
    author: "Greek Fringe"
  },
  /* Your site config here */
  plugins: [
      `gatsby-plugin-smoothscroll`,
      `gatsby-plugin-sass`,
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-scroll-reveal`,
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Open Sans', 'Droid Serif']
          }
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/featured_artist`,
        },
      },
  ],
}
