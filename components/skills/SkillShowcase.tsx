import Image from 'next/image';
import React from 'react'
import { FC } from 'react';

interface Data {
  skills: {
    name: string,
    img: string
  }[];
  title: string;
  className: string;
}

export const SkillShowcase:FC<Data> = ({skills, title, className}) => {
  return (
    <>
      <h2 className="text-teal-300 text-2xl border-x-4 px-3 mx-auto border-teal-300 max-w-min whitespace-nowrap">{title}</h2>
      <div className="flex gap-10 justify-center flex-wrap">
          {
              skills.map((data, i) => {
                  return <div key={i} style={{minWidth: 115}} className={`p-2 drop-shadow-md rounded-lg bg-gradient-to-bl from-gray-800 flex flex-col items-center ${className}`} >
                      <div>
                        <Image src={data.img} width={50} height={50} alt={`${data.name} logo`} />
                      </div> 
                      <p className="font-bold text-lg whitespace-nowrap">{data.name}</p>
                  </div>
              })
          }
      </div>
    </>
  )
}
