 
import React from 'react'
import ReactSection from "./ReactSection";
import JavaScriptSection from "./JavascriptSection";

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Mainfile from './Mainfile';
export default function PageRendering() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Mainfile/>} />
       
        <Route path="/React-Skills" element={<ReactSection />} />
        <Route path="/JS-Skills" element={<JavaScriptSection />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
