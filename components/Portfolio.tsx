import { HourglassTopOutlined } from '@mui/icons-material';
import { useTransform, useViewportScroll, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react'
import projects from '../data/projects.json'
import useRefScrollProgress from '../hooks/refViewportProgress';
import { ProjectShowcase } from './portfolio/ProjectShowcase';
import { SkillCarousel } from './portfolio/SkillCarousel';

const Portfolio = () => {

  const { scrollYProgress } = useViewportScroll();

  const PortfolioTitle = () => {
      const first = useRef(null);
      const {end, start} = useRefScrollProgress(first)
      const x = useTransform(scrollYProgress, [start! / 1.1, end!], [-80, 0]);
      const opacity = useTransform(scrollYProgress, [start! / 1.1, end!], [0, 1]);

      return <>
        <motion.h1 ref={first} style={{x, opacity}} className="text-4xl font-bold text-white">
          PROJECTS
        </motion.h1>
        <motion.span style={{opacity}} className="w-full h-0.5 rounded-xl bg-teal-500"
        />
      </>
  }

  const PortfolioContent = () => {
    const first = useRef(null);
    const {end, start} = useRefScrollProgress(first)
    const opacity = useTransform(scrollYProgress, [start! / 1.5, end! / 1.2], [0, 1]);

    return <motion.div className="flex flex-col gap-20 justify-center items-center" style={{opacity}} ref={first}>
        <ProjectShowcase projects={projects.inProgress} title="In progress" /> 
        <ProjectShowcase projects={projects.completed} title="Completed" /> 
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