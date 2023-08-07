import React from 'react'
import Navbar from '../components/Navbar'

function Gallery() {

  const photos = [
    {
      id:1,
      photo: '/gal1.png'
    },
    {
      id:2,
      photo: '/gal2.png'
    },
    {
      id:3,
      photo: '/gal3.png'
    },
    {
      id:4,
      photo: '/gal4.png'
    },
    {
      id:5,
      photo: '/gal5.png'
    },
    {
      id:6,
      photo: '/gal6.png'
    },
    {
      id:7,
      photo: '/gal7.png'
    },
    {
      id:8,
      photo: '/gal8.png'
    },
    {
      id:9,
      photo: '/gal9.png'
    },
    {
      id:10,
      photo: '/gal1.png'
    },
  ]

  return (
    <div>
      <div className='mb-12 ml-24 mt-5'>
        <h1 className='text-7xl md:text-8xl text-[#BDBDBD] tracking-widest'>Photo</h1>
        <p className='text-7xl md:text-8xl font-bold'>Gallery</p>
      </div>
      <hr />
      <div className='grid grid-cols-2 md:grid-cols-5 m-24 gap-x-5 my-12 gap-y-10 '>
        {
          photos.map((photo,key) => (
            <div key={key}>
                <img className='w-64 hover:scale-105 duration-500' src={photo.photo} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery