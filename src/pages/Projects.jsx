import React from 'react'
import { Link } from 'react-router-dom'

export const projects = [
  {
    id:1,
    title:"Sample Project",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis ducimus accusantium modi cum magnam reiciendis ipsam voluptates aut iste?",
    image: '/project2.png',
    detail1: '/detail1.png',
    detail2: '/detail2.png',
    detail3: '/detail3.png',
  },
  {
    id:2,
    title:"Sample Project 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis ducimus accusantium modi cum magnam reiciendis ipsam voluptates aut iste?",
    image: '/project1.png',
    detail1: '/detail1.png',
    detail2: '/detail2.png',
    detail3: '/detail3.png'
  },
  {
    id:3,
    title:"Sample Project 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis ducimus accusantium modi cum magnam reiciendis ipsam voluptates aut iste?",
    image: '/project3.png',
    detail1: '/detail1.png',
    detail2: '/detail2.png',
    detail3: '/detail3.png'
  }
]

function Projects() {
  return (
    <div>
       <div className='ml-24 mt-4 md:mt-0 mb-10'>
          <h1 className='text-7xl md:text-8xl text-[#BDBDBD] tracking-widest'>Our</h1>
          <p className='text-7xl md:text-8xl font-bold'>Projects</p>
       </div>
       <hr />
      {
        projects.map((project) => (
          <div key={project.id} className='flex flex-col md:flex-row md:mx-24 md:mt-12 bg-[#FAFAFA]'>
            <div>
                <img className='w-full h-[300px] md:h-[350px] md:w-[600px] ' src={project.image} />
            </div>
            <div className='ml-10 mt-8 md:mt-24 '>
              <h1 className='text-5xl text-[#BDBDBD] '>{project.title}</h1>
              <p className='w-[300px] md:w-[500px] mt-6 md:mt-12'>{project.text}</p>
              <Link to={`/details/${project.id}`} className='flex mb-6 md:mb-0 mt-4 md:mt-12 rounded-lg items-center'>View More <img className='ml-4' src='/right_arrow.png' /></Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Projects