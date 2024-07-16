import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="w-full bg-black py-3">
        <div className="container flex justify-between items-center">
            <div>
                <h4>Logo</h4>
            </div>
            <div>            
                <Link 
                to="/" 
                className="text-white font-mono font-bold text-lg px-5"
                >Home
                </Link>
                <Link 
                to="/notes" 
                className="text-white font-mono font-bold text-lg px-5"
                >Task View
                </Link>
                <Link 
                to="/contacts" 
                className="text-white font-mono font-bold text-lg px-5"
                >Contact
                </Link>                   
            </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;

