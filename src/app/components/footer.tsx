import React from 'react'
import { FaAppStore, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { ImQrcode } from 'react-icons/im'
import { IoLogoGooglePlaystore} from 'react-icons/io5'

const Footer = () => {
  return (
    <div>
      <footer className="'text-[#fafafa]' body-font bg-[#000000]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center gap-10 -mb-10 -mx-4">
      <div className="lg:w-1/6 md:w-1/2 w-full whitespace-nowrap  px-6">
        <h2 className="title-font font-medium text-[#fafafa] tracking-widest text-sm mb-3">
          Exclusive
        </h2>
        <nav className=" list-none mb-10">
          <li>
            <a className='text-[#fafafa] '>
              Subcribe</a>
          </li>
          <li>
            <a className='text-[#fafafa] mx-0 text-justify '>Get 10% off your first order</a>
          </li>
          <li>
            <a>
              
             <input type="text" placeholder='Enter your Email    >'
               className='flex items-center bg-black '>
                
                
                

             
             </input >
             
             
             </a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Support
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className='text-[#fafafa]'>xyz,pakistan</a>
          </li>
          <li>
            <a className='text-[#fafafa]'>hssan10997@gmail.com</a>
          </li>
          <li>
            <a className='text-[#fafafa]'>+920000000000</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Account
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className='text-[#fafafa]'>My account</a>
          </li>
          <li>
            <a className='text-[#fafafa]'>login / register</a>
          </li>
          <li>
            <a className='text-[#fafafa]'>cart</a>
          </li>
          <li>
            <a className='text-[#fafafa]'>wishlight</a>
          </li>
          <li>
            <a className='text-[#fafafa]'>shop</a>
          </li>

        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
            Quick link
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className='text-[#fafafa]'>privacy policy</a>
          </li>
          <li>
            <a className='text-[#fafafa]'>terms of use</a>
          </li>
          <li>
            <a className='text-[#fafafa]'>FAQ</a>
          </li>
          <li>
            <a className='text-[#fafafa]'>Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full whitespace-nowrap  px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Download App
        </h2>
        <nav className="list-none mb-10 whitespace-nowrap">
          <li>
            <a className='text-gray-500 text-justify'>save $3 with app new user only</a>
          </li> 
          <div className='text-white text-justify whitespace-nowrap gap-5'>

            <ImQrcode  />
            <IoLogoGooglePlaystore />
            <FaAppStore />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FiTwitter />
            </div>

        
         
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        
        
      </div>
    </div>
  </div>
  
  <div className="bg-black">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-center">
      <p className="text-gray-500 text-sm text-center j">
        © Copyright Rimel 2022.All right 2022. All right reserved
        </p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
