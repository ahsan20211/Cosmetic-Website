
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineDelete } from "react-icons/md";
import { removeItem } from '@/redux/slice';


function Popup() {
  let [quantity, setQuantity] = useState(1)

  const cart = useSelector((state) => state.Cart.cart)
  console.log(cart, "redux data")
const dispatch = useDispatch()
  return (

    <>
      <div className={`absolute right-5 top-20 shadow bg-white w-[500px] h-[400px] `} >
        <div className='bg-black p-4'>
          <h2 className='text-4xl text-white'>Items</h2>

        </div>
        <div className='cart-items'>
          {
            <ul>
              {
                cart?.map((cartitems) => {
                  console.log(cartitems);

                  return (
                    <div className='cart flex items-center mt-2 justify-between px-5'>
                      <div className='cart-image'>
                        <li><img src={cartitems?.data.thumbnail} height={100} width={100} alt="" /></li>
                      </div>
                      <div className='cart-cntent '>
                        <li>{cartitems.data.title}</li>

                        <li className='text-sm'>{cartitems.data.category}</li>
                        <li className='text-sm'>{

                          <div className='flex border p-1 pa w-[80px] justify-between'>
                            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)} >-</button>
                            <p>{quantity}</p>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                          </div>
                        }
                        </li>


                      </div>
                      <li>{Math.round(cartitems.data.price * quantity)}</li>
                      <div>
                        <button onClick={()=>dispatch(removeItem(cartitems.data.id))}><MdOutlineDelete /></button>

                      </div>
                    </div>

                  )

                })
              }
            </ul>
          }
        </div>


      </div>


    </>

  )
}




export default Popup