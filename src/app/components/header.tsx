import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'

const Upperheader = () => {
  return (
    <div className='flex items-center justify-center h-[48px] w-full bg-[#000000] pt-3 pb-3 gap-32'>
        <span className='text-white'>Summer Sale For All Swim Suits 
            And Free Express Delivery - OFF 50%! <a className='mx-7 underline' href="/home">ShopNow</a></span>
            <select className='bg-[#000000] text-white mx-10'>
                <option value="English">English</option>
            </select>

      
    </div>
  )
}

export default Upperheader


export const Header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-40 text-xl">Exclusive</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-5">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">Contact </a>
      <a className="mr-5 hover:text-gray-900">Sign up</a>
    </nav>
     <input type="text" placeholder='what are you looking for?' className='w-[200px]' ></input>
     <IoIosSearch className='text-black size-4' />
     <IoHeartOutline className='text-black size-5 mx-3'  />
     <IoCartOutline className='text-black size-5 mx-2' />

  </div>
</header>

    </div>
  )
}

