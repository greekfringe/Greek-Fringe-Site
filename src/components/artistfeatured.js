import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

//  STYLES ...
import featuredStyles from "../styles/artistfeatured.module.scss"
import "../styles/index.scss"

function ArtistFeatured (){

  // GETTING DATA FROM GRAPHQL ...
  const data = useStaticQuery(graphql`
    query {

      # # // GETTING DATA FOR IMG PLUGIN ...
      # img: allFile(filter: {relativeDirectory: {eq: "fa_img"}}) {
      #   nodes {
      #     id
      #       childImageSharp {
      #       fluid {
      #         ...GatsbyImageSharpFluid
      #       }
      #     }
      #   }
      # }

      # // GETTING DATA FOR MARKDOWN PLUGIN ...
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              name
              alt
              description
                    featuredImage {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }  
  `)  

  return (
    <div>
      <ol>
        {/* LOOPING TO WITHDRAW THE NECESSARY DATA FROM MARKDOWN DOCUMENTS ... */}
        {data.allMarkdownRemark.edges.map((edge) => {  
          return (
            <div className={featuredStyles.wrapper}>

              <h2>{edge.node.frontmatter.name}</h2> 

              <div>
                  <Img 
                    fluid = {edge.node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
              </div>

              <h3 className={featuredStyles.about}>About</h3>

              <div className={featuredStyles.aboutflex}> 
                <div className={featuredStyles.textWithLines}>
                  <h4>MUSIC</h4>
                </div>
                <div className={featuredStyles.text}>
                  <p>{edge.node.frontmatter.description}</p>
                </div> 
                <button class="buttonW">LEARN MORE</button>         
              </div>
            </div>
          )
        })}
      </ol>
    </div>
  )

}

export default ArtistFeatured