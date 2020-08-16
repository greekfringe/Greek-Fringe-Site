import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll'
import styled from "styled-components"

//  STYLES ...
import burgerStyles from "../styles/burger.module.scss"

const Wrapper = styled.div`
  width: 100vw;
  height: ${({ div }) => (div ? "100vh" : "100px")};
  position: fixed;
  padding: 4vw 5vw 4vw 5vw;
  display: none;
  z-index: 4;
  flex-direction: column;
  overflow: hidden;
  background-color: #EF4423; 
  transition: height 500ms ease-in-out;

  @media only screen 
  and (min-width: 0px) 
  and (max-width: 430px) {
      display: flex;
    }
`

const Row1 =  styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: auto;
`

const Logo = styled.a`
  svg {
    width: 30vw;
    height: auto;
  }
`
const Cross = styled.div`
  width: 10vw;
  height: auto;
  margin: auto 0 auto auto;
  cursor: pointer;
    svg {
      transform: ${({div}) => (div ? "rotate(45deg)" : "")};
      transition: transform 400ms ease-in-out;
    }
`

const Row2 = styled.div`
  margin-top: 5vh;
  transform: ${({div}) => (div ? "translatey(0)" : "translatey(500px)")};
  transition: opacity 200ms ease-in-out, transform 600ms ease-in-out ;
`

const Row3 = styled.div`
  height: 100%;
  display: flex;
  opacity: ${({div}) => (div ? "1" : "0")};
  flex-direction: row;
  justify-content: stretch;
  transform: ${({div}) => (div ? "translatey(0)" : "translatey(500px)")};
  transition: opacity 200ms ease-in-out, transform 600ms ease-in-out ;
  scroll-margin-top: 10px;
