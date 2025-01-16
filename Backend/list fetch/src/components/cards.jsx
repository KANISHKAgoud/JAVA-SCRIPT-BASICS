import React from 'react'
import Cardphoto from '/src/photos/card_photo.jpeg'

const Cards = () => {
    return (
        <div>
            <div className='border-4 border-black w-56'>
                <img src={Cardphoto} alt="photo" />
                <div className='text-center'>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                </div>
            </div>
        </div>
    )
}

export default Cards
