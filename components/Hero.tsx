import React from 'react'
import { use100vh } from "react-div-100vh";
import ReactTypingEffect from 'react-typing-effect';
import ThreeScene from "../components/ThreeScene";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";
import useRefScrollProgress from "../hooks/refViewportProgress";

export const Hero = () => {
    const heroHeight = use100vh() || 0;

    const { scrollYProgress } = useViewportScroll();

    const hero = useRef(null);
    const {end, start} = useRefScrollProgress(hero)

    const translateY = useTransform(scrollYProgress, [start! * 2 , end! * 2], [0, 200]);
    const opacity = useTransform(scrollYProgress, [start! * 2 , end! * 1.2], [1, 0]);

  return (
    <motion.section className="bg-slate-800 relative text-white overflow-hidden" style={{height: heroHeight, width:"100%"}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration: 3}}
    >
        <motion.div 
            ref={hero}
            style={{
                translateY
            }} 
            className="w-full h-full"
        >
            <ThreeScene />
        </motion.div>
        <div className="flex flex-col gap-3 absolute" style={{left:"50%", top:"50%", transform: "translate(-50%, -50%)"}}>
            <motion.div
                className="flex flex-col"
                style={{
                    translateY,
                    opacity
                }} 
                animate={{ y: 0, opacity: 1 }}
                initial={{y: -70, opacity: 0}}
                transition={{ duration: 2 }}
            >
                <ReactTypingEffect className="select-none text-2xl font-bold italic text-center whitespace-nowrap text-teal-400" text={["Front-End Developer", "Self-Taught"]} speed={50} eraseSpeed={30} typingDelay={800} />
                <p className="text-7xl font-bold italic text-center drop-shadow-2xl select-none">
                    Mijael Flores Vega
                </p>
            </motion.div>
        </div>
        <nav 
            className="flex w-full text-center pb-5 justify-center absolute bottom-1 no-tap-highlight"
        >
            <motion.ul 
                animate={{ opacity: 1, scale: 1  }}
                initial={{ opacity: 0, scale: 1.2}}
                transition={{ duration: 2 }}
                className="flex gap-7 text-3xl font-medium items-center"
            >
                <li 
                    className="cursor-pointer hover:scale-110 hover:text-teal-400 backdrop decoration-purple-500 select-none transition-all"
                >
                    <a href="#About">
                        <motion.p 
                            animate={{ opacity: 1, y: 0  }}
                            initial={{ opacity: 0, y: -100}}
                            transition={{ duration: 1.5}}
                        >
                            About
                        </motion.p>
                    </a>
                </li>
                <li
                  className="cursor-pointer hover:scale-110 hover:text-teal-400 backdrop decoration-purple-500 select-none transition-all"
                >
                  <a href="#Skills">
                        <motion.p 
                            animate={{ opacity: 1, y: 0  }}
                            initial={{ opacity: 0, y: -80}}
                            transition={{ duration: 1.5}}
                        >
                            Skills
                        </motion.p>
                    </a>
                </li>
                <li
                  className="cursor-pointer hover:scale-110 hover:text-teal-400 backdrop decoration-purple-500 select-none transition-all"
                >
                  <a href="#Projects">
                        <motion.p 
                            animate={{ opacity: 1, y: 0  }}
                            initial={{ opacity: 0, y: -50}}
                            transition={{ duration: 1.5}}
                        >
                            Projects
                        </motion.p>
                    </a>
                </li>
            </motion.ul>
        </nav>
    </motion.section>
  )
}
