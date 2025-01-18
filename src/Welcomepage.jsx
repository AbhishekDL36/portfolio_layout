import React from 'react'

export default function Welcomepage() {
  return (
    <div className='flex justify-center h-[100vh] items-center bg-gray-300 flex-col gap-[30px]'>
    <p className='text-4xl font-DancingScript'> Abhishek </p> 
    <button class="relative group bg-gradient-to-r from-blue-400 to-purple-500 text-white h-[50px] w-[120px] rounded-2xl overflow-hidden">
  <span class="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-y-full group-hover:translate-y-0 ">
  Click Here 
  </span>
  <span class="absolute inset-0 flex items-center justify-center transition-transform duration-500 translate-y-0 group-hover:-translate-y-full">
  Know Me
  </span>
  <div className="absolute inset-0.5 rounded-2xl animate-pulse bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 opacity-50 blur-lg"></div>
</button>

    </div>
  )
}
