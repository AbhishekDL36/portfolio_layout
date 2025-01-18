
import { createContext, useEffect, useState } from 'react';
import Mainfile from './Mainfile';
import './styles.css'
import Welcomepage from './Welcomepage';
export const myContext= createContext()
function App() {
  const [isTrue,setisTrue]= useState(false)

 
  return (
    <div >
      <myContext.Provider value={{isTrue,setisTrue}}>
      {
  isTrue?
 <Mainfile/>
  :<Welcomepage/>
 }
   
      </myContext.Provider>
  
    </div>
  );
}

export default App;

