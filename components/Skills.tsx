import React, { useRef } from 'react'
import Image from "next/image"
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useRefScrollProgress from '../hooks/refViewportProgress';
import skills from '../data/skills.json';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { StarHalf } from '@mui/icons-material';


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
          SKILLS
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

    const opacity = useTransform(scrollYProgress, [start! / 1.5, end! / 2], [0, 1]);

    return <motion.div 
      className="flex flex-col gap-14 font-medium justify-start"
      ref={first}
      style={{
          opacity
      }}
    >
      <div className='flex flex-col gap-6'>
        <h2 className="text-teal-300 text-2xl border-l-4 pl-3 border-teal-300">Code languages</h2>
        <div className="flex gap-5 justify-start flex-wrap">
            {
                skills.techLearned.languages.map((data, i) => {
                    return <div key={i} style={{width: 150}} >
                        <Image src={data.img} width={40} height={40} alt={`${data.name} logo`} /> 
                        <p className="font-bold text-lg whitespace-nowrap">{data.name}</p>
                        <span className="text-teal-300">
                          {
                            Array.from(Array(data.stars).keys()).map((s, i, a) => {
                              if (i === (a.length - 1) && data.half === true) {
                                return <StarHalf key={i} />
                              }
                                
                              return <StarOutlinedIcon key={i} />
                            })
                          }
                          {
                            Array.from(Array(5 - data.stars).keys()).map((s, i) => (
                              <StarOutlinedIcon 
                                key={i}
                                className="text-teal-900"
                              />
                            ))
                          }
                        </span>
                    </div>
                })
            }
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className="text-teal-300 text-2xl border-l-4 pl-3 border-teal-300">Frameworks & libraries</h2>
        <div className="flex gap-5 justify-start flex-wrap">
            {
                skills.techLearned.frameworksLibraries.map((data, i) => {
                    return <div key={i} style={{width: 150}} >
                        <Image src={data.img} width={40} height={40} alt={`${data.name} logo`} /> 
                        <p className="font-bold text-lg whitespace-nowrap">{data.name}</p>
                        <span className="text-teal-300">
                          {
                            Array.from(Array(data.stars).keys()).map((s, i, a) => {
                              if (i === (a.length - 1) && data.half === true) {
                                return <StarHalf key={i} />
                              }
                                
                              return <StarOutlinedIcon key={i} />
                            })
                          }
                          {
                            Array.from(Array(5 - data.stars).keys()).map((s, i) => (
                              <StarOutlinedIcon 
                                key={i}
                                className="text-teal-900"
                              />
                            ))
                          }
                        </span>
                    </div>
                })
            }
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className="text-teal-300 text-2xl border-l-4 pl-3 border-teal-300">Other</h2>
        <div className="flex gap-5 justify-start flex-wrap">
            {
                skills.techLearned.other.map((data, i) => {
                    return <div key={i} style={{width: 150}} >
                        <Image src={data.img} width={40} height={40} alt={`${data.name} logo`} /> 
                        <p className="font-bold text-lg whitespace-nowrap">{data.name}</p>
                        <span className="text-teal-300">
                          {
                            Array.from(Array(data.stars).keys()).map((s, i, a) => {
                              if (i === (a.length - 1) && data.half === true) {
                                return <StarHalf key={i} />
                              }
                                
                              return <StarOutlinedIcon key={i} />
                            })
                          }
                          {
                            Array.from(Array(5 - data.stars).keys()).map((s, i) => (
                              <StarOutlinedIcon 
                                key={i}
                                className="text-teal-900"
                              />
                            ))
                          }
                        </span>
                    </div>
                })
            }
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className="text-teal-300 text-2xl border-l-4 pl-3 border-teal-300">Spoken languages</h2>
        <div className="flex gap-5 justify-start flex-wrap">
            {
                skills.langs.map((data, i) => {
                    return <div key={i} style={{width: 150}} >
                        <Image src={data.img} width={40} height={40} alt={`${data.name} flag`} /> 
                        <p className="font-bold text-lg whitespace-nowrap">{data.name}</p>
                        <p className="text-emerald-400">{data.knwl}</p>
                    </div>
                })
            }
        </div>
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