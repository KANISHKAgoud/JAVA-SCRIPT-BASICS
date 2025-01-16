import React from 'react'
import Cardphoto from '/src/photos/card_photo.jpeg'

const Cards = (props) => {
    return (
        <div>
            <div className='border-4 border-black w-56 m-5'>
                <img src={Cardphoto} alt="photo" />
                <div className='text-center'>
                <div>{props.id}</div>
                <div>{props.username}</div>
                <div>{props.title}</div>
                </div>
            </div>
        </div>
    )
}

export default Cards
