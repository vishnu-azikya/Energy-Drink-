import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import siteLogo from '../../../public/logo.png';
import Image from "next/image";

const SideBar = () => {
  return (
    <aside className="fixed left-0 bg-[#fdfdfd] border-e-[1px] border-[#cdcdcd] sidebar w-full flex-auto h-[100vh]">
    <div
        className="relative sidebarLogo px-6 py-2 text-center border-b-[1px] justify-between w-full flex items-center min-h-[72px] max-h-[72px] border-[#cdcdcd]">
        <a href="#" className="text-center">
            <Image src={siteLogo} alt="Site Logo" className="h-[55px]" />
        </a>
        <div
            className="sidebarSlide desktopSlide absolute -right-[12px] top-[0] bottom-[0] m-auto flex items-center">
            <Icon
                className="bg-[#fff] w-[25px] h-[25px] flex items-center justify-center shadow-lg rounded-[40px] shadow-[#d3d3d3]"
                icon="iconoir:nav-arrow-left" />
        </div>
        <div className="sidebarSlide mobileClose">
            <Icon
                className="bg-[#fff] w-[25px] h-[25px] flex items-center justify-center shadow-lg rounded-[40px] shadow-[#d3d3d3]"
                icon="iconoir:nav-arrow-left" />
        </div>
    </div>
    <div className="sidemenu mt-6">
        <p className="mb-2 px-4 text-[13px] text-[#a2a2a2] font-[500]">MainMenu</p>
        <ul className="flex flex-col list-none p-0 m-0 gap-0">
            <li className="active [&>a]:text-[#292e72] [&>a]:bg-[#6397d34f] [&>a]:border-[#292e72]">
                <a href="dashboard"
                    className="flex items-center gap-2 w-full flex-auto py-[13px] px-[16px] decoration-auto bg-[#fff] border-e-2 border-[#fff] text-[22px] font-[500] text-[#000] hover:text-[#292e72] hover:bg-[#6397d34f] hover:border-[#292e72]">
                    <Icon icon="ic:round-dashboard" />
                    <span className="text-[14px]">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="order-managment"
                    className="flex items-center gap-2 w-full flex-auto py-[13px] px-[16px] decoration-auto bg-[#fff] border-e-2 border-[#fff] text-[22px] font-[500] text-[#000] hover:text-[#292e72] hover:bg-[#6397d34f] hover:border-[#292e72]">
                    <Icon icon="material-symbols-light:overview-rounded" />
                    <span className="text-[14px]">Order Management</span>
                </a>
            </li>
            <li>
                <a href="user-management"
                    className="flex items-center gap-2 w-full flex-auto py-[13px] px-[16px] decoration-auto bg-[#fff] border-e-2 border-[#fff] text-[22px] font-[500] text-[#000] hover:text-[#292e72] hover:bg-[#6397d34f] hover:border-[#292e72]">
                    <Icon icon="teenyicons:appointments-solid" />
                    <span className="text-[14px]">User Management</span>
                </a>
            </li>
        </ul>
        <p className="mt-6 mb-2 px-4 text-[13px] text-[#a2a2a2] font-[500]">OtherMenu</p>
        <ul className="flex flex-col list-none p-0 m-0 gap-0">
            <li className="">
                <a href="#"
                    className="flex items-center gap-2 w-full flex-auto py-[13px] px-[16px] decoration-auto bg-[#fff] border-e-2 border-[#fff] text-[22px] font-[500] text-[#000] hover:text-[#292e72] hover:bg-[#6397d34f] hover:border-[#292e72]">
                    <Icon icon="ic:round-dashboard" />
                    <span className="text-[14px]">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#"
                    className="flex items-center gap-2 w-full flex-auto py-[13px] px-[16px] decoration-auto bg-[#fff] border-e-2 border-[#fff] text-[22px] font-[500] text-[#000] hover:text-[#292e72] hover:bg-[#6397d34f] hover:border-[#292e72]">
                    <Icon icon="material-symbols-light:overview-rounded" />
                    <span className="text-[14px]">Overview</span>
                </a>
            </li>
            <li>
                <a href="#"
                    className="flex items-center gap-2 w-full flex-auto py-[13px] px-[16px] decoration-auto bg-[#fff] border-e-2 border-[#fff] text-[22px] font-[500] text-[#000] hover:text-[#292e72] hover:bg-[#6397d34f] hover:border-[#292e72]">
                    <Icon icon="teenyicons:appointments-solid" />
                    <span className="text-[14px]">Appointment</span>
                </a>
            </li>
            <li>
                <a href="#"
                    className="flex items-center gap-2 w-full flex-auto py-[13px] px-[16px] decoration-auto bg-[#fff] border-e-2 border-[#fff] text-[22px] font-[500] text-[#000] hover:text-[#292e72] hover:bg-[#6397d34f] hover:border-[#292e72]">
                    <Icon icon="material-symbols-light:overview-rounded" />
                    <span className="text-[14px]">Overview</span>
                </a>
            </li>
            <li>
                <a href="#"
                    className="flex items-center gap-2 w-full flex-auto py-[13px] px-[16px] decoration-auto bg-[#fff] border-e-2 border-[#fff] text-[22px] font-[500] text-[#000] hover:text-[#292e72] hover:bg-[#6397d34f] hover:border-[#292e72]">
                    <Icon icon="teenyicons:appointments-solid" />
                    <span className="text-[14px]">Appointment</span>
                </a>
            </li>
        </ul>
    </div>
</aside>
  )
}

export default SideBar
