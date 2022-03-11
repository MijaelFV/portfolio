import React from 'react'
import { useRef } from 'react'
import { motion, useTransform, useViewportScroll } from "framer-motion";
import useRefScrollProgress from "../hooks/refViewportProgress";

const About = () => {

    const { scrollYProgress } = useViewportScroll();

    const AboutTitle = () => {
        const first = useRef();
        const {end, start} = useRefScrollProgress(first)

        const x = useTransform(scrollYProgress, [start / 1.5, end], [-80, 0]);
        const opacity = useTransform(scrollYProgress, [start / 1.5, end], [0, 1]);

        return <motion.p 
            ref={first}
            style={{
                x,
                opacity
            }}
            className="text-4xl font-bold mb-12 text-gray-700"
        >
            ABOUT
        </motion.p>
    }

  return (
    <section title="About" id="About" className="w-full flex justify-center items-center bg-white">
        <div className="flex flex-col text-black py-12" style={{maxWidth: "800px", width: "90vw"}}>
            <AboutTitle />
            <div className="flex flex-col gap-6 justify-center items-center mb-20">
                <motion.span 
                    className="flex flex-col gap-2 font-medium"
                >
                    <p className="text-blue-400 text-2xl">Hi, I'm Mijael</p>
                    <p className="text-gray-500">
                        I’m a 20 years old full-stack developer from Argentina.
                        For my daily life i use React and Node, but also on the other hand im using Solidity for creating smart contracts (Blockchain).
                    </p>
                </motion.span>
                <motion.span 
                    className="flex flex-col gap-2 font-medium"
                >
                    {/* <p className="text-blue-400 text-xl">About me</p> */}
                    <p className="text-gray-500">
                        I use and love my computer since i have memory, and i want to climb to the top. Im learning everyday everything i need to become not just a developer, but the developer. I do it for my future, for the fact that i love to create and make people happy with my creations, but most for my family.
                    </p>
                </motion.span>
                <motion.span 
                    className="flex flex-col gap-2 font-medium"
                >
                    <p className="text-blue-400 text-xl">Hobbies</p>
                    <p className="text-gray-500">
                        In the first place is unexplainable how much i love my Computer, reason why my main hobbie is Gaming. But when im not playing games i like to read books or information about Programming, learn and experiment with softwares like Photoshop/3ds Max/Blender. Listen to music and playing it my Guitar and Piano. I love singing too. Also i go to the gym to maintain my health.
                    </p>
                </motion.span>
            </div>
        </div>
    </section>
  )
}

export default About