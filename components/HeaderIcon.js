import React from 'react'

const HeaderIcon = ({ Icon, active }) => {
    return (
        <div className='rounded-xl flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-400 group'>
            <Icon className={`text-gray-500 h-5 text-center sm:h-7 group-hover:text-blue-500 mx-auto ${active && 'text-blue-500'}`} />
        </div>
    )
}

export default HeaderIcon