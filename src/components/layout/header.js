import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import homeOutline from '@iconify-icons/mdi/home-outline';
import siteLogo from '../../../public/logo.png';
import Image from "next/image";
import Settings from './settings'

const header = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [isOpenUser, setIsOpenUser] = useState(false);
    
        const toggleDropdown = () => {
            setIsOpen(!isOpen);
            setIsOpenUser(false); // Close isOpenUser when isOpen is toggled
        };
    
        const toggleUserDropdown = () => {
            setIsOpenUser(!isOpenUser);
            setIsOpen(false); // Close isOpen when isOpenUser is toggled
        };
  return (
    <header
    className="bg-white min-h-[72px] border-b-[1px] border-[#cdcdcd] bg-custom-gradient flex items-center lg:px-6 md:px-6 sm:px-2 px-2">
    <div className="flex items-center justify-between w-full">
        <div className="siteIdentity flex items-center gap-3">
            <a href="#" className="text-center">
                <Image src={siteLogo} alt="Site Logo" className="h-[55px]" />
            </a>
            <div className="showSidebar text-[25px] bg-[linear-gradient(45deg, #9181F4, #5038ED)]">
                <Icon icon="solar:hamburger-menu-broken" />
            </div>
        </div>
        <div className="gap-2 lg:flex md:flex sm:flex hidden items-center relative">
            <Icon icon="si:search-line" className="absolute left-0 text-xl" />
            <input type="search"
                className="h-11 rounded-md border-none shadow-none outline-none font-[500] text-sm fw-medium ps-7 relative cursor-pointer bg-transparent placeholder:text-[#a1a1a1]"
                placeholder="Search anything here" />
        </div>
        <div className="userInfo flex">
            <div
                className="Notification flex items-center border-e-[1px] border-[#cdcdcd] pe-4 me-4 py-2">
                <div className="dropdown relative">
                    <div className="flex gap-2 items-center userDetails cursor-pointer" onClick={toggleDropdown} data-bs-toggle="dropdown" aria-expanded="false">
                        <Icon className="text-2xl"
                            icon="solar:bell-line-duotone" />
                    </div>
                    <ul
                        className={`dropdown-menu w-full shadow-lg shadow-black/48 rounded-xl border-none absolute min-w-[350px]  right-[0%] top-[210%] z-50 bg-white overflow-hidden p-0 ${isOpen ? "show block" : "hidden"
                            }`}>
                        <li className="p-2">
                            <div className="NotificationPanel">
                                <div
                                    className="notificationIcon border-b-1 border-[#cdcdcd] pb-2 mb-2">
                                    <h4 className="font-[600] mb-1"
                                        style={{ fontSize: '14px !important' }}>Lorem Ipsum is
                                        simply dummy text of the printing
                                        and typesetting</h4>
                                    <p className="m-0 text-[#2a2a2a]" style={{ fontSize: '12px !important' }}>
                                        Lorem Ipsum is simply dummy text of the printing
                                        and
                                        typesetting industry.</p>
                                </div>
                                <div className="notificationIcon">
                                    <h4 className="font-[600] mb-1"
                                        style={{ fontSize: '14px !important' }}>Lorem Ipsum is
                                        simply dummy text of the printing
                                        and typesetting</h4>
                                    <p className="m-0 text-[#2a2a2a]" style={{ fontSize: '12px !important' }}>
                                        Lorem Ipsum is simply dummy text of the printing
                                        and
                                        typesetting industry.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Settings toggleUserDropdown={toggleUserDropdown} isOpenUser={isOpenUser}/>
        </div>
    </div>
</header>
  )
}

export default header
