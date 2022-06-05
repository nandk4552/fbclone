/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'

const Contact = ({src, name}) => {
    return (
        <div className='flex items-center space-x-3 mb-3 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
            <Image
                className='rounded-full'
                objectFit='cover'
                src={src}
                width={50}
                height={50}
                layout="fixed"
            />
            <p className='font-medium text-gray-700 '>{name}</p>
            <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-pulse '/>
        </div>
    )
}

export default Contact