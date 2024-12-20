import React, { FC } from 'react'

const Button: FC <{text: string}>= ({text}) => {
  
  return (
<button className='bg-[#00616C] text-white px-8 py-3 rounded-full hover:hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300
text-lg font-medium hover:scale-105 duration-300 '>{text}</button>
  )
}

export default Button
 