import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BiStore } from 'react-icons/bi';
import {BiPodcast} from 'react-icons/bi'
import {CgCommunity} from 'react-icons/cg'
import Logo from '../img/logoo.png'

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-[#742EA8]'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          <a href="/"><img src={Logo} alt="" /></a>
        </h1>
       


       <ul className='hidden md:flex px-4'>
        <li><a href="/episode" className='text-white px-3 decoration-transparent'>Episodes</a></li>
        <li><a href="/communitytwo" className='text-white px-3 decoration-transparent'>Community</a></li>
        <li><a href="/comingsoon" className='text-white px-3 decoration-transparent'>Store</a></li>
       </ul>
      </div>

      
      
      
     

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-[#742EA8] z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          <a href="/"><img src={Logo} alt="" /></a>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><BiPodcast size={25} className='mr-4 text-white' /><a href="/episode" className=' text-white decoration-transparent'>Episode</a></li>
                <li className='text-xl py-4 flex'><CgCommunity size={25} className='mr-4 text-white' /><a href="/communitytwo" className='  text-white decoration-transparent'> Community</a></li>
                <li className='text-xl py-4 flex'><BiStore size={25} className='mr-4 text-white' /> <a href="/comingsoon" className='  text-white decoration-transparent'>Store</a></li>
                
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;