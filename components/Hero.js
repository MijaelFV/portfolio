import React from 'react'
import { use100vh } from "react-div-100vh";
import ReactTypingEffect from 'react-typing-effect';
import ThreeScene from "../components/threeScene";
import { motion } from "framer-motion";

const Hero = () => {
    const heroHeight = use100vh();

  return (
    <motion.section className="relative text-white" style={{height:heroHeight, width:"100%"}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration: 3}}
    >
        <ThreeScene />
        <div className="flex flex-col gap-3 absolute" style={{left:"50%", top:"50%", transform: "translate(-50%, -50%)"}}>
            <motion.div
                className="flex flex-col"
                animate={{ y: 0, opacity: 1 }}
                initial={{y: -70, opacity: 0}}
                transition={{ duration: 2 }}
            >
                <ReactTypingEffect className="select-none text-2xl font-bold italic text-center whitespace-nowrap text-teal-400" text={["Full-Stack Developer", "Self-Taught"]} speed={50} eraseSpeed={30} typingDelay={800} />
                <p className="text-7xl font-bold italic text-center drop-shadow-2xl select-none">
                    Mijael Flores Vega
                </p>
            </motion.div>
        </div>
        <nav 
            className="flex w-full text-center py-4 justify-center absolute bottom-1 no-tap-highlight"
        >
            <motion.ul 
                animate={{ opacity: 1, scale: 1  }}
                initial={{ opacity: 0, scale: 1.2}}
                transition={{ duration: 2 }}
                className="flex gap-7 text-3xl font-medium items-center"
            >
                <li className="cursor-pointer hover:scale-110 hover:text-teal-400 backdrop decoration-purple-500 select-none transition-all">
                    <a href="#About">About</a>
                </li>
                <li className="cursor-pointer hover:scale-110 hover:text-teal-400 select-none transition-all">
                    <a href="#Skills">Skills</a>
                </li>
                <li className="cursor-pointer hover:scale-110 hover:text-teal-400 select-none transition-all">
                    <a href="#Portfolio">Portfolio</a>
                </li>
            </motion.ul>
        </nav>
    </motion.section>
  )
}

export default Hero