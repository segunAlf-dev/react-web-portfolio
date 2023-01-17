import React from 'react'
import './portfolio.css'

const Portfolio = () => {

  const projects = [ 
    { 
      name : "Holiday-Challenge",
      deployedLink: "https://phonie-hackathon-challenge.netlify.app/",
      image: require('../../assets/Phonie-Hackth.png'),
      fadeDuration:'1000'
    },
    {
      name : "nft-preview-card-component",
      deployedLink: "https://nft-preview-card-component-chalnge.netlify.app/",
      image: require('../../assets/nft-preview-card.png'),
      fadeDuration:'1100'
    },
    {
      name:"redact-project-grp6",
      deployedLink: "https://readact-hackathon-challenge.netlify.app/",
      image: require('../../assets/Readact.png'),
      fadeDuration:'1200'
    },
    {
      name: "Four-card-picture-section",
      deployedLink: "https://four-card-picture-section.netlify.app/",
      image: require('../../assets/FourcardComp.png'),
      fadeDuration:'1300'
    },
    
    {
      name:"Mini-project-html-and-css",
      deployedLink: "https://htm-and-css-mini-project.netlify.app/index.html#",
      image: require('../../assets/LandingPage.png'),
      fadeDuration:'1400'
    },
    {
      name:"react-portfolio",
      deployedLink: "https://for-timi.github.io/react-portfolio/",
      image: require('../../assets/portfolio.png'),
      fadeDuration:'1500'
    }
  ]


  return (
    <section id='portfolio'>
        <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='700'>My most recent projects</h5>
        <h2 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>My Portfolio</h2>

        <div className="container portfolio__container">

         { 
          projects.map( ({name,image,deployedLink, fadeDuration}) => (
          <article className='portfolio__item' key={name} data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration={fadeDuration}>
              <div className="portfolio__item-image">
                  <img src={image} alt={`${name} app Screenshot`} />
              </div>
              <h3>{name}</h3>

              <div className="portfolio__item-cta">
                <a className='btn' 
                  href={`https://github.com/segunAlf-dev/${name}`}
                  target='_blank'
                  rel="noreferrer"
                >GitHub</a>
                <a className='btn btn-primary' 
                  href={deployedLink}
                  target='_blank'
                  rel="noreferrer"
                >Live Demo</a>
              </div>
          </article>
           ))
         }

        </div>
    </section>
  )
}

export default Portfolio