"use client"
import Link from "next/link";
import React,{useState} from "react";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navlinks = [
    {
        title:"Home",
        path:"#HeroSection",
    },
    {
        title:"About",
        path:"#AboutSection",
    },
    {
        title:"Skills",
        path:"#skillsSection"
    },
    {
        title:"Resume",
        path:"#resume"
    },
    {
        title:" Projects",
        path:"#ProjectSection"
    },
    {
        title:"Contact",
        path:"#EmailSection"
    }

]

const Navbar = () => {

    const [navbarOpen,setNavbarOpen] = useState(false);


    return(
        <nav className="fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100" >
            <div className=" flex flex-wrap items-center justify-between mx-auto px-4 py-4" >
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold" ></Link>
                
                <div className=" modile-menu block md:hidden " >
                    { !navbarOpen? 
                    (<button onClick={() => {setNavbarOpen(true)}} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white" > 
                        <Bars3Icon className="h-5 w-5" /> 
                    </button>)
                    :
                    (<button onClick={() => {setNavbarOpen(false)}} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        <XMarkIcon className="h-5 w-5" /> 
                          </button>) }
                </div>
                
                <div className=" menu hidden md:block md:w-auto" id="navbar" >
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 " >
                        {navlinks.map( (link,index) => 
                            <li key={index}>
                                
                                <NavLink  title={link.title} href={link.path} />
                            </li>
                         )}
                    </ul>
                </div>
            </div>
            {navbarOpen?<MenuOverlay  links={navlinks} />:null}
        </nav>
    )
}

export default Navbar;