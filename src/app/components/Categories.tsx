import React from 'react'
import Image from 'next/image'

const Category = () => {
    return (
        <div className="mt-16 mb-10 px-6 lg:px-28">
            {/* Image Section */}
              
              
      <div className=' pt-14'>
      <div className='flex'>
      <button className='h-[40px] w-[20px] bg-red-500 ml-4'></button>
      <span className=" font-bold text-red-500 size-13 px-2 py-1 rounded">Categories</span>
              </div>
              </div>

            {/* Heading Section */}
            <div className="flex justify-center lg:justify-start mt-4">
                <h1 className="text-[24px] lg:text-[38px] font-semibold text-left lg:text-left">
                    Browse By Category
                </h1>
            </div>
        </div>
    )
}

export default Category
