import { useState } from "react";

import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { IoIosCloseCircle } from '@react-icons/all-files/io/IoIosCloseCircle';
import { FaBell } from '@react-icons/all-files/fa/FaBell';
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp';
import { IoIosLogOut } from '@react-icons/all-files/io/IoIosLogOut';
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';
import { IoSettingsOutline } from '@react-icons/all-files/io5/IoSettingsOutline';
import { IoSearchOutline } from '@react-icons/all-files/io5/IoSearchOutline';
import { IoLogInOutline } from '@react-icons/all-files/io5/IoLogInOutline';
import { IoCalendarOutline } from '@react-icons/all-files/io5/IoCalendarOutline';
import { BiCalendarHeart } from '@react-icons/all-files/bi/BiCalendarHeart';
import { BiCalendarCheck } from '@react-icons/all-files/bi/BiCalendarCheck';

import logo from "./logo.jpg"

const NavBar = ({ loggedIn }) => {

    const userName = "John Mark"

    const [clicked,setClicked] = useState(false);

    
    const clickedButton = ()=>{
        if(clicked === false){
            setClicked(true);
        }
        else{
            setClicked(false);
        }
    }


    return ( 
        <nav className="relative flex flex-col flex-wrap px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto font-sans">

                <div className="flex flex-col items-center justify-between w-full md:w-auto md:justify-start md:flex-row">
                    <div className="flex justify-between w-full md:w-auto">
                        <a href="/" className="flex">
                            <div className="self-center mr-3">
                                <img src= { logo } alt="Brand Logo" className="h-6"/>
                            </div>
                            <span className="self-center md:text-2xl font-semibold whitespace-nowrap text-blue-900 dark:text-white">EventTrace</span>
                        </a>

                        <div className="inline-flex">
                            
                            <button data-collapse-toggle="sm-user-menu" id="sm-drop-down" type="button" className="inline-flex items-center p-2 mr-3 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 ">
                                <FaUserCircle />
                            </button>
                               

                            <button data-collapse-toggle="nav-menu" type="button" onClick={ clickedButton }  className="block items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 ">
                                {
                                    clicked===false && <FaBars className='self-center' />
                                }
                                {
                                    clicked===true && <IoIosCloseCircle className='self-center'/>
                                }
                                
                            </button>
                        </div>
                        
                    </div>
                        <div id="sm-user-menu" className="hidden absolute z-100 w-44 text-left bg-white shadow self-center" style={{ right:0, top:45 }}>
                            <ul className="py-1 px-2" aria-labelledby="sm-drop-down">
                                <li>
                                    {
                                        loggedIn === true &&
                                        <a href="#" className="block py-2 px-4 text-sm hover:text-black active:text-black text-gray-600">Account Setting</a>
                                    }
                                     {
                                        loggedIn === false &&
                                        <a href="#" className="block py-2 px-4 text-sm hover:text-black active:text-black text-gray-600">
                                            <span className="inline-flex">
                                                <IoLogInOutline className="self-center"/>
                                                <span className="self-center pl-2">
                                                  Sign in
                                                </span>
                                            </span>
                                        </a>
                                    }
                                </li>
                                <li>
                                    {
                                        loggedIn === true &&
                                        <a href="#" className="block py-2 px-4 text-sm hover:text-black active:text-black text-gray-600">User Dashboard</a>
                                    }
                                    {
                                        loggedIn === false &&
                                        <a href="#" className="block py-2 px-4 text-sm hover:text-black active:text-black text-gray-600">
                                            <span className="inline-flex">
                                                <IoCalendarOutline className="self-center"/>
                                                <span className="self-center pl-2">
                                                   Organise Events
                                                </span>
                                            </span>
                                        </a>
                                    }
                                </li>
                                <li>
                                    {
                                        loggedIn === true &&
                                        <span className="block py-2 px-4 text-sm hover:text-black active:text-black text-gray-600">
                                            <button type="button" className="inline-flex p-0">
                                                <IoIosLogOut className="self-center"/>
                                                <span className="self-center pl-2">Logout</span>
                                            </button>
                                        </span>
                                    }
                                    {
                                        loggedIn===false &&
                                        <a href="#" className="block py-2 px-4 text-sm hover:text-black active:text-black text-gray-600">
                                            <span className="inline-flex">
                                                <IoSearchOutline className="self-center"/>
                                                <span className="self-center pl-2">
                                                   Search Events
                                                </span>
                                            </span>
                                            
                                        </a>
                                    }
                                   
                                </li>
                            </ul>
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

                        </ul>
                    </div>
                </div>
                
                <div className="hidden md:block">

                    {
                        loggedIn===false &&
                        /* <button type="button" className="text-center border border-gray-600 text-base font-medium inline-flex rounded hover:bg-transparent  hover:text-blue-700 px-1 text-gray-600">
                            <span className="px-2 py-0.5">Sign in</span>
                        </button> */
                        <button type="button" className="ml-3.5 text-center bg-blue-900 text-base font-medium inline-flex rounded px-2 text-gray-600">
                            <span className="px-2 py-0.5 text-white">Sign in</span>
                        </button>
                    }
                    {
                        loggedIn===true && 
                        <button type="button" className="pl-3 inline-flex text-sm font-medium rounded-lg hover:bg-transparent border-0 hover:text-blue-700 p-0 text-gray-600">
                            <FaBell  className="self-center"/>
                        </button>
                    }
                    {
                        loggedIn === true && 
                        <button type="button" className="pl-4 inline-flex text-base font-medium rounded-lg hover:bg-transparent border-0 hover:text-black active:text-black p-0 text-gray-600">
                            <FaUserCircle  className="self-center"/>
                            <span className="self-center pl-2 pr-1">{ userName }</span>
                        </button>
                    }

                    {
                        loggedIn === true && 
                        <button data-collapse-toggle="user-menu" id="drop-down" type="button" onClick={ clickedButton } className="pl-2 inline-flex text-base font-medium rounded-lg hover:bg-transparent border-0 hover:text-black active:text-black p-0 text-gray-600">
                            {
                                clicked===false && <IoIosArrowDown  className="self-center"/>
                            }
                            {
                                clicked===true && <IoIosArrowUp  className="self-center"/>
                            }
                        </button>
                    }

                    {
                        loggedIn === true &&
                        <div id="user-menu" className="hidden absolute mt-3 z-100 md:w-55 text-left list-none bg-white shadow">
                            <ul className="py-1 px-2" aria-labelledby="drop-down">
                                <li>
                                    <a href="#" className="block py-2 px-4 text-md hover:text-black active:text-black text-gray-600">
                                        <span className="inline-flex">
                                            <IoSettingsOutline className="self-center"/>
                                            <span className="self-center pl-2">
                                                Account Setting
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-md hover:text-black active:text-black text-gray-600">
                                        <span className="inline-flex">
                                            <BiCalendarCheck className="self-center"/>
                                            <span className="self-center pl-2">
                                                Registered Events
                                            </span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-md hover:text-black active:text-black text-gray-600">
                                        <span className="inline-flex">
                                            <BiCalendarHeart className="self-center"/>
                                            <span className="self-center pl-2">
                                                Favourite Events
                                            </span>
                                        </span>
                                    </a>
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
                    }
                    
                </div> 
                
            </div>
        </nav>
     );
}

export default NavBar;