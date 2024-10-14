import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import { Button } from "@/components/ui/button"
import { useDispatch } from 'react-redux';
import { addtoCart } from '@/redux/slice';
import Footer from './footer';



const Productdetail = () => {

  let { id } = useParams();
  console.log(id)
  let [data, setData] = useState(null)
  let [quantity, setQuantity] = useState(1)
  let dispatch = useDispatch()

  const fetchdata = async () => {

    try {
      let products = await fetch(`https://dummyjson.com/products/${id}`)
      let convertData = await products.json()
      // const updatedData = convertData.products.filter((convertData) => ["beauty", "fragrances"].includes(convertData.category))
      console.log(convertData, "cosmetic data")
      setData(convertData)


    } catch (error) {
      console.log(error);
      alert("error", error)

    }
  }
  useEffect(() => {

    fetchdata();

  }, [])


  return (
    <>
      <Navbar />
      <div className='banner'>
        <img src="/product-banner.png" alt="" />

      </div>
      <div className='main w-[100%] flex justify-center ' >
        <div className='right-site flex justify-center items-center w-[50%]'>
          <img className='object-cover h-[500px]' src={data?.images[0]} alt="" />
        </div>
        <div className='left-site w-[50%]   items-start justify-center   flex flex-col '>
          <h2 className='title text-4xl '>{data?.title}</h2>
          <h4 className='prie text-2xl text-[#C75D68;]'>{data?.price}</h4>
          <p> {data?.description}    </p>
          <p> {data?.availabilityStatus}</p>
          <div className='buttons-botm flex'>
            <div className='flex border p-2 pa w-[105px] justify-between '>
              <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)} >-</button>
              <p>{quantity}</p>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <div className='btn-right ml-2'>

              <Button onClick={() => dispatch(addtoCart({data , quantity}))}> Add to cart </Button>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )

}
export default Productdetail