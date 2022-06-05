/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Home from "../pages";
import HeaderIcon from "./HeaderIcon";
import { useSession, signOut } from 'next-auth/react'


const Header = () => {
  const { data: session, status } = useSession()

  return (
    <div className="items-center p-2 lg:px-5 sticky z-10 bg-white flex shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          layout="fixed"
          width={40}
          height={40}
          src="https://links.papareact.com/5me"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex flex-shrink ml-2 bg-transparent  items-center outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active="true" Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
        <div className="flex items-center sm:space-x-2 justify-end">
            {/* profile pic*/}
            <Image
              onClick={signOut}
              className="rounded-full cursor-pointer"
              src={session.user.image}
              width="40"
              height="40"
              layout="fixed"
            />  

            <p className="font-semibold text-gray-700 pr-3 whitespace-nowrap">{session.user.name}</p>
            <ViewGridIcon className="icon"/>
            <ChatIcon className="icon"/>
            <BellIcon className="icon"/>
            <ChevronDownIcon className="icon"/>
        </div>



    </div>
  );
};

export default Header;
