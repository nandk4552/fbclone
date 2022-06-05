import React from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon } from '@heroicons/react/solid';
import { VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts= [
    {
        src: "https://links.papareact.com/zof",
        name: "Kishore",
    },
    {
        src: "https://links.papareact.com/4zn",
        name: "Elon Musk",
    },
    {
        src: "https://links.papareact.com/k2j",
        name: "Jeff Bezoz",
    },
    {
        src: "https://links.papareact.com/xql",
        name: "Mark Zuckerberg",
    },
    {
        src: "https://links.papareact.com/4u4",
        name: "Bill Gates",
    },

];
const Widget = () => {
    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className="text-xl">Contacts</h2>
                <div className="space-x-2 flex">
                    <VideoCameraIcon className='h-6' />
                    <SearchIcon className='h-6' />
                    <DotsHorizontalIcon className='h-6' />
                </div>
            </div>

            {contacts.map(contact => (
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
        </div>
    )
}

export default Widget