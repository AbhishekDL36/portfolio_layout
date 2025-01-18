
import React, { useContext } from 'react';
import { myContext } from './App';

export default function Welcomepage() {
const {isTrue,setisTrue} =   useContext(myContext)
  return (
    <div className="relative flex justify-center items-center bg-gradient-to-r from-blue-900 via-purple-900 to-black h-[100vh] flex-col gap-6 animate-fade-in">

      {/* Main Name Section with fade-in animation */}
      <p className="text-6xl font-extrabold text-white tracking-tight " style={{ fontFamily: 'Dancing Script' }}>
        Abhishek
      </p>

      {/* Button with hover animation */}
      <button className="relative group bg-blue-800 text-white font-semibold text-lg h-[50px] w-[160px] rounded-md shadow-xl transition-all duration-600 hover:bg-blue-700 transform group-hover:scale-105" onClick={()=>setisTrue(true)}>
        <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
          Learn More
        </span>
        <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 opacity-0">
          Know Me
        </span>
      </button>
    </div>
  );
}
