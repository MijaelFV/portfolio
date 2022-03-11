import React from 'react'
import { getIndex, useFlubber } from "../helpers/use-flubber.js";
import { useState, useEffect } from "react"
import { animate, useMotionValue, motion, useTransform, useCycle } from "framer-motion";

const Morph = () => {

    const paths = [
        "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      ,
        "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      ,
        "M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"
        ,  
        "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
]

    const colors = [
        "#00cc88",
        "#0099ff",
        "#8855ff",
        "#00cc88"
    ];

    const [idx, cycleIdx] = useCycle(0,1,2,3);
    const pathProgress = useMotionValue(idx);
    const fill = useTransform(pathProgress, paths.map(getIndex), colors);
    const path = useFlubber(pathProgress, paths);

        const animation = animate(pathProgress, idx, {
          duration: 0.8,
          ease: "easeInOut",
          onComplete: () => {
            if (idx === paths.length - 1) {
              pathProgress.set(0);
                useCycle()
            } else {
                useCycle()
            }
          }
        });
  return (
    <svg width="400" height="400">
        <g transform="translate(10 10) scale(17 17)">
            <motion.path fill={fill} d={path} onTap={() => animation()} />
        </g>
    </svg>
  )
}

export default Morph