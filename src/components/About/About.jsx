import React from 'react'
import './about.scss'
import { FaAward, FaTelegramPlane } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsClipboardCheck } from 'react-icons/bs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Brand Svg icons
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons';



const About = () => {
  return (
    <section id='about'>
      <h5 data-aos="fade-up" data-aos-anchor="#about"  data-aos-duration='900'>Get to know me a bit more</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#about"  data-aos-duration='700'>About me</h2>

      <div className="container about__container">
      <div className="stage-cube-cont" data-aos="fade-right" data-aos-anchor=".about__container"  data-aos-duration="500">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#3C873A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
             {/* Experience  */}
            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="500">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small> 1+ Years Experience</small>
            </article>

            {/* Collaborators  */}
            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="700">
                <FiUsers className='about__icon'/>
                <h5>Hackathons</h5>
                <small>2+ Worldwide</small>
            </article>

            {/* Projects  */}
            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="900">
                <BsClipboardCheck className='about__icon'/>
                <h5>Projects</h5>
                <small>2+ Completed projects</small>
            </article>
          </div>

             <p  data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1000">
               Hello, There. I'm Segun Victor Alofun but everyone calls me Banzyworld. <br />
              I am a Frontend Software Developer that specializes in building creative and intuitive frontend web applications.
              <br />
            A soccer, movie, and outdoor activity enthusiast. Interested in building full stack applications and working on ambitious projects and connecting with people. Let's build something useful together
           </p>

           <a href='#contact' className='btn btn-primary' data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1200">Let's chat <FaTelegramPlane/></a>
        </div>
      </div>
    </section>
  )
}

export default About