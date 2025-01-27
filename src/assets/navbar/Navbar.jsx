import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center ">
            <img src="logo.png" alt="Logo" className="w-40" />
            <ul className="flex gap-10 text-black text-[16px] font-medium">
                <li className="hover:text-orangeDark "><a href="#">Home</a></li>
                <li className="hover:text-orangeDark"><a href="#">About us</a></li>
                <li className="hover:text-orangeDark "><a href="#">Blog</a></li>
            </ul>  
        </nav>
    );
};

export default Navbar;  
