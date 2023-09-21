import React from 'react'

const AboutMe = () => {
  return (
    <section id="about" className="p-5 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mt-12 text-slate-900 dark:text-white">About Me</h2>
      <div className="max-w-screen-xl mx-auto flex flex-col space-x-12 justify-center sm:flex-row gap-12 mt-12 scroll-mt-40">
        <article className="sm:w-1/2">
          <p className="max-w-lg text-xl mt-4 text-center sm:text-left text-slate-900 dark:text-white">
            I'm Rodwin Chester Espiritu, a self-taught software engineer specializing in HTML, CSS, JavaScript, and the frameworks React.js and Vue.js. With a passion for crafting visually appealing and user-friendly websites, I bring ideas to life through clean and interactive code. My expertise in various Javascript frameworks allows me to build dynamic single-page applications and intuitive user interfaces. I thrive in collaborative environments, bridging the gap between design and functionality.
          </p>
          <p className="max-w-lg text-xl mt-4 text-center sm:text-left text-slate-900 dark:text-white">
            Skills: HTML, CSS, Javascript, React.js, Vue.js
          </p>
          <p className="max-w-lg text-xl mt-4 text-center sm:text-left text-slate-900 dark:text-white">
            Certification: Google Cloud Certified Associate Cloud Engineer
          </p>
        </article>
        <article className="sm:w-1/2">
          <h2 className="max-w-lg -ml-12 text-xl font-bold text-center sm:text-2xl sm:text-right text-slate-900 dark:text-white">
            Contact Me:
          </h2>
          <p className="max-w-lg -ml-12 text-xl mt-4 text-center sm:text-right text-slate-900 dark:text-white">
            Email: rodwinchestermail@gmail.com
          </p>
          <p className="max-w-lg -ml-12 text-xl mt-4 text-center sm:text-right text-slate-900 dark:text-white">
            Mobile Number: 0946 310 6332
          </p>
        </article>
      </div>
    </section>
  )
}

export default AboutMe