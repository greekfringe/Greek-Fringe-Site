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
          // The property ID; the tracking code won't be generated without it
          trackingId: "G-TXEBNWYXF7",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 0,
          // Enables Google Optimize using your container Id
          optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
          // Enables Google Optimize Experiment ID
          experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
          // Set Variation ID. 0 for original 1,2,3....
          variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
          // Defers execution of google analytics script after page load
          defer: false,
          // Any additional optional fields
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          cookieDomain: "example.com",
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
