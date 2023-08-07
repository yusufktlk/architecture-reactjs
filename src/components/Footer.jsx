import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsTelephone,BsPinterest} from 'react-icons/bs'
import {AiOutlineMail, AiFillFacebook, AiOutlineTwitter, AiOutlineLinkedin} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


function Footer() {
  const navigate = useNavigate()
  return (
    <>
    <div className='bg-[#333333] text-white md:flex md:justify-around py-8 md:py-12 md:py-24 md:px-24  mt-20'>
        <img className='md:m-0 m-auto w-24 h-20 md:w-44 md:h-32 mb-8 md:mb-0 ' src='logw.png' />
        <div className='flex flex-col gap-y-5 text-center'>
            <h1 className='font-bold text-xl underline'>Information</h1>
            <p onClick={() => navigate('/') & window.scroll(0,0)} className='cursor-pointer'>Main</p>
            <p onClick={() => navigate('/gallery') & window.scroll(0,0)} className='cursor-pointer'>Gallery</p>
            <p onClick={() => navigate('/projects') & window.scroll(0,0)} className='cursor-pointer'>Projects</p>
            <p onClick={() => navigate('/contacts') & window.scroll(0,0)} className='cursor-pointer'>Contacts</p>
        </div>
        <div className='mt-6 md:mt-0'>
           <h1 className='font-bold text-xl text-center underline'>Contacts</h1>
           <div className='flex flex-col mt-4 md:mt-8 md:gap-y-10 text-center'>
           <div className='md:flex '>
           <HiOutlineLocationMarker size={20} className=' md:mr-3 m-auto md:m-0 mb-4 md:mb-0 '  /> 1234 Sample Street <br /> Austin Texas 78704
           </div>
                <span className='md:flex'><BsTelephone size={20} className='m-auto md:m-0 mt-4 md:mt-0'  /> <p className='ml-4'>512 533 2222</p></span>
                <span className='md:flex'><AiOutlineMail size={20} className='m-auto md:m-0 mt-4 md:mt-0' /> <p className='ml-4'>samplemail@gmail.com</p></span>
           </div>
        </div>
        <div>
           <h1 className='font-bold text-xl text-center mt-6 md:mt-0 underline'>Social Media</h1>
           <div className='flex md:justify-between gap-x-5 mt-5 mb-4 md:mb-0 '>
                <AiFillFacebook size={30} className='m-auto'/>
                <AiOutlineTwitter size={30} className='m-auto'/>
                <AiOutlineLinkedin size={30}className='m-auto' />
                <BsPinterest size={30}className='m-auto' />
           </div>
        </div>
        <hr />
    </div>
    <div className='bg-[#333333] text-[#BDBDBD]'>
        <hr className=' opacity-20' />
        <h1 className='text-center mt-3 pb-3 text-sm'>2021 All Rights Reserved</h1>
    </div>
    </>
  )
}

export default Footer