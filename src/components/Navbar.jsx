import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='md:flex justify-between px-12  items-center'>
        <img className='w-24 m-auto md:ml-12 mt-2 md:mt-4 mb-6' src='/log.png' />
        <ul className='flex md:ml-20 mb-2'>
            <li onClick={() => navigate('/')} className='mr-3 md:mr-20 border-b-2 border-t-2 border-black w-20 text-center hover:scale-110 duration-500'>  MAIN   </li>
            <li onClick={() => navigate('/gallery')} className='mr-6 md:mr-20 hover:scale-110 duration-500'>GALLERY</li>
            <li onClick={() => navigate('/projects')} className='mr-6 md:mr-20 hover:scale-110 duration-500'>PROJECTS</li>
            <li onClick={() => navigate('/contacts')} className='mr-6 md:mr-20 hover:scale-110 duration-500'>CONTACTS</li>
        </ul>
    </div>
  )
}

export default Navbar