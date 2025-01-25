import { useState } from 'react';
import './App.css';
import Navbar from './assets/Navbar/navbar.jsx';
import LeftSide from './assets/left-side/Left-side.jsx'; 
import RightSide from './assets/right-side/right-side.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
    <div className="gap-20 lg:px-20 py-7 font-poppins-serif space-y-14">
      <Navbar />
      <div className="flex justify-between gap-6 items-center">
        <LeftSide />
        <RightSide />
      </div>
   </div> </> 
  );
}

export default App;


