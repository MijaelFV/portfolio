import { HourglassTopOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React, { FC } from 'react'
import { SkillCarousel } from './SkillCarousel'

interface Data {
  projects: {
      name: string,
      img?: string,
      role: string,
      dates?: string,
      desc: string,
      tech: string[]
  }[];
  title: string;
}

export const ProjectShowcase:FC<Data> = ({projects, title}) => {
  return (
    <div>
      <h2 className="mb-8 text-teal-300 text-2xl border-x-4 px-3 mx-auto border-teal-300 max-w-min whitespace-nowrap">{title}</h2>
      <div className='flex flex-col gap-6'>
        {
          projects.map((project, i) => (
            <div key={i} className="gap-2 lg:gap-7 justify-center flex flex-wrap overflow-hidden">
              <div style={{minWidth: 380, minHeight: 200}} className='hover:scale-105 transition-transform flex justify-end items-center'>
                  {
                    project.img
                    ? <Image className='rounded-xl cursor-pointer' src={project.img} width={380} height={200} alt={`${project.name} image`}/>
                    : <div style={{width: 380, height: 200}} className="bg-gray-900 rounded-xl flex flex-col justify-center items-center">
                        <HourglassTopOutlined />
                        <p className='font-medium'>No image at this time</p>
                      </div>
                  }
              </div>
              <div style={{width: 380}} className='flex flex-col'>
                <SkillCarousel tech={project.tech} />
                <span className='mt-2 flex gap-2 items-center'>
                  <h3 className='rounded-lg text-xl font-bold'>{project.name}</h3>
                  <p className='font-medium text-gray-300'>{project.dates}</p>
                </span>
                <span className='flex gap-2'>
                  <p className='font-medium'>My role: </p>
                  <p className='text-teal-300 font-medium'>{project.role} Developer</p>
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