`


function Burger() {

  const data = useStaticQuery(graphql`

    query {
      stair: file(relativePath: {eq: "stair.png"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
      window: file(relativePath: {eq: "window.png"}) {
        id
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  
  `)


  const [div, showNav] = useState(false)

  const scroll = (anchor) => scrollTo(anchor); 
  const close = () => showNav(!div);


  const closeLogo = (anchor) => {
    if(div === true){
      scroll(anchor);
      close();
    } else {
      scroll(anchor)
    }
  } 


  

  return (
    <Wrapper div={div}>

        <Row1>
          <Logo 
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease">
          <svg data-name="Layer 1" viewBox="0 0 570 280" onClick={() => {closeLogo('#top')}}>
            <defs>
              <style>{"a011{fill:#231f20}"}</style>
            </defs>
            <path
              className="a011"
              d="M279.79 89.82h27.26v33.73a61.28 61.28 0 01-24.13 4.55q-17.49 0-26.83-9.89t-9.33-28a42.07 42.07 0 014.63-20 32.42 32.42 0 0113.25-13.48 40.33 40.33 0 0119.8-4.73 51 51 0 0121.7 4.45l-2.08 4.65a46.8 46.8 0 00-19.92-4.45q-14.62 0-23.19 9T252.38 90q0 16.7 8.14 25.11t23.92 8.42a46.42 46.42 0 0017.35-2.88v-26h-22zM357.18 71.05a43.2 43.2 0 017.48.71l-1 4.81a29 29 0 00-7.13-.86 13.85 13.85 0 00-11.53 6q-4.5 6-4.5 15.07v30.35h-5v-55h4.25l.5 9.91h.36q3.39-6.04 7.26-8.53a16.92 16.92 0 019.31-2.46zM409.23 128.1q-12 0-18.69-7.38t-6.7-20.72q0-13.14 6.47-21.06t17.45-7.92q9.71 0 15.32 6.78t5.62 18.41v4.05h-39.6q.09 11.33 5.28 17.29t14.85 6a45.75 45.75 0 008.26-.66 50.24 50.24 0 009-2.83v4.55a40.26 40.26 0 01-8.6 2.76 47.61 47.61 0 01-8.66.73zm-1.47-52.6c-5.3 0-9.54 1.75-12.75 5.24s-5.07 8.52-5.61 15.09h34q0-9.56-4.15-14.94a13.69 13.69 0 00-11.49-5.39zM477.26 128.1q-12 0-18.69-7.38t-6.7-20.72q0-13.14 6.47-21.06t17.45-7.92q9.7 0 15.32 6.78t5.62 18.41v4.05h-39.6q.11 11.33 5.28 17.29t14.85 6a46 46 0 008.27-.66 50.43 50.43 0 009-2.83v4.55a40.19 40.19 0 01-8.59 2.76 47.64 47.64 0 01-8.68.73zm-1.47-52.6q-7.94 0-12.74 5.24t-5.62 15.09h34q0-9.56-4.15-14.94a13.68 13.68 0 00-11.49-5.39zM528 103l28.07-30.85h6.07l-21.66 23.43L564 127.09h-6l-20.91-27.77-9 8.2v19.57h-5V52.83h5v35l-.35 15.17zM255.15 252.34h-8.6V178.4h41.22v7.6h-32.62v27.1h30.65v7.63h-30.65zM330.55 195.9a33.26 33.26 0 016.63.61L336 204.3a28.42 28.42 0 00-6.07-.76 14.78 14.78 0 00-11.49 5.46 20 20 0 00-4.78 13.61v29.73h-8.39v-55.43h6.93l1 10.27h.4a24.32 24.32 0 017.44-8.34 16.67 16.67 0 019.51-2.94zM353.36 181.89a5.58 5.58 0 011.42-4.22 5.24 5.24 0 017 0 5.46 5.46 0 011.47 4.19 5.57 5.57 0 01-1.47 4.23 4.93 4.93 0 01-3.49 1.39 4.86 4.86 0 01-3.54-1.39 5.72 5.72 0 01-1.39-4.2zm9.11 70.45h-8.4v-55.43h8.4zM424.72 252.34v-35.85q0-6.78-3.08-10.12T412 203q-8.7 0-12.74 4.71t-4.05 15.52v29.08h-8.4v-55.4h6.83l1.36 7.59h.4a17.16 17.16 0 017.23-6.35A23.54 23.54 0 01413 195.9q10 0 15.07 4.83t5.06 15.45v36.16zM502.26 196.91v5.31L492 203.44a18 18 0 013.64 11.07q0 8.15-5.56 13t-15.28 4.86a25.38 25.38 0 01-4.65-.41q-5.36 2.83-5.36 7.13a3.63 3.63 0 001.87 3.37q1.88 1.08 6.42 1.08h9.82q9 0 13.83 3.8t4.83 11q0 9.21-7.39 14t-21.54 4.83q-10.87 0-16.77-4.05a13.09 13.09 0 01-5.86-11.37 12.83 12.83 0 013.2-8.75 16.51 16.51 0 019.1-5 8.78 8.78 0 01-3.56-3 7.91 7.91 0 01-1.44-4.7 8.88 8.88 0 011.61-5.31 17 17 0 015.11-4.4 15 15 0 01-7-6 17.63 17.63 0 01-2.71-9.71q0-9.1 5.46-14t15.48-4.93a28.33 28.33 0 017.84 1zm-44.21 64.74a7.53 7.53 0 003.8 6.83q3.79 2.32 10.87 2.32 10.57 0 15.65-3.16t5.09-8.57q0-4.5-2.79-6.25t-10.46-1.74h-10.07q-5.72 0-8.9 2.73c-2.12 1.82-3.19 4.43-3.19 7.84zm4.56-47q0 5.81 3.28 8.8t9.16 3q12.29 0 12.29-11.94 0-12.48-12.44-12.49-5.92 0-9.11 3.19t-3.18 9.46zM543.58 253.35q-12.3 0-19.4-7.48t-7.1-20.79q0-13.4 6.6-21.29t17.72-7.89q10.43 0 16.49 6.86t6.11 18.08v5.31h-38.23q.23 9.75 4.93 14.85t13.18 5a44.71 44.71 0 0017.7-3.74v7.48a44.08 44.08 0 01-8.42 2.76 47.09 47.09 0 01-9.58.85zm-2.28-50.42a13.72 13.72 0 00-10.65 4.35q-4 4.35-4.67 12h29c0-5.29-1.19-9.35-3.54-12.16s-5.76-4.19-10.14-4.19zM100.05 2.77A94.16 94.16 0 006 96.83v180.09h188.1V96.83a94.16 94.16 0 00-94.05-94.06zm34.23 167.09l50.82 31.38v43.1l-50.82-36.25zm50.82 20.8l-47.23-29.18 47.23-34.36zM15 96.83a85 85 0 11170.09 0V116l-59.82 43.53V208L43.1 267.91H15zm43.39 171.08l71.37-52 55.34 39.49v12.51z"
            />
          </svg>
          </Logo>
          <Cross div={div} onClick={ () => {close()}} >
            <svg viewBox="0 0 37.036 37.036">
              <g
                transform="translate(769.5 1075.5)"
                fill="none"
                stroke="#000"
                strokeWidth={3}
              >
                <path transform="translate(-769.5 -1056.982)" d="M0 0L37.036 0" />
                <path transform="rotate(90 162.259 -913.241)" d="M0 0L37.036 0" />
              </g>
            </svg>
          </Cross>  
        </Row1>
        
        <Row3 div={div}>

          <div className={burgerStyles.stairsSVG}>
            <Img 
                fluid = {data.stair.childImageSharp.fluid}  
                alt="Biautifull stair logo representing Greece ireland's infinite stairs"
              />
          </div>
          <div className={burgerStyles.linkContainer}>

            <div className={burgerStyles.windowSVG}>
              <Img 
                  fluid = {data.window.childImageSharp.fluid}  
                  alt="Biautifull stair logo representing Greece ireland's infinite stairs"
                />
            </div>

            <div className={burgerStyles.linkList}>
              <ol>
                <li>
                  <button className={burgerStyles.menubtn} onClick={() => {scroll('#eventsM');close();}}>Events</button>
                </li>
                <li> 
                  <button className={burgerStyles.menubtn} onClick={() => {scroll('#featuredM');close();}}>Featured Artists</button>
                </li>
                <li> 
                  <button className={burgerStyles.menubtn} onClick={() => {scroll('#calloutM');close();}}>Artist Callout</button>
                </li>
                <li>
                <button className={burgerStyles.menubtn} onClick={() => {scroll('#aboutM');close();}}>About</button>
                </li>
                <li> 
                  <button  className={burgerStyles.menubtn} onClick={() => {scroll('#supportM');close();}}>Support</button>
                </li>
              </ol>
            </div>
          </div>  
        </Row3>

        <Row2 div={div}>
          <div className={burgerStyles.wrapper}>
            <div className={burgerStyles.container}>
              <a href="https://twitter.com/greekfringe" target="_blank" rel="noreferrer" className={burgerStyles.socialico}>
                <svg viewBox="0 0 15.667 15.667">
                <path
                  d="M7.833 15.667a7.833 7.833 0 117.833-7.833 7.842 7.842 0 01-7.833 7.833zm0-14.488a6.654 6.654 0 106.654 6.655 6.662 6.662 0 00-6.654-6.655z"
                  fill="black"
                />
                <path
                  d="M10.564 7.425a.9.9 0 00.811-.482 1.33 1.33 0 01-.877.1 3.576 3.576 0 00-.041-.17A1.6 1.6 0 008.88 5.638c.057-.023.115-.044.173-.064.078-.028.534-.1.462-.264-.061-.141-.618.107-.723.14.139-.052.367-.142.392-.3a1.107 1.107 0 00-.582.276.4.4 0 00.111-.221 3.569 3.569 0 00-1.164 1.8 2.758 2.758 0 00-.564-.453 14.67 14.67 0 00-1.908-.84 1.01 1.01 0 00.636.936 1.562 1.562 0 00-.458.055c.063.334.271.608.833.741a.683.683 0 00-.51.2.864.864 0 00.916.449c-.571.246-.233.7.232.634a1.973 1.973 0 01-2.76.074c1.874 2.553 5.946 1.51 6.553-.949a1.128 1.128 0 00.888-.335 1.812 1.812 0 01-.843-.085z"
                  fill="black"
                />
              </svg>
              </a>
              <a href="https://www.facebook.com/greekfringe/" target="_blank" rel="noreferrer" className={burgerStyles.socialico}>
                <svg viewBox="0 0 24.273 24.273">
                <defs>
                  <style>{".00,.0{fill:#0000;}.b{fill-rule:evenodd;}"}</style>
                </defs>
                <path
                  className="00"
                  d="M435.425,894.934A12.137,12.137,0,1,1,447.561,882.8,12.15,12.15,0,0,1,435.425,894.934Zm0-22.447a10.31,10.31,0,1,0,10.31,10.31A10.322,10.322,0,0,0,435.425,872.488Z"
                  transform="translate(-423.288 -870.661)"
                  fill="black"
                />
                <path
                  className="01"
                  d="M504.49,927.672h-1.667v-1.109c.122-1.048,1.853-.849,1.853-.849v-1.8h0c-.059-.014-3.443-.817-4.115,1.758a0,0,0,0,1,0,0l0,.017a13.066,13.066,0,0,0-.1,1.982h-1.445v1.972h1.534v5.363h2.234v-5.363h1.709l.193-1.972Z"
                  transform="translate(-489.71 -917.258)"
                />
                </svg>
              </a>
              <a href="https://www.instagram.com/greekfringe/" target="_blank" rel="noreferrer" className={burgerStyles.socialico}>
              <svg viewBox="0 0 24.273 24.273">
                <defs>
                  <style>{".t{fill:#000;fill-rule:evenodd}"}</style>
                </defs>
                <path
                  className="t"
                  d="M11.834.001c-3.022 0-3.449.016-4.7.073a8.912 8.912 0 00-2.946.564 6.206 6.206 0 00-3.55 3.55 8.914 8.914 0 00-.564 2.946c-.059 1.294-.073 1.708-.073 5s.014 3.709.073 5a8.915 8.915 0 00.564 2.946 6.207 6.207 0 003.55 3.55 8.915 8.915 0 002.946.564c1.295.059 1.708.073 5 .073s3.709-.014 5-.073a8.911 8.911 0 002.946-.564 6.206 6.206 0 003.55-3.55 8.906 8.906 0 00.564-2.946c.057-1.254.072-1.681.073-4.7v-.6c0-3.022-.016-3.449-.073-4.7a8.9 8.9 0 00-.564-2.946 6.205 6.205 0 00-3.55-3.55 8.909 8.909 0 00-2.946-.564c-1.254-.057-1.681-.072-4.7-.073zm8.117 5.436a1.116 1.116 0 11-1.116-1.116 1.116 1.116 0 011.116 1.116zm-7.817 10.885a4.184 4.184 0 114.184-4.184 4.184 4.184 0 01-4.184 4.184zm0-10.155a5.97 5.97 0 11-5.97 5.97 5.97 5.97 0 015.97-5.97zm0-4.32c3.351 0 3.748.013 5.072.073a6.947 6.947 0 012.331.432 4.16 4.16 0 012.382 2.382 6.952 6.952 0 01.432 2.331c.06 1.324.073 1.721.073 5.072s-.013 3.749-.073 5.072a6.953 6.953 0 01-.432 2.331 4.158 4.158 0 01-2.382 2.382 6.94 6.94 0 01-2.331.432c-1.323.06-1.72.073-5.072.073s-3.749-.013-5.072-.073a6.941 6.941 0 01-2.331-.432 4.156 4.156 0 01-2.382-2.382 6.945 6.945 0 01-.432-2.331c-.06-1.324-.073-1.721-.073-5.072s.013-3.748.073-5.072a6.944 6.944 0 01.432-2.331 4.158 4.158 0 012.382-2.382 6.949 6.949 0 012.331-.432c1.324-.06 1.721-.073 5.073-.073z"
                />
                <path
                  className="t"
                  d="M18.84 5.509a.072.072 0 11.071-.072.072.072 0 01-.071.072z"
                />
              </svg>
              </a>
              <a href="mailto:greekfringe@gmail.com" target="_blank" rel="noreferrer" className={burgerStyles.socialico}>
                <svg viewBox="0 0 24.273 16.999">
                <defs>
                  <style>{".x{fill:#000000;}"}</style>
                </defs>
                <path
                  className="x"
                  d="M1254.668,917.27h-14.284a5,5,0,0,1-4.995-4.994v-7.009a5,5,0,0,1,4.995-5h14.284a5,5,0,0,1,4.995,5v7.009A5,5,0,0,1,1254.668,917.27Zm-14.284-15.2a3.2,3.2,0,0,0-3.2,3.2v7.009a3.2,3.2,0,0,0,3.2,3.2h14.284a3.2,3.2,0,0,0,3.2-3.2v-7.009a3.2,3.2,0,0,0-3.2-3.2Z"
                  transform="translate(-1235.389 -900.271)"
                />
                <path
                  className="x"
                  d="M1275.724,936.9a.893.893,0,0,1-.534-.176l-7.289-5.386a.9.9,0,1,1,1.068-1.445l6.745,4.983,6.472-4.973a.9.9,0,0,1,1.1,1.425l-7.009,5.386A.9.9,0,0,1,1275.724,936.9Z"
                  transform="translate(-1263.587 -926.096)"
                />
                </svg>
              </a>    
              <a href="https://www.patreon.com/greekfringefest" target="_blank" rel="noreferrer">
                <button className={burgerStyles.patreonbtn}>Become a Patron</button>
              </a>
              <span></span> 
            </div>
          </div>
        </Row2>

    </Wrapper>
  )
}

export default Burger