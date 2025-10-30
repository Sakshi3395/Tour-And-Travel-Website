
import React from 'react'

const TopBanner = (props) => {
    return (
        <div
            className='h-[300px] relative -mt-12 rounded-b-2xl shadow-lg overflow-hidden'
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className='inset-0 bg-black absolute opacity-30'></div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-white text-4xl font-bold font-serif drop-shadow-lg'>{props.text}</h1>
            </div>
        </div>
    )
}

export default TopBanner
