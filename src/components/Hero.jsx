import React from 'react'
import heropic from '../assets/images/heropic.png'

const Hero = () => {
  return (
    <div className='bg-blue-700'>
      <section id="hero" className="max-w-7xl mx-auto flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
            <article className="sm:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-white">
                  Hi! I'm Rodwin
                </h2>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-white">
                    I am a software engineer with extensive experience of over 2 years.
                </p>
                <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-white">
                    My expertise is to create web sites and web apps.
                </p>
            </article>
            <img className="w-1/2" src={heropic} alt="Hero Pic" />
      </section>
    </div>
  )
}

export default Hero