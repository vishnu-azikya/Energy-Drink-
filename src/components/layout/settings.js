import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import UserIcon from '../../../public/user.jpeg';
import Image from "next/image";


const Settings = ({toggleUserDropdown,isOpenUser}) => {
  return (
    <div className="relative">
                <div className="flex gap-2 items-center userDetails cursor-pointer"
                    data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleUserDropdown} >
                    <Image src={UserIcon} alt="Site Logo" className="w-[50px] h-[50px] object-cover rounded-lg" />
                    <div className="userName">
                        <h6 className="m-0 text-md font-medium text-[#212529]">Anamika Sharma
                        </h6>
                    </div>
                </div>
                <ul
                    className={`dropdown-menu w-full shadow-lg shadow-black/48 rounded-xl border-none absolute min-w-[180px] right-[0%] top-[130%] z-50 bg-white overflow-hidden p-0 ${isOpenUser ? "show block" : "hidden"
                        }`}>
                    <li>
                        <a className="px-4 text-gray-700 hover:text-white focus:text-white bg-transparent hover:bg-gradient-to-r focus:bg-gradient-to-r from-[#9181F4] to-[#5038ED] text-xl flex items-center gap-2.5 py-2"
                            href="#">
                            <Icon icon="uil:setting" />
                            <span className="text-[15px]">Setting</span>
                        </a>
                    </li>
                    <li>
                        <a className="px-4 text-gray-700 hover:text-white focus:text-white bg-transparent hover:bg-gradient-to-r focus:bg-gradient-to-r from-[#9181F4] to-[#5038ED] text-xl flex items-center gap-2.5 py-2"
                            href="#">
                            <Icon icon="iconamoon:profile" />
                            <span className="text-[15px]">View Profile</span>
                        </a>
                    </li>
                    <li>
                        <a className="px-4 text-gray-700 hover:text-white focus:text-white bg-transparent hover:bg-gradient-to-r focus:bg-gradient-to-r from-[#9181F4] to-[#5038ED] text-xl flex items-center gap-2.5 py-2"
                            href="#">
                            <Icon icon="hugeicons:logout-04" />
                            <span className="text-[15px]">Log Out</span>
                        </a>
                    </li>
                </ul>
            </div>
  )
}

export default Settings
