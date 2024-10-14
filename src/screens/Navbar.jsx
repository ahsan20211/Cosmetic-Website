; import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import Popup from './Popup';



export default function Navbar() {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const routes = [
        {
            name: "HOME",
            link: "/home"
        },
        {
            name: "About",
            link: "/home"
        },
        {
            name: "Shop",
            link: "/home"
        },
        {
            name: "CONTACT US",
            link: "/home"
        },
        {
            name: "Blogs",
            link: "/home"
        },

    ]

    return (


        <div>
            <div className=' flex justify-between items-center mx-8 py-4'>
                <div className='logo justify-center  '>
                    <img src="/Ethereal Elegance.png" alt="ahsan" />

                </div>


                <div className='menu  text-black '>
                    <ul className=' opacity-50  '>
                        {
                            routes.map((route) => {
                                return (

                                    <li className='inline-block px-3'><Link to={route.link}>{route.name}</Link></li>
                                )
                            }
                            )
                        }

                    </ul>
                </div>
                <div className='icons flex items-center'>
                    <Link to="/" ><Button>LOGIN</Button></Link>
                    <IoIosSearch className='ml-2' />
                    <IoBagOutline onClick={() => setIsCartOpen(!isCartOpen)} className='ml-2' />
                    <div className=''>

                        {isCartOpen && (
                            <Popup />

                        )

                        }
                    </div>


                </div>
            </div>
        </div>
    )
}