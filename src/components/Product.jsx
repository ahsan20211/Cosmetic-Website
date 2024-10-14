import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Product() {

  let [data, setData] = useState(null)

  const fetchdata = async () => {

    // console.log(data)
    try {
      let products = await fetch("https://dummyjson.com/products")
      let convertData = await products.json()
      const updatedData = convertData.products.filter((convertData) => ["beauty", "fragrances"].includes(convertData.category))
      console.log(updatedData, "cosmetic data")
      setData(updatedData)
    } catch (error) {
      console.log(error);
      alert("error", error)

    }
  }
  useEffect(() => {

    fetchdata();

  }, [])
  console.log(data, "api response"
  )
  return (
    <>
      <div className="flex flex-row  flex-wrap  w-[100%]  gap-3 border justify-center pt-20 ">

        {data?.map((items, index) => {

          return (

            <>
              <Link to={`/productdetail/${items.id}`} key={index} className='card w-[24%]    flex flex-col items-center  justify-center'>

                <div className='card text-center'>
                  <div className='w-full h-[300px]  justify-center  p-8 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md object-cover'>
                    <img className='object-cover' src={items.images[0]} alt="" />
                  </div>
                  <div className='flex flex-col'>

                    <span className='text-[#C75D68;]'>{items.category}</span>
                    <span>{items.title}</span>
                    <span>{items.price}</span>
                  </div>


                </div>
              </Link>
            </>

          )

        })}

      </div>
    </>

  )

}


export default Product