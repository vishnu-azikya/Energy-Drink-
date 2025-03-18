import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import homeOutline from '@iconify-icons/mdi/home-outline';
import siteLogo from '../../../public/logo.png';
import Image from "next/image";
import Settings from './settings'

const header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMenu, setIsOpenmenu] = useState(false);
    const [isOpenUser, setIsOpenUser] = useState(false);
  
    const toggleMenu = () => {
      setIsOpenmenu(!isOpenMenu);
    };
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
      setIsOpenUser(false); // Close isOpenUser when isOpen is toggled
    };
  
    const toggleUserDropdown = () => {
      setIsOpenUser(!isOpenUser);
      setIsOpen(false); // Close isOpen when isOpenUser is toggled
    };
  return (
//     <header
//     className="bg-white min-h-[72px] border-b-[1px] border-[#cdcdcd] bg-custom-gradient flex items-center lg:px-6 md:px-6 sm:px-2 px-2">
//     <div className="flex items-center justify-between w-full">
//         <div className="siteIdentity flex items-center gap-3">
//             <a href="#" className="text-center">
//                 <Image src={siteLogo} alt="Site Logo" className="h-[55px]" />
//             </a>
//             <div className="showSidebar text-[25px] bg-[linear-gradient(45deg, #9181F4, #5038ED)]">
//                 <Icon icon="solar:hamburger-menu-broken" />
//             </div>
//         </div>
//         <div className="gap-2 lg:flex md:flex sm:flex hidden items-center relative">
//             <Icon icon="si:search-line" className="absolute left-0 text-xl" />
//             <input type="search"
//                 className="h-11 rounded-md border-none shadow-none outline-none font-[500] text-sm fw-medium ps-7 relative cursor-pointer bg-transparent placeholder:text-[#a1a1a1]"
//                 placeholder="Search anything here" />
//         </div>
//         <div className="userInfo flex">
//             <div
//                 className="Notification flex items-center border-e-[1px] border-[#cdcdcd] pe-4 me-4 py-2">
//                 <div className="dropdown relative">
//                     <div className="flex gap-2 items-center userDetails cursor-pointer" onClick={toggleDropdown} data-bs-toggle="dropdown" aria-expanded="false">
//                         <Icon className="text-2xl"
//                             icon="solar:bell-line-duotone" />
//                     </div>
//                     <ul
//                         className={`dropdown-menu w-full shadow-lg shadow-black/48 rounded-xl border-none absolute min-w-[350px]  right-[0%] top-[210%] z-50 bg-white overflow-hidden p-0 ${isOpen ? "show block" : "hidden"
//                             }`}>
//                         <li className="p-2">
//                             <div className="NotificationPanel">
//                                 <div
//                                     className="notificationIcon border-b-1 border-[#cdcdcd] pb-2 mb-2">
//                                     <h4 className="font-[600] mb-1"
//                                         style={{ fontSize: '14px !important' }}>Lorem Ipsum is
//                                         simply dummy text of the printing
//                                         and typesetting</h4>
//                                     <p className="m-0 text-[#2a2a2a]" style={{ fontSize: '12px !important' }}>
//                                         Lorem Ipsum is simply dummy text of the printing
//                                         and
//                                         typesetting industry.</p>
//                                 </div>
//                                 <div className="notificationIcon">
//                                     <h4 className="font-[600] mb-1"
//                                         style={{ fontSize: '14px !important' }}>Lorem Ipsum is
//                                         simply dummy text of the printing
//                                         and typesetting</h4>
//                                     <p className="m-0 text-[#2a2a2a]" style={{ fontSize: '12px !important' }}>
//                                         Lorem Ipsum is simply dummy text of the printing
//                                         and
//                                         typesetting industry.</p>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <Settings toggleUserDropdown={toggleUserDropdown} isOpenUser={isOpenUser}/>
//         </div>
//     </div>
// </header>


<header className="absolute top-0 z-20 w-full">
<div className="max-w-screen-2xl  mx-auto px-3">
     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full mt-6 pt-2 g-3">
          <div className="w-full">
               <div className="logo flex w-full lg:justify-start justify-between items-center lg:gap-9 md:gap-5 gap-3">
                    <Image src={siteLogo} alt="Site Logo" className="h-[60px]" />
                    <div className="w-[40px] lg:hidden h-[40px] bg-[#ffffff66] rounded-full flex items-center justify-center mobiletoggle" onClick={toggleMenu}>
                         <svg viewBox="0 -0.5 25 25" className="w-[30px] h-[30px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                   <path
                                        d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z"
                                        fill="#fff"></path>
                              </g>
                         </svg>
                    </div>
               </div>
          </div>
          <div className={`w-full ms-auto lg:flex items-center justify-end relative z-30 mobilemenu ${isOpenMenu ? "" : "hidden"}`}>
               <div className="border-2 border-[#BFD785] lg:bg-[#4d56474d] bg-[#6D96CE] lg:p-5 md:p-4 p-3 w-full lg:max-w-[600px] rounded-2xl">
                    <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-3 lg:items-center md:items-center sm:items-center items-start justify-between">
                         <ul className="flex  lg:flex-row md:flex-row sm:flex-row flex-col lg:items-center md:items-center sm:items-center items-start gap-[15px]">
                              <li>
                                   <a className="text-[15px] font-normal text-[#fff]" href="/">Home</a>
                              </li>
                              <li>
                                   <a className="text-[15px] font-normal text-[#fff]" href="/products">Products</a>
                              </li>
                              <li>
                                   <a className="text-[15px] font-normal text-[#fff]" href="#">Explore</a>
                              </li>
                              <li>
                                   <a className="text-[15px] font-normal text-[#fff]" href="#">Community</a>
                              </li>
                         </ul>
                         <div className="flex items-center justify-normal gap-3">
                              <div>
                                   <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                             <circle cx="12" cy="6" r="4" stroke="#fff" stroke-width="1.5"></circle>
                                             <path
                                                  d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                                                  stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path>
                                        </g>
                                   </svg>
                              </div>
                              <div className="w-[20px] h-[20px]">
                                   <svg viewBox="0 0 24 24" className="w-[20px] h-[20px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                             <path
                                                  d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                                                  stroke="#fff" stroke-width="1.5"></path>
                                             <path
                                                  d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                                                  stroke="#fff" stroke-width="1.5"></path>
                                             <path
                                                  d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                                                  stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path>
                                        </g>
                                   </svg>
                              </div>
                              <div
                                   className="w-[20px] h-[20px] bg-[#fff] text-[#000] rounded-full text-[15px] font-normal flex items-center justify-center">
                                   0
                              </div>
                         </div>
                    </div>
                    <div className="flex justify-between lg:flex-row md:flex-row sm:flex-row flex-col-reverse lg:items-center md:items-center sm:items-center items-start mt-7 ">
                         <div className="flex items-center gap-[12px]">
                              <div className="flex items-center gap-1">
                                   <div className="w-full border border-white rounded-full flex items-center pr-3">
                                        <input placeholder="Search" className="text-[15px] px-3 py-2 text-white p-0 placeholder:text-white bg-transparent border-0 outline-none placeholder:text-[15px]" />
                                        <button className="w-[18px] h-[8px] flex items-center">
                                             <svg className="w-[18px] h-[18px]" style={{ flex: '0 0 auto' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                  <g id="SVGRepo_iconCarrier">
                                                       <path
                                                            d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                                            stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                  </g>
                                             </svg>
                                        </button>
                                   </div>
                              </div>
                         </div>
                         <div className="flex gap-[10px] lg:mb-0 md:mb-0 sm:mb-0 mb-3">
                              <div className="dropdown relative">
                                   <div className="flex gap-2 items-center userDetails cursor-pointer" onClick={toggleDropdown} data-bs-toggle="dropdown" aria-expanded="false">
                                        <h5 className="text-[15px] m-0 flex items-center gap-2 text-[#fff]">EN
                                             <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                  <g id="SVGRepo_iconCarrier">
                                                       <path d="M7 10L12 15L17 10" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                  </g>
                                             </svg>
                                        </h5>
                                   </div>
                                   <ul
                                        className={`dropdown-menu w-full shadow-lg shadow-black/48 rounded-xl border-none absolute min-w-[120px] lg:left-auto md:left-auto left-0 right-[0%] top-[150%] md:top-[150%] lg:top-[150%] z-50 bg-white overflow-hidden p-0 ${isOpen ? "show block" : "hidden"
                                             }`}>
                                        <li className="p-2">
                                             <div className="NotificationPanel">
                                                  <div
                                                       className="notificationIcon border-b border-[#cdcdcd] pb-2 mb-2">
                                                       <h5 className="text-[15px] m-0 flex items-center gap-2 text-[#000]">
                                                            <Icon className="text-2xl"
                                                                 icon="twemoji:flag-germany" /> Germany</h5>
                                                  </div>
                                                  <div className="notificationIcon">
                                                       <h5 className="text-[15px] m-0 flex items-center gap-2 text-[#000]">
                                                            <Icon className="text-2xl"
                                                                 icon="twemoji:flag-spain" /> Spanish</h5>
                                                  </div>
                                             </div>
                                        </li>
                                   </ul>
                              </div>


                              <div className="dropdown relative">
                                   <div className="flex gap-2 items-center userDetails cursor-pointer" onClick={toggleUserDropdown} data-bs-toggle="dropdown" aria-expanded="false">
                                        <h5 className="text-[15px] m-0 flex items-center gap-2 text-[#fff]">USD
                                             <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                  <g id="SVGRepo_iconCarrier">
                                                       <path d="M7 10L12 15L17 10" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                  </g>
                                             </svg>
                                        </h5>
                                   </div>
                                   <ul
                                        className={`dropdown-menu w-full shadow-lg shadow-black/48 rounded-xl border-none absolute min-w-[120px] lg:left-auto md:left-auto left-0 right-[0%] top-[150%] md:top-[150%] lg:top-[150%] z-50 bg-white overflow-hidden p-0 ${isOpenUser ? "show block" : "hidden"
                                             }`}>
                                        <li className="p-2">
                                             <div className="NotificationPanel">
                                                  <div
                                                       className="notificationIcon border-b border-[#cdcdcd] pb-2 mb-2">
                                                       <h5 className="text-[15px] m-0 flex items-center gap-2 text-[#000]">
                                                            <Icon className="text-2xl"
                                                                 icon="mdi:rupee" /> INR</h5>
                                                  </div>
                                                  <div className="notificationIcon">
                                                       <h5 className="text-[15px] m-0 flex items-center gap-2 text-[#000]">
                                                            <Icon className="text-2xl"
                                                                 icon="uil:pound" /> Pound</h5>
                                                  </div>
                                             </div>
                                        </li>
                                   </ul>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     </div>
</div>
</header>
  )
}

export default header
