import { useState } from "react";
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaBell } from '@react-icons/all-files/fa/FaBell';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';
import logo from "./logo.jpg"

const NavBar = ({ loggedIn }) => {

    const userName = "John Mark"

    var show = "hidden md:block";
    var showSmallScreen = "md:hidden"
    var hide = "hidden";

    var hideUserName= "";
    var hideUserNameSS= "";
    var hideSignUp= "";
    var hideSignUpSS= "";

    if(loggedIn === false){
        hideUserName = hide;
        hideUserNameSS = hide;
        hideSignUp = show;
        hideSignUpSS = showSmallScreen;
    } else{
        hideUserName = show;
        hideUserNameSS = showSmallScreen;
        hideSignUp = hide;
        hideSignUpSS = hide;
    }


    return ( 
        <nav className="relative flex flex-wrap px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto font-sans">
                <div className="flex flex-col items-center justify-between w-full md:w-auto md:justify-start md:flex-row">
                    <div className="flex justify-between w-full md:w-auto">
                        <a href="/" className="flex">
                            {/* Logo */}
                            <div className="self-center mr-3">
                                <img src= { logo } alt="Brand Logo" className="h-6"/>
                            </div>
                            {/* Brand Name */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-900 dark:text-white">EventTrace</span>
                        </a>
                        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 ">
                            <FaBars/>
                        </button>
                    </div>
                     

                    
                    <div className=" hidden self-center md:mt-0 w-full mt-4 md:block md:w-auto md:text-left bg-gray-300 md:bg-white md:ml-20 rounded-lg" id="mobile-menu">
                        <ul className="flex flex-col text-left text-base font-medium md:flex-row md:space-x-9 md:mt-0 md:text-base md:font-medium">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-gray-600 ">Home</a>
                            </li>

                            <li>
                                <a href="#" className="block py-2 pr-4 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-gray-600 ">Events</a>
                            </li>

                            <li>
                                <a href="#" className="block py-2 pr-4 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-gray-600 ">Create Events</a>
                            </li>
                            
                            <li className={ hideUserNameSS }>
                                <a href="#" className="block py-2 pr-4 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                <button data-collapse-toggle="mobile-menu3" type="button" className="inline-flex">
                                    <FaUserCircle className="self-center"/>
                                    <span className="self-center pl-2 text-base font-medium">Username</span>
                                </button></a>
                                
                            </li>

                            <li className= { hideSignUp }>
                                <button data-collapse-toggle="mobile-menu" type="button" className="text-center border border-black inline-flex text-sm font-medium rounded hover:bg-transparent  hover:text-blue-700 px-1">
                                SignUp
                                </button>
                            </li>

                            <li className={ hideSignUpSS }>
                                <a href="#" className="block py-2 pr-4 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                    <button data-collapse-toggle="mobile-menu3" type="button" className="inline-flex">
                                        Sign Up
                                    </button>
                                </a>
                                
                            </li>

                        </ul>
                    </div>
                </div>
 
                   
                <div className= { hideUserName }>
                    <button data-collapse-toggle="mobile-menu" type="button" className="pl-3 inline-flex text-sm font-medium rounded-lg hover:bg-transparent border-0 hover:text-blue-700 p-0 text-gray-600">
                        <FaBell  className="self-center"/>
                    </button>
                    <button data-collapse-toggle="mobile-menu" type="button" className="pl-4 inline-flex text-base font-medium rounded-lg hover:bg-transparent border-0 hover:text-blue-700 p-0 text-gray-600">
                        <FaUserCircle  className="self-center"/>
                        <span className="self-center pl-2">{ userName }</span>
                        <IoIosArrowDown  className="self-center pl-1"/>
                    </button>
                </div>   
            </div>
        </nav>
     );
}
 
export default NavBar;