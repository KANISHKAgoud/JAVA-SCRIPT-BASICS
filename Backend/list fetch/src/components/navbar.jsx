import React from 'react'

const navbar = () => {
  return (
    <div>
      <div className='bg-black h-14'>
        <ul className='text-white flex space-x-10 p-3 font-medium'>
            <li className='mx-3'>BRAND LOGO</li>
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>blog</li>
        </ul>
      </div>
    </div>
  )
}

export default navbar
