import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from './Projects'

function Details() {
    const {id} = useParams()

    const singleProject = projects.find(project => project.id == id)
    console.log(singleProject)
    
  return (
    <div className='mt-6 md:mt-12 px-4 md:px-0'>
         <div className='mb-8 text-center md:text-left md:ml-44'>
            <h1 className='text-7xl md:text-8xl text-[#BDBDBD] tracking-widest'>Sample</h1>
            <p className='text-7xl md:text-8xl font-bold'>Project {singleProject.id}</p>
         </div>
         <hr />
        <img className='w-full md:h-[400px] md:px-44 mt-8' src={singleProject.detail1} />
        <div className='md:flex'>
            <img className='md:ml-44 mt-5 w-full h-[300px] md:w-[450px] md:h-[400px]' src={singleProject.detail2} />
            <p className='px-5 md:px-0 md:w-[600px] md:ml-12 mt-6 md:mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa dicta rem placeat illum consequatur, beatae ducimus itaque ipsa perferendis nemo vel qui soluta aut odio cupiditate officiis similique eaque dolorum adipisci incidunt distinctio tempora amet? Debitis similique enim necessitatibus natus, aut asperiores ratione assumenda libero incidunt quae dignissimos alias sapiente eum beatae sunt at error possimus atque quidem cum totam accusantium mollitia! Quisquam incidunt facilis a! Quaerat possimus ipsum tenetur. Necessitatibus quos exercitationem expedita tempore non error repellendus a veniam libero. Delectus eos accusantium maiores esse voluptates velit minus quis sequi iure sunt illum obcaecati, ullam sed? Rerum corrupti enim sapiente suscipit animi odit iusto assumenda sed ducimus! Ipsa repellendus magni quos asperiores assumenda rerum velit voluptatem culpa harum officiis debitis, similique aliquid esse delectus consequatur dolore, qui adipisci accusamus quaerat possimus! Quam provident itaque sint hic aspernatur esse! Reiciendis officiis at aspernatur amet. Quod facere itaque expedita veritatis.</p>
        </div>
        <img className='w-full h-[150px] md:h-[450px] px-6 md:px-44 mt-12' src={singleProject.detail3} />
    </div>
  )
}

export default Details