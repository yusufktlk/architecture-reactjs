import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      {/* Bottom */}
      <div className='flex justify-between px-2 md:px-32 mt-8 md:mt-0' id='bottom'>
        
        <div className='flex flex-col just md:flex-col mt-12 md:mt-28 md:ml-16'>
          <h1 className='text-3xl md:text-8xl text-[#BDBDBD] md:tracking-widest'>Project</h1>
          <p className='text-3xl md:text-8xl font-bold text-center'>Lorem</p>
            <div className='flex md:ml-20 mt-8 md:mt-12'>
              <img className='w-10 md:mr-4 ml-12' src='/left_arrow.png' />
              <img className='w-10' src='/right_arrow.png' />
              <img className='h-[2px] mt-5' src='/line.png' />
            </div>
          <img className='w-28 md:w-44 mt-10 md:mt-16 ml-8 md:ml-14' src='zero.png' />
        </div>

        <div>
          <img className='w-[850px] h-[240px] md:h-[620px]' src='/house1.png' />
        </div>
      </div>
      {/* Bottom */}

      {/* About */}
      <div className='bg-[#f9f7f7] flex flex-col-reverse md:flex-row md:justify-between px-4 md:px-24 md:m-24 mt-24 rounded-2xl'>,
        <div className='flex m-4'>
          <div className='flex flex-col'>
            <img className='w-[250px] md:w-[500px] md:h-72 mt-1' src='/about1.png' />
            <img className='w-full md:absolute mt-10 md:mt-0  md:top-[1200px] md:left-44 md:w-80 md:h-44 ' src='/about3.png' />
          </div>
            <img className='w-[200px] md:w-[500px] ml-12 md:pb-24 pt-8' src='/about2.png' />
        </div>
         <div className='mt-4 md:mt-12 ml-4'>
            <h1 className='text-4xl text-center md:text-left text-[#BDBDBD] mb-6'>About</h1>
            <p className='md:w-[500px] text-left font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, numquam tenetur ex velit reprehenderit debitis sit veniam inventore! Tenetur veritatis natus dolorum repellat, id officia quam eius mollitia necessitatibus totam quaerat. Neque magnam quibusdam, rem amet nisi repellat eos, cupiditate, nemo possimus consectetur nostrum ab? Dignissimos mollitia laboriosam quam soluta non laudantium facere. Magnam praesentium quas amet earum voluptatibus, nesciunt consequuntur autem quaerat reprehenderit, delectus nihil! Quaerat modi aspernatur facere doloremque. Ea eaque quis corporis! Placeat blanditiis minima ullam est.</p>
            <div className='flex items-center mt-6 md:mt-12 cursor-pointer '>
              <h1>READ MORE</h1>
              <img src='right_arrow.png' />
            </div>
         </div>
      </div>
      {/* About */}

      <div className='text-[#BDBDBD]'>
        <h1 className='text-4xl text-center md:text-left md:text-6xl md:ml-64 mb-4 pt-16 font-thin tracking-wider'>Main Focus/Mission Statement</h1>
        <div className='flex flex-col md:flex-row md:ml-64 px-4 md:px-0'>
            <div className='flex'>
              <span className='text-9xl font-extrabold '>1</span>
              <p className='w-64 text-lg  mt-4 ml-4 text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, animi!</p>
            </div>
            <div className='flex mt-10 md:mt-0 md:ml-44'>
              <span className='text-9xl font-extrabold'>2</span>
              <p className='w-72 text-lg  mt-3 ml-4 text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dicta, sit esse omnis obcaecati rem cupiditate.</p>
            </div>
        </div>
      </div>

      <div className='mt-16 px-2 md:px-44'>
        <h1 className='text-[#BDBDBD] text-6xl font-thin mb-12 text-center md:text-left'>Our Projects</h1>
        <div className='flex justify-between mb-5 md:gap-x-8'>
          <img className='w-44 md:w-[900px]' src='/pro1.png' />
          <img className='w-44 md:w-[900px]' src='/pro2.png' />
        </div>
        <div className='flex gap-x-2  md:gap-x-5 '>
          <img className='w-24 md:w-[900px]' src='/pro3.png' />
          <img className='w-36 md:w-[900px]' src='/pro4.png' />
          <img className='w-24 md:w-[900px] md:ml-5' src='/pro5.png' />
        </div>
        <button onClick={() => navigate('/projects')} className='bg-[#333333] p-4 md:mt-10 md:w-44 flex m-auto md:m-0 text-center text-white  md:absolute md:right-44 mt-5 hover:scale-110 duration-500'>ALL PROJECTS</button>
      </div>

      {/* Contact */}
      <div className='flex px-4 gap-x-5 md:px-0'>
        <div>
        <h1 className='text-4xl md:text-6xl text-[#BDBDBD] md:ml-44 pt-24 md:pt-44 font-thin mb-12'>CONTACT US</h1>
        <form className='flex flex-col w-[200px]  md:w-[500px] md:ml-44 gap-y-5 md:gap-y-10 md:mr-10'>
          <input placeholder='Name' className='bg-[#F3F2F2] p-2' />
          <input placeholder='Phone Number' required className='bg-[#F3F2F2] p-2' />
          <input placeholder='E-mail' required className='bg-[#F3F2F2] p-2' />
          <input placeholder='Interested In' className='bg-[#F3F2F2] p-2' />
          <input placeholder='Message' required className='bg-[#F3F2F2] pb-24 ' />
        </form>
        <button className='bg-[#333333]  md:ml-44 mt-14 p-4 w-44 text-white hover:scale-110 duration-500'>SEND EMAIL</button>
        </div>
        <div>
          <img className='w-[450px] md:w-[900px] h-[365px] md:h-[450px] mt-[220px] md:mt-[274px] object-cover ' src='cont.png' />
        </div>
      </div>
      {/* Contact */}
    </div>
  )
}

export default Home