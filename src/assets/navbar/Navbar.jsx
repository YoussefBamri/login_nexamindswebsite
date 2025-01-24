import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center  lg:px-20 w">
            <img src="nexaminds.jpg" alt="Logo" className="w-[220.23px] h-[48px]" />
            
            <ul className="flex gap-10 text-black text-[16px] font-medium">
                <li className="hover:text-orange-600 "><a href="#">Home</a></li>
                <li className="hover:text-orange-600"><a href="#">About us</a></li>
                <li className="hover:text-orange-600 "><a href="#">Blog</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
