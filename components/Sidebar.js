import React from 'react'
import { useSession } from 'next-auth/react'
import {
    ChevronDoubleDownIcon,
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
    UsersIcon
} from "@heroicons/react/outline";
import {    
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,    
    UserIcon,
} from "@heroicons/react/solid";                
import SidebarRow from './SidebarRow';




const Sidebar = () => {
    const { data: session, loading } = useSession()
    return (
        <div className='p-2 mt-5 max-w-[600px xl:min-w-[300px]'>
            
            <SidebarRow src={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar