import React from 'react'

function PopUp({setAddedProductToCart}) {
  return (
   <div className='w-4/6 md:w-4/12 flex flex-row h-[5vh] rounded-b-xl bg-green-200 p-2 absolute font-semibold  items-center justify-around  text-center font-inter top-0 text-bars left-20 sm:left-[55vh]'>
     <h1 className='text-xs sm:text-lg'>Product added successfully to Cart</h1>
     <button onClick={()=>setAddedProductToCart(false)} className='h-full  ml-5 sm:ml-2'><img className=' size-5 sm:size-7' src="src/assets/icons8-done-50.png" alt="" /></button>
   </div>
  )
}

export default PopUp