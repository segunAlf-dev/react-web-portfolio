import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5 data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='900'>What are my skills?</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='700'>My Experience</h2>


      <div className="container experience__container">
        <div className="experience__frontend" data-aos="fade-right" data-aos-anchor=".experience__container"  data-aos-duration="900">
        <h3>Frontend Development</h3>
            <div className="experience__content">
              {/* HTML  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              {/* CSS  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* JavaScript  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              {/* React  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* Tailwind  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* Jquery  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Jquery</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>

        {/* BACKEND sKILLS */}
      
        <div className="experence__backend" data-aos="fade-up" data-aos-anchor=".experience__container"  data-aos-duration="1200">
           <h3>Backend Development</h3>
            <div className="experience__content">
              {/* Node JS  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
                   {/* PYTHON  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>

              {/* MongoDB  */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article> */}

              {/* GraphQl  */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>GraphQl</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article> */}
              
              {/* MySQL  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              {/* REST  */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>REST</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article> */}

              {/* Django  */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Django</h4>
                <small className='text-light'>Basic</small>
                </div>
              </article> */}
            </div>
        </div>
            {/* CLOUD SKILLS */}
      
        <div className="experence__cloud" data-aos="fade-left" data-aos-anchor=".experience__container"  data-aos-duration="1500">
           <h3>Cloud Computing</h3>
            <div className="experience__content">
              {/* VAGRANT  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Vagrant</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
               {/* LINUX  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Linux</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
               {/* AWS  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>AWS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
               {/* ANSCIBLE  */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>Anscible</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    
    </section>
  )
}

export default Experience