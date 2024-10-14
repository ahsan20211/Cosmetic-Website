import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";



function Login() {
    return (

        <div className="w-[100%] h-screen flex flex-row relative">
            <div className="absolute">
                <img src="/texture-5sl 2.svg" alt="" />

            </div>
            <div className='left w-[50%] h-full flex justify-center items-center border'>
                <div className='flex flex-col justify-center align-middle '>
                    <h1 className="text-4xl font-normal mb-3">Login</h1>
                    <hr className="w-14 border-[#C75D68] mb-3" />

                    <input type="email" placeholder='john@gmail.com' className="border border-black p-3 w-80"/>
                    <input type="password" placeholder='passward' name="" id="" className="border border-black p-3 w-80 my-4"/>
                     <div className="bottom-content flex justify-between">
                     <div className="flex ">
                    <input type="checkbox" /><span className="text-xs text-[#A5A5A5;] ml-1">Remember me</span>

                     </div>
                     <div className="sec-para">
                    <p className="text-[#C75D68] text-xs">Forgot Password?</p>

                     </div>

                     </div>
                     <div className="button flex justify-end mt-4"> 
                        <Link to="/home" ><Button>LOGIN</Button></Link>
                     </div>
                    
                    
                </div>

            </div>
            <div className='right w-[50%] h-full'>
                
                <img className='w-full h-full object-cover' src="/login1.png" alt="" />

            </div>
        </div>




    )
}

export default Login