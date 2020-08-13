/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
      `gatsby-plugin-transition-link`,
      `gatsby-plugin-smoothscroll`,
      `gatsby-plugin-sass`,
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      // Google analytics -- SEO
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: ``,    },
      },
      // Sitemap -- SEO
      {
        resolve: `gatsby-plugin-sitemap`,
        options: {
          exclude: [`/admin`, `/tags/links`]        }
      },
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
      {
        resolve: `gatsby-plugin-scroll-reveal`,
        options: {
            threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
            once: true, // Defines if animation needs to be launched once
            disable: false, // Flag for disabling animations
            
            // Advanced Options
            selector: '[data-sal]', // Selector of the elements to be animated
            animateClassName: 'sal-animate', // Class name which triggers animation
            disabledClassName: 'sal-disabled', // Class name which defines the disabled state
            rootMargin: '0% 50%', // Corresponds to root's bounding box margin
            enterEventName: 'sal:in', // Enter event name
            exitEventName: 'sal:out', // Exit event name
        }
      },
      // {
      //   resolve: 'gatsby-source-vimeo-all',
      //   options: {
      //     clientId: 'YOUR_CLIENT_ID',
      //     clientSecret: 'YOUR_CLIENT_SECRET',
      //     accessToken: 'YOUR_ACCESS_TOKEN'
      //   }
      // },
  ],
}
