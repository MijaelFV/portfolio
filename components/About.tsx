import React from 'react'
import { useRef } from 'react'
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useRefScrollProgress from "../hooks/refViewportProgress";
import Image from 'next/image';
import { ArticleOutlined } from '@mui/icons-material';

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

        const opacity = useTransform(scrollYProgress, [start! - 0.2, end! - 0.3], [0, 1]);

        return <motion.div 
          ref={first}
          style={{
              opacity
          }}
          className="flex flex-col relative gap-12 font-medium justify-center items-start"
        >
          <div className='flex flex-col md:flex-row relative gap-5'>
              <motion.div 
                animate={{ x: [0, -5, 5, -5, 0], y: [5, -5, 5]}}
                transition={{ repeat: Infinity, duration: 5 }}
                className="flex flex-col mb-5 md:mb-0 mx-auto md:mx-0"
                style={{minWidth: 220, maxWidth: 220}}
              >
                <motion.div  
                  initial={{x: -100}}
                  whileInView={{x: 0}}
                  transition={{ type: "spring", stiffness: 100, bounce: 0.50 }} 
                  className='h-max rounded-xl border-2 border-teal-300 p-1 flex justify-center items-center'
                >
                  <Image src="/profile.jpeg" width={220} height={220} className="rounded-xl" alt="Profile photo of Mijael Flores" />
                </motion.div>
                <motion.span
                  initial={{x: -50}}
                  whileInView={{x: 0}}
                  transition={{ type: "spring", stiffness: 100, bounce: 0.50 }}
                >
                  <a
                      href="https://www.linkedin.com/in/fvmijael/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <button 
                      className='flex justify-center gap-1 items-center w-full text-lg font-medium my-1 rounded-md bg-cyan-300transition-transform hover:scale-105'
                      style={{backgroundColor:'#0E76A8'}}
                    >
                      <Image src="/linkedin.svg" width={16} height={16}  alt="linkedin logo" />
                      LinkedIn
                    </button>
                  </a>
                </motion.span>
                {/* <motion.span
                  initial={{x: -100}}
                  whileInView={{x: 0}}
                  transition={{ type: "spring", stiffness: 100, bounce: 0.50 }}
                >
                  <button 
                    className='flex justify-center gap-1 items-center w-full text-lg font-medium my-1 rounded-md bg-white text-black transition-transform hover:scale-105'
                    disabled
                  >
                    <ArticleOutlined fontSize='small' />
                    Resume
                  </button>
                </motion.span> */}
              </motion.div>
              <motion.div 
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{duration: 1}}
                  className="flex flex-col gap-3 justify-center"
              >
                  <h2 className="text-teal-300 text-2xl">Hi, I am Mijael</h2>
                  <p>
                    I am a self-taught <span className='text-emerald-300'>Full-stack Developer</span> from Argentina. <br/>
                    Currently I specialize as a <span className='text-yellow-400'>Front-end</span>  but I am able to perform the role of <span className='text-rose-400'>Back-end</span> without problems. <br/>
                    <br/>
                    All my life I have been surrounded by the programming world thanks to my two brothers who are senior developers, and they helped me to get on track in my career.<br/>
                    I am <span className='text-emerald-300'>passionate</span> about computers and everything related to technology. I love to learn and improve myself constantly. I <span className='text-emerald-300'>dream big</span> and I give my all to achieve my goals.
                  </p>
              </motion.div>
          </div>
          <span 
              className="flex flex-col gap-2"
          >
              <motion.h2 initial={{y: -70, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{type: 'spring', bounce: 0.2, duration: 2}} className="text-teal-300 text-2xl border-l-4 pl-3 border-teal-300">My experience</motion.h2>
              <motion.p initial={{y:-40, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{type: 'spring', bounce: 0.2, duration: 2}}>
                My progress in programming started in <span className='text-emerald-300'>2017</span> making web pages with HTML and CSS for some clients, but it was in <span className='text-emerald-300'>January 2021</span> that I began to study advanced technologies extensively in order to train myself professionally.<br/>
                <br/>
                With more than <span className='text-emerald-300'>1 year</span> since I started programming I have done projects such as: <span className='text-violet-400'>inventory managers</span>, <span className='text-violet-300'>landings pages</span>, <span className='text-violet-400'>personal finance manager</span>, <span className='text-violet-300'>product payment system</span>, <span className='text-violet-400'>small e-commerce with integrated payments</span>, <span className='text-violet-300'>decentralized betting page with blockchain technology</span>, and more.<br/>
                <br/>
                All these projects were carried out in a freelance way, but I was lucky to have some <span className='text-emerald-300'>co-workers</span> with whom I managed a good organization using <span className='text-green-400'>Git/Github</span> and <span className='text-teal-300'>agile methodologies</span> ( <span className='text-green-400'>SCRUM</span>, <span className='text-green-400'>Gantt chart</span>, <span className='text-green-400'>Kanban</span> ) to deliver on time and on budget.
              </motion.p>
          </span>
          <span 
              className="flex flex-col gap-2"
          >
              <motion.h2 initial={{y: -70, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{type: 'spring', bounce: 0.2, duration: 2}} className="text-teal-300 text-2xl border-l-4 pl-3 border-teal-300">My studies</motion.h2>
              <motion.p initial={{y:-40, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{type: 'spring', bounce: 0.2, duration: 2}}>
                I an <span className='text-emerald-300'>autodidact</span> and a <span className='text-emerald-300'>fast learner</span>. I've been using the computer since I was a child and I'm very good at it.<br/>
                All my knowledge was acquired through practice with different projects both for <span className='text-emerald-300'>practice</span> and <span className='text-emerald-300'>clients</span>, online courses, books, documentations, communities and friends who supported me.<br/>
                <br/>
                I have also done <span className='text-emerald-300'>internships</span> with the <span className='text-sky-300'>Alkemy</span> platform in which they prepare you to work in <span className='text-teal-300'>companies</span>, carrying out a project, with a <span className='text-emerald-300'>team</span>, mentors and all the tools used in a professional environment.<br/>
                <br/>
                By the time you are reading this, I am studying and gaining new knowledge. Every day I advance in challenging personal projects to expand my knowledge, keep myself updated and learn new technologies.<br/>
                <br/>
                Although I could in the future, I am not currently attending <span className='text-emerald-300'>university</span> as I feel it would be much more efficient to study on my own, gaining time and learning much more.
              </motion.p>
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