import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery, withPrefix, Link } from "gatsby"
import Img from "gatsby-image"
import cx from 'classnames'



//  STYLES ...
import formStyles from "../styles/form.module.scss"
import "../styles/index.scss"

function Form () {

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
    }
  
  `)

  return (
    <div className={formStyles.wrapper}>

    <Helmet>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
        <script src={withPrefix('../formS.js')} type="text/javascript" />
    </Helmet>

      <div className={formStyles.header}>
        <div className={formStyles.container}>
        {/* LOGO SVG ... */}
          <Link to="/">  
          <div className={formStyles.logo}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="400"
          data-sal-easing="ease">
            <svg data-name="Layer 1" viewBox="0 0 570 280">
            <defs>
              <style>{"a011{fill:#231f20}"}</style>
            </defs>
            <path
              className="a011"
              d="M279.79 89.82h27.26v33.73a61.28 61.28 0 01-24.13 4.55q-17.49 0-26.83-9.89t-9.33-28a42.07 42.07 0 014.63-20 32.42 32.42 0 0113.25-13.48 40.33 40.33 0 0119.8-4.73 51 51 0 0121.7 4.45l-2.08 4.65a46.8 46.8 0 00-19.92-4.45q-14.62 0-23.19 9T252.38 90q0 16.7 8.14 25.11t23.92 8.42a46.42 46.42 0 0017.35-2.88v-26h-22zM357.18 71.05a43.2 43.2 0 017.48.71l-1 4.81a29 29 0 00-7.13-.86 13.85 13.85 0 00-11.53 6q-4.5 6-4.5 15.07v30.35h-5v-55h4.25l.5 9.91h.36q3.39-6.04 7.26-8.53a16.92 16.92 0 019.31-2.46zM409.23 128.1q-12 0-18.69-7.38t-6.7-20.72q0-13.14 6.47-21.06t17.45-7.92q9.71 0 15.32 6.78t5.62 18.41v4.05h-39.6q.09 11.33 5.28 17.29t14.85 6a45.75 45.75 0 008.26-.66 50.24 50.24 0 009-2.83v4.55a40.26 40.26 0 01-8.6 2.76 47.61 47.61 0 01-8.66.73zm-1.47-52.6c-5.3 0-9.54 1.75-12.75 5.24s-5.07 8.52-5.61 15.09h34q0-9.56-4.15-14.94a13.69 13.69 0 00-11.49-5.39zM477.26 128.1q-12 0-18.69-7.38t-6.7-20.72q0-13.14 6.47-21.06t17.45-7.92q9.7 0 15.32 6.78t5.62 18.41v4.05h-39.6q.11 11.33 5.28 17.29t14.85 6a46 46 0 008.27-.66 50.43 50.43 0 009-2.83v4.55a40.19 40.19 0 01-8.59 2.76 47.64 47.64 0 01-8.68.73zm-1.47-52.6q-7.94 0-12.74 5.24t-5.62 15.09h34q0-9.56-4.15-14.94a13.68 13.68 0 00-11.49-5.39zM528 103l28.07-30.85h6.07l-21.66 23.43L564 127.09h-6l-20.91-27.77-9 8.2v19.57h-5V52.83h5v35l-.35 15.17zM255.15 252.34h-8.6V178.4h41.22v7.6h-32.62v27.1h30.65v7.63h-30.65zM330.55 195.9a33.26 33.26 0 016.63.61L336 204.3a28.42 28.42 0 00-6.07-.76 14.78 14.78 0 00-11.49 5.46 20 20 0 00-4.78 13.61v29.73h-8.39v-55.43h6.93l1 10.27h.4a24.32 24.32 0 017.44-8.34 16.67 16.67 0 019.51-2.94zM353.36 181.89a5.58 5.58 0 011.42-4.22 5.24 5.24 0 017 0 5.46 5.46 0 011.47 4.19 5.57 5.57 0 01-1.47 4.23 4.93 4.93 0 01-3.49 1.39 4.86 4.86 0 01-3.54-1.39 5.72 5.72 0 01-1.39-4.2zm9.11 70.45h-8.4v-55.43h8.4zM424.72 252.34v-35.85q0-6.78-3.08-10.12T412 203q-8.7 0-12.74 4.71t-4.05 15.52v29.08h-8.4v-55.4h6.83l1.36 7.59h.4a17.16 17.16 0 017.23-6.35A23.54 23.54 0 01413 195.9q10 0 15.07 4.83t5.06 15.45v36.16zM502.26 196.91v5.31L492 203.44a18 18 0 013.64 11.07q0 8.15-5.56 13t-15.28 4.86a25.38 25.38 0 01-4.65-.41q-5.36 2.83-5.36 7.13a3.63 3.63 0 001.87 3.37q1.88 1.08 6.42 1.08h9.82q9 0 13.83 3.8t4.83 11q0 9.21-7.39 14t-21.54 4.83q-10.87 0-16.77-4.05a13.09 13.09 0 01-5.86-11.37 12.83 12.83 0 013.2-8.75 16.51 16.51 0 019.1-5 8.78 8.78 0 01-3.56-3 7.91 7.91 0 01-1.44-4.7 8.88 8.88 0 011.61-5.31 17 17 0 015.11-4.4 15 15 0 01-7-6 17.63 17.63 0 01-2.71-9.71q0-9.1 5.46-14t15.48-4.93a28.33 28.33 0 017.84 1zm-44.21 64.74a7.53 7.53 0 003.8 6.83q3.79 2.32 10.87 2.32 10.57 0 15.65-3.16t5.09-8.57q0-4.5-2.79-6.25t-10.46-1.74h-10.07q-5.72 0-8.9 2.73c-2.12 1.82-3.19 4.43-3.19 7.84zm4.56-47q0 5.81 3.28 8.8t9.16 3q12.29 0 12.29-11.94 0-12.48-12.44-12.49-5.92 0-9.11 3.19t-3.18 9.46zM543.58 253.35q-12.3 0-19.4-7.48t-7.1-20.79q0-13.4 6.6-21.29t17.72-7.89q10.43 0 16.49 6.86t6.11 18.08v5.31h-38.23q.23 9.75 4.93 14.85t13.18 5a44.71 44.71 0 0017.7-3.74v7.48a44.08 44.08 0 01-8.42 2.76 47.09 47.09 0 01-9.58.85zm-2.28-50.42a13.72 13.72 0 00-10.65 4.35q-4 4.35-4.67 12h29c0-5.29-1.19-9.35-3.54-12.16s-5.76-4.19-10.14-4.19zM100.05 2.77A94.16 94.16 0 006 96.83v180.09h188.1V96.83a94.16 94.16 0 00-94.05-94.06zm34.23 167.09l50.82 31.38v43.1l-50.82-36.25zm50.82 20.8l-47.23-29.18 47.23-34.36zM15 96.83a85 85 0 11170.09 0V116l-59.82 43.53V208L43.1 267.91H15zm43.39 171.08l71.37-52 55.34 39.49v12.51z"
            />
          </svg>
          </div>
          </Link>
          {/* STAIRS SVG ... */}
          <div className={formStyles.stairs}>
            <Img 
                fluid = {data.stair.childImageSharp.fluid}  
                alt="Biautifull stair logo representing Greece ireland's infinite stairs"
              />
          </div>
        </div>
      </div>

      

      <form class="gform" method="POST" data-email="greekfringe@gmail.com" action="https://script.google.com/macros/s/AKfycbwWyHPlFViXuJZzV9NVnl8_o8uZoc--pPvMW-xR/exec" id="form1">

      <div style={{display: "none"}} class="thankyou_message">
        <div>
          <div className="animation-container">
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_1TwnyK.json"  background="transparent"  speed="1" autoplay></lottie-player>   
          </div>
        </div>
        <div>
          <p>Thank you!</p> 
          <p>Your application has been sent!</p>
        </div>
      </div>  
        
      <div style={{display: "flex"}} class="form-elements">
        <div class={formStyles.description}>
          <div>
            <div class={formStyles.textWithLines}>
              <h4>ARTIST APPLICATION FORM</h4>
            </div>
          </div>
          <div>
            <p>Make sure your work is a good fit for our platform (and that we’re a good fit for you). Take a look at our About section to get a feel for what we do. Fill in the form below with a description of yourself and the type of work you wish to put forward.</p>
          </div>
        </div>

        
          <div class={cx(formStyles.input, formStyles.required)}>
            
              <p>First Name</p>
            
              <input type="text" name="Name" required></input>
                    
          </div>

          <div class={cx(formStyles.input, formStyles.required)}>
            
              <p>Last Name</p>
            
              <input type="text" name="Last name" required></input>
                    
          </div>

          <div class={cx(formStyles.input, formStyles.required)}>
            
              <p>Name of Act/ Artist/ Performance</p>
            
              <input type="text" name="Name of Art" required></input>
                    
          </div>

          <div class={cx(formStyles.input, formStyles.required)}>
            
              <p>email</p>
            
              <input type="email" name="email" required></input>
                    
          </div>

          <div class={cx(formStyles.input, formStyles.required)}>
            
              <p>Postcode</p>
            
              <input type="number" name="Postcode" placeholder="" required></input>
                    
          </div>

          <div class={cx(formStyles.input, formStyles.optional)}>
            
              <p>Social Media</p>
            
              <input type="text" name="Social media"  placeholder="Link to Facebook, Instagram etc."></input>
                    
          </div>

          <div class={cx(formStyles.input, formStyles.optional)}>
            
              <p>Website</p>
            
              <input type="text" name="Website" placeholder="Optional"></input>
                    
          </div>

          <div class={cx(formStyles.input, formStyles.optional)}>
            
              <p>Please provide link to samples of your work</p>
            
              <input type="text" name="Sample of work" placeholder="Optional"></input>
                    
          </div>

          <div class={cx(formStyles.input, formStyles.optional, formStyles.square)}>
            
              <p>Why do you think your work would fit in Greek Fringe</p>
            
              <textarea maxlength="1000" type="text" name="Why Your work would fit in GF" placeholder="(1000 characters max)"required></textarea>
                    
          </div>

          <div class={cx(formStyles.input, formStyles.optional, formStyles.square)}>
            
              <p>Please describe the work you wish to present at Greek Fringe</p>
            
              <textarea maxlength="1000" type="text" name="Work description" placeholder="(1000 characters max)" required></textarea>
                    
          </div>

          <div class={cx(formStyles.input, formStyles.optional)}>
            
              <p>Where did you find out the Greek Fringe?</p>
            
              <input type="text" name="Where did you find GFF" placeholder="Word of mouth, social, other"></input>
                    
          </div>

          <span class={formStyles.line}></span>
          <div class={formStyles.buttons}>
          <Link to="/">  
            <button class="buttonW">HOME</button>
          </Link>
          <button class={formStyles.submit} id="form1" type="submit" value="submit">SUBMIT NOW</button>
          </div>
        </div> 
      </form>
    </div>
  )
}

export default Form