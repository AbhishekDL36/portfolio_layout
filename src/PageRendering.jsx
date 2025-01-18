 
import React from 'react'
import ReactSection from "./ReactSection";
import JavaScriptSection from "./JavascriptSection";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hero from './Hero';
export default function PageRendering() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Hero/>} />
       
        <Route path="/React-Skills" element={<ReactSection />} />
        <Route path="/JS-Skills" element={<JavaScriptSection />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
