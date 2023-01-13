import React from 'react'
import Resume from '../../assets/Resume.pdf'


const CTA = () => {
  return (
        <div className="cta">
            <a data-aos="fade-right" href={Resume} download className='btn'>Resume</a>
            <a data-aos="fade-left" href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
    )
}

export default CTA
