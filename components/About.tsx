import React from 'react'
import { useRef } from 'react'
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useRefScrollProgress from "../hooks/refViewportProgress";

const About = () => {

    const { scrollYProgress } = useViewportScroll();

    const AboutTitle = () => {
        const first = useRef(null);
        const {end, start} = useRefScrollProgress(first)

        const x = useTransform(scrollYProgress, [start! / 3, end!], [-80, 0]);
        const opacity = useTransform(scrollYProgress, [start! / 3, end!], [0, 1]);

        return <>
          <motion.h1 
            ref={first}
            style={{
                x,
                opacity
            }}
            className="text-4xl font-bold text-white"
          >
              ABOUT
          </motion.h1>
          <motion.span 
            style={{
                opacity
            }}
          className="w-full h-0.5 rounded-xl bg-teal-500"/>
        </>
    }

    const AboutContent = () => {
        const first = useRef(null);
        const {end, start} = useRefScrollProgress(first)

        const opacity = useTransform(scrollYProgress, [start! / 5, end! / 1.4], [0, 1]);

        return <motion.div 
          ref={first}
          style={{
              opacity
          }}
          className="flex flex-col relative gap-12 font-medium justify-center items-start"
        >
          <span 
              className="flex flex-col gap-3"
          >
              <h2 className="text-teal-300 text-2xl">Hi, I am Mijael</h2>
              <p>
                I am a self-taught Front-End Developer from Argentina. <br/>
                My programming journey started in 2017, but I became a consistent student in January 2021.<br/>
                <br/>
                I have been using my computer as far back as i can remember, reason why i developed a great love and pure passion for technology. 
              </p>
          </span>
          <span 
              className="flex flex-col gap-3"
          >
              <h2 className="text-teal-300 text-2xl">What defines me?</h2>
              <p>
                I can not have a day without doing or learning useful stuff to reach my dreams. I am persistent and highly motivated by the future that awaits me. The goal of all my days is to advance and do my best to do things right and keep growing in the world of programming<br/>
                <br/>
                With me you will have a responsible, honest and highly motivated guy who will enjoy a teamwork environment and will do his best to do things right and keep growing in the world of programming.
              </p>
          </span>
          <span 
              className="flex flex-col gap-2"
          >
              <h2 className="text-teal-300 text-2xl">Hobbies</h2>
              <p>
                  - I enjoy learning French, German and English.<br/>
                  - Learn and experiment with softwares like Photoshop/3ds Max/Blender.<br/>
                  - Sing & listen to music and playing it with my guitar and piano.<br/>
                  - I go to the gym to maintain my health from all the time i spend on the computer..<br/>
                  - I love gaming
              </p>
          </span>
      </motion.div>
    }

  return (
    <section title="About" id="About" className="w-full flex justify-center items-center border-t-4 border-teal-400">
        <div className="flex flex-col py-12" style={{maxWidth: "1000px", width: "90vw"}}>
            <div className="flex items-center mb-12 gap-3">
                <AboutTitle />
            </div>
            <AboutContent />
        </div>
    </section>
  )
}

export default About