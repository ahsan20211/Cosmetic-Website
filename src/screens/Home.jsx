import Product from '@/components/Product'

import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'


function Home() {
    return (
        <div>
            <Navbar/>
            <div className='banner'>
                <img src="/Frame 97.png" alt="" className="w-full" />
                <div className="section-1 flex  mt-5 w-[100%]">

                    <img src="/Group 81.png" alt="" className="w-[24%] mr-2" />
                    <img src="/Group 81.png" alt="" className="w-[24%] mx-2" />
                    <img src="/Group 81.png" alt="" className="w-[24%] mx-2" />
                    <img src="/Group 81.png" alt="" className="w-[24%] ml-3" />



                </div>
                <div className='w-full'>
                      <Product />
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Home