import { useState } from 'react';
import './App.css';
import Navbar from './assets/navbar/Navbar.jsx'; 
import LeftSide from './assets/left-side/Left-side.jsx'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
    <div className="px-[80px] py-[32px] font-poppins-serif">
      <Navbar />
      <LeftSide />
   </div> </>
  );
}

export default App;