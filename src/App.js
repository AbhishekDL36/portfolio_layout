
import { createContext, useEffect, useState } from 'react';

import './styles.css'

import Welcomepage from './Welcomepage';
import PageRendering from './PageRendering';

export const myContext= createContext()
function App() {
  const [isTrue,setisTrue]= useState(false)

 
  return (
    <div >
      <myContext.Provider value={{isTrue,setisTrue}}>
      {
  isTrue?
 <PageRendering/>
  :<Welcomepage/>
 }
  
      </myContext.Provider>
  
    </div>
  );
}

export default App;

