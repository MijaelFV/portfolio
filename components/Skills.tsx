import React, { useRef } from 'react'
import Image from "next/image"
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useRefScrollProgress from '../hooks/refViewportProgress';
import skills from '../data/skills.json';


const Skills = () => {
  const { scrollYProgress } = useViewportScroll();

  const AptitudeTitle = () => {
    const first = useRef(null);
    const {end, start} = useRefScrollProgress(first)

    const x = useTransform(scrollYProgress, [start! / 1.4, end!], [-80, 0]);
    const opacity = useTransform(scrollYProgress, [start! / 1.4, end!], [0, 1]);

    return <>
      <motion.h1 
        ref={first}
        style={{
            x,
            opacity
        }}
        className="text-4xl font-bold text-white"
      >
          APTITUDE
      </motion.h1>
      <motion.span 
        style={{
            opacity
        }}
      className="w-full h-0.5 rounded-xl bg-teal-500"/>
    </>
  }

  const SkillsContent = () => {
    const first = useRef(null);
    const {end, start} = useRefScrollProgress(first)

    const opacity = useTransform(scrollYProgress, [start! / 1.5, end! / 1.2], [0, 1]);

    return <motion.div 
      className="flex flex-col gap-5 font-medium justify-start"
      ref={first}
      style={{
          opacity
      }}
    >
      <h2 className="text-teal-300 text-2xl">Technologies</h2>
      <div className="grid gap-5 justify-start mb-8" style={{gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))"}}>
          {
              skills.techLearned.map((data, i) => {
                  return <div key={i}>
                      <Image src={data.img} width={40} height={40} alt={`${data.name} logo`} /> 
                      <p className="font-bold text-lg whitespace-nowrap">{data.name}</p>
                      <p className="text-emerald-400">{data.knwl}</p>
                  </div>
              })
          }
      </div>
      <h2 className="text-teal-300 text-2xl">Languages</h2>
      <div className="grid gap-5 justify-start" style={{gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))"}}>
          {
              skills.langs.map((data, i) => {
                  return <div key={i}>
                      <Image src={data.img} width={40} height={40} alt={`${data.name} flag`} /> 
                      <p className="font-bold text-lg whitespace-nowrap">{data.name}</p>
                      <p className="text-emerald-400">{data.knwl}</p>
                  </div>
              })
          }
      </div>
  </motion.div>
}

  return (
    <section title="Skills" id="Skills" className="w-full flex justify-center items-center overflow-hidden">
        <div className="flex flex-col py-12" style={{maxWidth: "1000px", width: "90vw"}}>
            <div className="flex items-center mb-12 gap-3">
                <AptitudeTitle />
            </div>
            <SkillsContent />
        </div>
    </section>
  )
}

export default Skills