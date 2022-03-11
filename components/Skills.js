import React from 'react'
import Image from "next/image"

const Skills = () => {

    const techs = [
        {
            name: "React",
            img: "/assets/react.svg"
        },
        {
            name: "Solidity",
            img: "/assets/solidity.svg"
        },
        {
            name: "NodeJS",
            img: "/assets/nodejs.svg"
        },
        {
            name: "ReduxJS",
            img: "/assets/redux.svg"
        },
        {
            name: "MongoDB",
            img: "/assets/mongodb.svg"
        },
        {
            name: "Git",
            img: "/assets/github.svg"
        },
        {
            name: "Flutter",
            img: "/assets/flutter.svg"
        },
        {
            name: "ExpressJS",
            img: "/assets/express.svg"
        },
        {
            name: "MaterialUI",
            img: "/assets/mui.svg"
        },
        {
            name: "JavaScript",
            img: "/assets/javascript.svg"
        },
        {
            name: "Photoshop",
            img: "/assets/photoshop.svg"
        },
        {
            name: "Sass",
            img: "/assets/sass.svg"
        },
    ]

  return (
    <section title="Skills" id="Skills" className="w-full flex justify-center items-center bg-white">
        <div className="flex flex-col text-black py-12" style={{maxWidth: "800px", width: "90vw"}}>
            <p className="text-4xl font-bold mb-12 text-gray-700">
                KNOWLEDGE
            </p>
            <div className="flex flex-col flex-wrap justify-center mb-20">
                {
                    techs.map((data, i) => {
                        return <p className="">{data.name}</p>
                    })
                }
                {/* {
                    techs.map((data, i) => {
                        return <div key={i} className="flex flex-col p-3 rounded-md font-bold text-lg items-center">
                            <div className="p-2 rounded-xl flex justify-center items-center">
                                <Image src={data.img} height={80} width={80} alt={data.name} />
                            </div>
                            <p>{data.name}</p>
                        </div>
                    })
                } */}
            </div>
        </div>
    </section>
  )
}

export default Skills