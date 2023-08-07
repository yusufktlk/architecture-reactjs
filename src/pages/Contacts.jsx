import React from 'react'

function Contacts() {
  return (
    <div className='md:flex justify-between mt-8 md:mt-4'>
      <div className='flex flex-col ml-6 md:ml-24'>
          <h1 className='text-6xl md:text-7xl text-[#BDBDBD] tracking-widest'>Contact</h1>
          <p className='text-6xl md:text-7xl font-bold'>Information</p>
          <div className='flex flex-col ml-2 md:ml-0 md:m-0 gap-y-8 md:gap-y-16 mt-10 text-lg'>
              <h1>
              Company Name <br/>
              1234 Sample Street Austin Texas 76401
              </h1>
              <p className='font-bold'>513 333 222</p>
              <p>sampleemail@gmail.com</p>
              <button className='bg-[#333232] p-5 text-white w-44 hover:scale-110 duration-500'>CONTACT US</button>
          </div>
      </div>
      <iframe className='w-full md:w-[900px] h-[300px] md:h-[550px] mt-12 md:mt-0 ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12510.43639134884!2d-97.75131905594219!3d30.26359642906985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20Teksas%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1691418523734!5m2!1str!2str" 
      width="900" height="550" style={{ border: "0" }} allowfullscreen="" loading="lazy" >
      </iframe>
    </div>
  )
}

export default Contacts