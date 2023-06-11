import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () => {
  const [value, setValue] = useState(true)

  const handleValue = () => {
    setValue(!value)
  }

  const listStyle = 'text-2xl text-block p-4 hover:text-gray-600 hover:scale-125 duration-200 ease-in-out cursor-pointer'
  return (

    <nav className='w-full h-24 flex items-center justify-between px-4'>
      <img alt='logo in black' src='/domino.png' width={200} height={200} />
      <ul className='poppins hidden sm:flex sm:mr-32'>
        <li className={listStyle}>Career</li>
        <li className={listStyle}>Projects</li>
        <li className={listStyle}>Contact</li>
        <li className={listStyle}>About</li>
      </ul>
    
    {/* CODE BELOW IS FOR HAMBURGER MENU */}
      <div className='mr-2 block sm:hidden' onClick={handleValue}>
        {value ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30}/>}
      </div>
      <div className={!value ? 'fixed left-0 top-0 w-[70%] bg-black text-white poppins h-full duration-300 ease-in-out sm:hidden' : "fixed left-[-100%]"}>
      <img alt='logo in white' src='/domino-white.png' width={200} height={200} />
        <ul className='mt-12 text-xl'>
          <li className='p-5 border-b border-b-gray-800'>Career</li>
          <li className='p-5 border-b border-b-gray-800'>Projects</li>
          <li className='p-5 border-b border-b-gray-800'>Contact</li>
          <li className='p-5'>About</li>
        </ul>
      </div>
      {/* END OF HAMBURGER MENU */}
      <div className='hidden sm:block'>
      </div>
    </nav>
  )
}

export default Navbar