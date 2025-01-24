import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center ">
            <img src="logo.png" alt="Logo" className="w-40" />
            
            <ul className="flex gap-10 text-black text-[16px] font-medium">
                <li className="hover:text-orange-600 "><a href="#">Home</a></li>
                <li className="hover:text-orange-600"><a href="#">About us</a></li>
                <li className="hover:text-orange-600 "><a href="#">Blog</a></li>
            </ul>

            
        </nav>
    );
};

export default Navbar;  