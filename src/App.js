
import { useEffect, useState } from 'react';
import Mainfile from './Mainfile';
import './styles.css'
import Welcomepage from './Welcomepage';
function App() {
  const [isTrue,setisTrue]= useState(false)
  // useEffect(()=>{
  // setTimeout(() => {
  //   setisTrue(true)
  // }, 5000);
  // },[])
  return (
    <div >
     {
  isTrue?
 <Mainfile/>
  :<Welcomepage/>
 }
   
    </div>
  );
}

export default App;

