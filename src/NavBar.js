import { useState } from "react";
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { IoIosCloseCircle } from '@react-icons/all-files/io/IoIosCloseCircle';
import { FaBell } from '@react-icons/all-files/fa/FaBell';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosLogOut } from '@react-icons/all-files/io/IoIosLogOut';
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';
import logo from "./logo.jpg"

const NavBar = ({ loggedIn }) => {

    const userName = "John Mark"


    const [currentButton, setCurrentButton] = useState('self-center');
    const [closeButton, setCloseButton] = useState('hidden');

    var show = "hidden md:block";
    var showSmallScreen = "md:hidden"
    var hide = "hidden";

    var hideUserName= "";
    var hideUserNameSS= "";
    var hideAuth= "";
    var hideAuthSS= "";

    if(loggedIn === false){
        hideUserName = hide;
        hideUserNameSS = hide;
        hideAuth = show;
        hideAuthSS = showSmallScreen;
    } else{
        hideUserName = show;
        hideUserNameSS = showSmallScreen;
        hideAuth = hide;
        hideAuthSS = hide;
    }
     
    
    const changeButton = ()=>{
        if(closeButton === "hidden"){
            setCloseButton("self-center");
            setCurrentButton("hidden");
        }
        else{
            setCurrentButton("self-center");
            setCloseButton("hidden");
        }
    }

    

    return ( 
        <nav className="relative flex flex-col flex-wrap px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto font-sans">

                <div className="flex flex-col items-center justify-between w-full md:w-auto md:justify-start md:flex-row">
                    <div className="flex justify-between w-full md:w-auto">
                        <a href="/" className="flex">
                            {/* Logo */}
                            <div className="self-center mr-3">
                                <img src= { logo } alt="Brand Logo" className="h-6"/>
                            </div>
                            {/* Brand Name */}
                            <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-blue-900 dark:text-white">EventTrace</span>
                        </a>

                        <div className="inline-flex">
                            <div className={ hideAuthSS }>
                                <span className="block py-2 pr-4 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-600">
                                    <button type="button" className="inline-flex">
                                    <span className="self-center text-base font-medium">Sign In</span>
                                    </button>
                                </span>  
                            </div>

                            <div className={ hideUserNameSS }>
                                <a href="#" title="Log out" className="block py-2 pr-1 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-600">
                                    <button type="button" className="inline-flex">
                                        <IoIosLogOut className="self-center"/>
                                        <span className="pl-0.5 self-center text-sm font-medium">Log Out</span>
                                    </button>
                                </a>  
                            </div>

                            <button data-collapse-toggle="nav-menu" type="button" onClick={ changeButton }  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 ">
                                <FaBars className={ currentButton } />
                                <IoIosCloseCircle className={ closeButton } />
                            </button>
                        </div>
                        
                    </div>
                    
                    <div className=" hidden self-center md:mt-0 w-full md:block md:w-auto md:text-left bg-gray-300 md:bg-white md:ml-20 rounded-lg" id="nav-menu">
                        <ul className="flex flex-col text-left text-base font-medium md:flex-row md:space-x-9 md:mt-0 md:text-base md:font-medium">
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-gray-600 ">Home</a>
                            </li>

                            <li>
                                <a href="#" className="block py-2 pr-4 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-gray-600 ">Events</a>
                            </li>

                            <li>
                                <a href="#" className="block py-2 pr-4 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:text-gray-600 ">Create Events</a>
                            </li>
                            
                            <li className={ hideUserNameSS }>
                                <span className="block py-2 pr-4 pl-4 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                    <button type="button" className="inline-flex w-full">
                                        <FaUserCircle className="self-center"/>
                                        <span className="self-center pl-2 text-base font-medium">{userName}</span>
                                    </button>
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className= { hideUserName }>
                    <button type="button" className="pl-3 inline-flex text-sm font-medium rounded-lg hover:bg-transparent border-0 hover:text-blue-700 p-0 text-gray-600">
                        <FaBell  className="self-center"/>
                    </button>
                    <button data-collapse-toggle="user-menu" id="drop-down" type="button" className="pl-4 inline-flex text-base font-medium rounded-lg hover:bg-transparent border-0 hover:text-black active:text-black p-0 text-gray-600">
                        <FaUserCircle  className="self-center"/>
                        <span className="self-center pl-2 pr-1">{ userName }</span>
                        <IoIosArrowDown  className="self-center"/>
                    </button>

                    <div id="user-menu" className="hidden absolute mt-3 z-100 w-44 text-left list-none bg-white shadow">
                        <ul className="py-1 px-2" aria-labelledby="drop-down">
                            <li>
                                <a href="#" className="block py-2 px-4 text-md hover:text-black active:text-black text-gray-600">Account Setting</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-md hover:text-black active:text-black text-gray-600">User Dashboard</a>
                            </li>
                            <li>
                                <span className="block py-2 px-4 text-md hover:text-black active:text-black text-gray-600">
                                    <button type="button" className="inline-flex p-0">
                                        <IoIosLogOut className="self-center"/>
                                        <span className="self-center pl-2">Logout</span>
                                    </button>
                                </span>
                            </li>
                        </ul>
                    </div>

                    
                </div> 
                
                <div className= { hideAuth }>
                    <button type="button" className="text-center border border-gray-600 text-base font-medium inline-flex rounded hover:bg-transparent  hover:text-blue-700 px-1 text-gray-600">
                        <span className="px-1">SignUp</span>
                    </button>
                    
                    <button type="button" className="ml-3.5 text-center bg-blue-900 text-base font-medium inline-flex rounded hover:bg-transparent  hover:text-blue-700 px-1 text-gray-600">
                        <span className="px-1 text-white">Login</span>
                    </button>
                </div>  
            </div>
        </nav>
     );
}

export default NavBar;