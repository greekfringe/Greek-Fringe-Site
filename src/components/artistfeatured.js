import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

//  STYLES ...
import featuredStyles from "../styles/artistfeatured.module.scss"
import "../styles/index.scss"

function ArtistFeatured (){

  // GETTING DATA FROM GRAPHQL ...
  const data = useStaticQuery(graphql`
    query {
      contentfulFeaturedArtists {
        title1
        image1 {
          description
          fluid (quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        typeOfArt1
        description1 {
          json
        }
        link1
        title2
        image2 {
          description
          fluid (quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        typeOfArt2
        description2 {
          json
        }
        link2
      }
    }
  `)  

//   # // GETTING DATA FOR MARKDOWN PLUGIN ...
//   allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           name
//           alt
//           type
//           link
//           description
//                 featuredImg {
//                   childImageSharp {
//                     fluid (quality: 100){
//                       ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// } 

  return (
    <div>
      <ol>
        {/* LOOPING TO WITHDRAW THE NECESSARY DATA FROM MARKDOWN DOCUMENTS ... */}
        {/* {data.allMarkdownRemark.edges.map((edge) => {  
          return (
            <div className={featuredStyles.wrapper}>

              <h2
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease">{edge.node.frontmatter.name}</h2> 
              <div className={featuredStyles.img}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="500"
              data-sal-easing="ease">
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
                <a href={edge.node.frontmatter.link} target="_blank" rel="noreferrer" alt="Go to artist website">
                  <span className={featuredStyles.hidden}>
                  Link to artist personal website
                  </span>
                  <button className="buttonW" alt="Go to artist website"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-duration="800"
                  data-sal-easing="ease">LEARN MORE</button> 
                </a>        
              </div>
            </div>
          )
        })} */}
        <div className={featuredStyles.wrapper}>
          <h2
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="800"
          data-sal-easing="ease">
            {data.contentfulFeaturedArtists.title1}
          </h2> 
          <div className={featuredStyles.img}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="500"
          data-sal-easing="ease">
            <Img 
              fluid= {data.contentfulFeaturedArtists.image1.fluid}
              alt= {data.contentfulFeaturedArtists.image1.description}
            />
          </div>

          <h3 className={featuredStyles.about}>About</h3>

          <div className={featuredStyles.aboutflex}> 
            <div className={featuredStyles.textWithLines}>
              <p>{data.contentfulFeaturedArtists.typeOfArt1}</p>
            </div>
            <div className={featuredStyles.text}>
              <p>{documentToReactComponents(data.contentfulFeaturedArtists.description1.json)}</p>
            </div> 
            <a href={data.contentfulFeaturedArtists.link1} target="_blank" rel="noreferrer" alt="Go to artist website">
              <span className={featuredStyles.hidden}>
              Link to artist personal website
              </span>
              <button className="buttonW" alt="Go to artist website"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease">LEARN MORE</button> 
            </a>        
          </div>
        </div>
        <div className={featuredStyles.wrapper}>
          <h2
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="800"
          data-sal-easing="ease">
            {data.contentfulFeaturedArtists.title2}
          </h2> 
          <div className={featuredStyles.img}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="500"
          data-sal-easing="ease">
            <Img 
              fluid= {data.contentfulFeaturedArtists.image2.fluid}
              alt= {data.contentfulFeaturedArtists.image2.description}
            />
          </div>

          <h3 className={featuredStyles.about}>About</h3>

          <div className={featuredStyles.aboutflex}> 
            <div className={featuredStyles.textWithLines}>
              <p>{data.contentfulFeaturedArtists.typeOfArt2}</p>
            </div>
            <div className={featuredStyles.text}>
              <p>{documentToReactComponents(data.contentfulFeaturedArtists.description2.json)}</p>
            </div> 
            <a href={data.contentfulFeaturedArtists.link2} target="_blank" rel="noreferrer" alt="Go to artist website">
              <span className={featuredStyles.hidden}>
              Link to artist personal website
              </span>
              <button className="buttonW" alt="Go to artist website"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease">LEARN MORE</button> 
            </a>        
          </div>
        </div>
      </ol>
    </div>
  )

}

export default ArtistFeatured