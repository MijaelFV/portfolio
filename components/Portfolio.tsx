import { useTransform, useViewportScroll, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react'
import projects from '../data/projects.json'
import useRefScrollProgress from '../hooks/refViewportProgress';

const Portfolio = () => {

  const { scrollYProgress } = useViewportScroll();

  const PortfolioTitle = () => {
      const first = useRef(null);
      const {end, start} = useRefScrollProgress(first)

      const x = useTransform(scrollYProgress, [start! / 1.1, end!], [-80, 0]);
      const opacity = useTransform(scrollYProgress, [start! / 1.1, end!], [0, 1]);

      return <>
        <motion.h1 
          ref={first}
          style={{
              x,
              opacity
          }}
          className="text-4xl font-bold text-white"
        >
            PROJECTS
        </motion.h1>
        <motion.span 
          style={{
              opacity
          }}
          className="w-full h-0.5 rounded-xl bg-teal-500"
        />
      </>
  }

  const PortfolioContent = () => {
    const first = useRef(null);
    const {end, start} = useRefScrollProgress(first)

    const opacity = useTransform(scrollYProgress, [start! / 1.5, end! / 1.2], [0, 1]);

    return <motion.div 
        className="flex flex-col gap-5"
        style={{
          opacity
        }}
        ref={first}
      >
        {
          projects.map((p, i) => (
            <div key={i} className="bg-slate-800 rounded-xl overflow-hidden flex flex-col md:flex-row">
              <div className='flex justify-center items-center bg-black'>
                <Image src={p.img} width={380} height={200} alt={`${p.name} image`}/>
              </div>
              <div className='mx-4 my-3 md:w-2/3'>
                <span className="flex gap-2 mb-4 flex-wrap">
                  {
                    p.tech.map((t, i) => (
                      <p key={i} className='font-medium bg-teal-700 pt-0.5 px-2 rounded-md'>{t}</p>
                      ))
                    }
                </span>
                <h3 className='rounded-lg text-xl mb-2 font-bold'>{p.name}</h3>
                <p className='font-medium overflow-auto'>
                  {p.desc}
                </p>
              </div>
            </div>
          ))
        }
    </motion.div>
  }

  return (
    <section title="Projects" id="Projects" className="w-full flex justify-center items-center overflow-hidden">
        <div className="flex flex-col py-12" style={{maxWidth: "1000px", width: "90vw"}}>
            <div className="flex items-center mb-12 gap-3">
                <PortfolioTitle />
            </div>
            <PortfolioContent />
        </div>
    </section>
  )
}

export default Portfolio