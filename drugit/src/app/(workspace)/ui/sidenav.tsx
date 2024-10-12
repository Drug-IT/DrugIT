'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from '@/app/(workspace)/ui/nav-links';
import { ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAvatarClick = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    } else {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className={`flex h-full flex-col px-3 py-4 md:px-2 bg-gradient-to-b from-[#36245B] via-black to-black transition-all duration-300 ${isCollapsed ? 'w-24' : 'w-64'}`}>
      <div className={`flex items-center mb-6 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        <Link
          className={`flex h-12 items-center rounded-md p-2 ${isCollapsed ? 'justify-center' : 'justify-start'}`}
          href="/workspace"
        >
          <Image 
            src={isCollapsed ? "/logo drugit white.svg"  : "/nav-light-pruple.svg" }
            alt="DrugIT Logo" 
            width={isCollapsed ? 32 : 120} 
            height={32} 
            className="object-contain"
          />
        </Link>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white p-2 rounded-full hover:bg-[#9256F5] hover:bg-opacity-45"
        >
          {isCollapsed ? <ChevronRightIcon className="w-5 h-5" /> : <ChevronLeftIcon className="w-5 h-5" />}
        </button>
      </div>
      <div className="flex grow flex-col justify-between">
        <NavLinks isCollapsed={isCollapsed} />
        <div className="mt-auto">
          <Separator className="my-4 bg-gray-600" />
          <div 
            className={`flex items-center p-2 text-gray-400 hover:bg-[#9256F5] hover:bg-opacity-45 rounded-md cursor-pointer ${isCollapsed ? 'justify-center' : 'justify-between'}`}
            onClick={handleAvatarClick}
          >
            <div className={`flex items-center ${isCollapsed ? 'flex-col' : ''}`}>
              <Avatar className={isCollapsed ? 'mb-2' : 'mr-2'}>
                <AvatarImage src="/img_avatar.png" alt="User Avatar" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              {!isCollapsed && <span>User Name</span>}
            </div>
            {!isCollapsed && <ChevronUpIcon className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />}
          </div>
          {!isCollapsed && isDropdownOpen && (
            <div className="mt-2">
              <Link href="/account" className="block p-2 text-gray-400 hover:bg-[#9256F5] hover:bg-opacity-45 rounded-md">
                My Account
              </Link>
              <Link href="/billing" className="block p-2 text-gray-400 hover:bg-[#9256F5] hover:bg-opacity-45 rounded-md">
                Billing
              </Link>
              <Link href="/settings" className="block p-2 text-gray-400 hover:bg-[#9256F5] hover:bg-opacity-45 rounded-md">
                Settings
              </Link>
              <Link href="/team" className="block p-2 text-gray-400 hover:bg-[#9256F5] hover:bg-opacity-45 rounded-md">
                Team
              </Link>
              <button className="w-full text-left p-2 text-red-500 hover:bg-[#9256F5] hover:bg-opacity-45 rounded-md">
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}