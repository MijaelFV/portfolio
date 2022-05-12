import { FC, MouseEvent, useRef, useState } from 'react'
import { motion, Point, useDragControls } from 'framer-motion';
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';

interface Data {
  tech: string[];
}

export const SkillCarousel: FC<Data> = ({tech}) => {
  const limit = useRef<HTMLHeadingElement>(null);
  const pxOutsideView = -(limit.current?.offsetWidth! - 330)
  const duration = limit.current?.offsetWidth! * 0.004

  const [position, setPosition] = useState(0)

  return (
    <div className='flex w-fit relative items-center gap-0.5'>
      <div className='cursor-pointer text-white flex justify-center items-center hover:scale-105 transition-transform' onClick={() => setPosition(0)}>
        <ArrowBackIosNewOutlined />
      </div>
      <div className='overflow-hidden cursor-pointer' style={{width: 330}}>
        <motion.div 
          ref={limit}
          drag="x"
          whileInView={{x: position}}
          transition={{duration, repeat: 0}}
          dragConstraints={{left: pxOutsideView, right: 0}}
          className='flex gap-1.5 w-fit'
        >
          {
            tech.map((t, i) => (
              <motion.p 
                key="i" 
                initial={{scale: 0.5, opacity: 0.4}} 
                whileInView={{scale: 1, opacity: 1}} 
                className='from-emerald-300 to-teal-400 bg-gradient-to-r text-gray-900 px-2 rounded font-medium'
              >
                {t}
              </motion.p>
            ))
          }
        </motion.div>
      </div>
      <div className='cursor-pointer text-white flex justify-center items-center hover:scale-105 transition-transform' onClick={() => setPosition(pxOutsideView)}>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  )
}
