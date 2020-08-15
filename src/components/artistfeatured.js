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

      # // GETTING DATA FOR MARKDOWN PLUGIN ...
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              name
              alt
              type
              link
              description
                    featuredImg {
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

              <div className={featuredStyles.img}>
                  <Img 
                    fluid = {edge.node.frontmatter.featuredImg.childImageSharp.fluid}
                  />
              </div>

              <h3 className={featuredStyles.about}>About</h3>

              <div className={featuredStyles.aboutflex}> 
                <div className={featuredStyles.textWithLines}>
                  <p>{edge.node.frontmatter.type}</p>
                </div>
                <div className={featuredStyles.text}>
                  <p>{edge.node.frontmatter.description}</p>
                </div> 
                <a href={edge.node.frontmatter.link} target="_blank" rel="noreferrer">
                  <button className="buttonW">LEARN MORE</button> 
                </a>        
              </div>
            </div>
          )
        })}
      </ol>
    </div>
  )

}

export default ArtistFeatured