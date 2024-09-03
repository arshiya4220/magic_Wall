import React from 'react'
import Wish from './Wish'
// import Newwish from './Newwish'
const Main = () => {
  return (
    <>
       <div className='text-center py-8  bg-gradient-to-tl from-[#9a8cce] via-[#141479] bg-[#9fb3d8] to-[#0f0249] bg-clip-text text-transparent text-xl md:text-5xl font-serif'><p className=' border-2  border-[#0a0b68] bg-gradient-to-tl bg-clip-text  from-[#020944] via-[#063386] to-[#411fbd] bg-transparent ring-offset-blue-600 ring-2 ring-offset-4 shadow-xl  shadow-blue-700 inline p-2'>Let's drop out your wish</p></div>
       <Wish/>
       {/* <Newwish/> */}
    </>
  )
} 

export default Main 