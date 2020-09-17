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
    image: "/gf.jpg", // Path to your image you placed in the 'static' folder
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
        resolve: 'gatsby-plugin-preconnect',
        options: {
          domains: ['https://f.vimeocdn.com', 'i.vimeocdn.com', '134vod-adaptive.akamaized.net'],
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // replace "UA-XXXXXXXXX-X" with your own Tracking ID
          trackingId: "UA-175631792-1",
          head: true,
        },
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
