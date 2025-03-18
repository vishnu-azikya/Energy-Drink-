import Image from "next/image";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Icon } from "@iconify/react";
import homeOutline from "@iconify-icons/mdi/home-outline";
import siteLogo from "../../public/whitelogo.png";
import FooterLogo from "../../public/logo.png";
import signup from "../../public/signup.png";
import bannerVector from "../../public/bannerVector.png";
import bannerImg from "../../public/mate-libre-watermelon-sugarfree.png";
import Header from "@/components/layout/header";
import Footer from "../components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Register() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isOpenMenu, setIsOpenmenu] = useState(false);
  // const [isOpenUser, setIsOpenUser] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpenmenu(!isOpenMenu);
  // };

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  //   setIsOpenUser(false); // Close isOpenUser when isOpen is toggled
  // };

  // const toggleUserDropdown = () => {
  //   setIsOpenUser(!isOpenUser);
  //   setIsOpen(false); // Close isOpen when isOpenUser is toggled
  // };

  return (
    <>
      <Header />
      {/* <header className="absolute top-0 z-20 w-full">
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
              <div className="border border-[#BFD785] lg:bg-[#4d56474d] bg-[#6D96CE] lg:p-5 md:p-4 p-3 w-full lg:max-w-[600px] rounded-2xl">
                <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-3 lg:items-center md:items-center sm:items-center items-start justify-between">
                  <ul className="flex  lg:flex-row md:flex-row sm:flex-row flex-col lg:items-center md:items-center sm:items-center items-start gap-[15px]">
                    <li>
                      <a className="text-[15px] font-normal text-[#fff]" href="#">Home</a>
                    </li>
                    <li>
                      <a className="text-[15px] font-normal text-[#fff]" href="#">Products</a>
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
      </header> */}

      <section
        className="lg:pt-60 relative md:pt-32 sm:pt-32 pt-32 overflow-hidden lg:pb-40 md:pb-28 sm:pb-32 pb-32 bg-gradient-to-br from-[#BFD785] to-[#4D5647]"
        style={{ borderRadius: "0 0 40px 40px" }}
      >
        <div className="max-w-screen-2xl mx-auto h-full px-3 relative z-10">
          <div className="flex lg:flex-col flex-col lg:gap-9 md:gap-5 gap-3 w-full h-full justify-center items-center">
            <h1 className="lg:text-7xl md:text-5xl text-3xl text-[#fff] font-bold w-full m-0 text-center leading-none">
              Register
            </h1>
            <ul className="flex items-center justify-center w-full gap-2">
              <li>
                <a
                  href="/"
                  className="text-white text-lg font-normal cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li className="text-white text-lg font-normal cursor-pointer">
                |
              </li>
              <li className="text-white text-lg font-normal">Register</li>
            </ul>
          </div>
        </div>
        <div className="absolute left-0 right-0 mx-auto lg:flex md:flex sm:hidden hidden items-center justify-end lg:-bottom-60 md:-bottom-24">
          <Image
            src={bannerImg}
            alt="Site Logo"
            className="w-full lg:max-w-[552px] md:max-w-[300px]"
          />
        </div>
        <div className="absolute left-0 right-0 mx-auto flex items-center justify-center -bottom-3">
          <Image src={bannerVector} alt="Site Logo" className="w-full" />
        </div>
      </section>

      <section className="overflow-hidden relative bg-cover bg-bottom lg:pt-20 md:pt-20 pt-12 lg:pb-20 md:pb-20 pb-12">
        <div className="max-w-screen-2xl mx-auto h-full px-3">
          <div className="flex lg:flex-row flex-col lg:gap-20 md:gap-16 gap-10 w-full h-full justify-start">
            <div className="w-full lg:basis-1/2 basis-full flex items-start justify-center flex-col">
              <h1 className="lg:text-5xl md:text-4xl text-3xl text-dark font-medium leading-tight">
                Register
              </h1>
              <p className="m-0 lg:text-[17px] md:text-[17px] text-[13px] mt-4 mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <div className="lg:pt-10 md:pt-10 pt-0 w-full space-y-5 lg:max-w-[450px]">
                <div className="lg:px-5 w-full space-y-5 ">
                  <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center gap-5">
                    <div className="w-full border border-[#000] rounded-full p-2 flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="border-0 outline-none shadow-none w-full bg-transparent text-[#000] placeholder:text-[#000] text-[16px] font-normal lg:h-[45px] md:h-[40px] h-[40px] ps-5"
                      />
                    </div>
                    <div className="w-full border border-[#000] rounded-full p-2 flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="border-0 outline-none shadow-none w-full bg-transparent text-[#000] placeholder:text-[#000] text-[16px] font-normal lg:h-[45px] md:h-[40px] h-[40px] ps-5"
                      />
                    </div>
                  </div>
                  <div className="w-full border border-[#000] rounded-full p-2 flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="your emil id"
                      className="border-0 outline-none shadow-none w-full bg-transparent text-[#000] placeholder:text-[#000] text-[16px] font-normal lg:h-[45px] md:h-[40px] h-[40px] ps-5"
                    />
                  </div>
                  <div className="w-full border border-[#000] rounded-full p-2 flex items-center gap-3">
                    <input
                      type="password"
                      placeholder="your Password"
                      className="border-0 outline-none shadow-none w-full bg-transparent text-[#000] placeholder:text-[#000] text-[16px] font-normal lg:h-[45px] md:h-[40px] h-[40px] ps-5"
                    />
                  </div>
                  <div className="lg:pt-5 w-full">
                    <button className="border-0 w-full flex items-center gap-[10px] font-normal px-10 py-4 text-[16px] text-white bg-[#2A2D6D] hover:bg-[#2A2D6D] transition duration-700 ease-in-out rounded-[8px] justify-center  hover:-translate-y-2">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-5">
                  <div className="h-[1px] w-full bg-[#2A2D6D]"></div>
                  <p className="m-0 text-[15px] font-medium w-full text-center text-nowrap">
                    already have an account?
                  </p>
                  <div className="h-[1px] w-full bg-[#2A2D6D]"></div>
                </div>

                <div className="lg:px-5">
                  <button className="border-0 w-full flex items-center text-center justify-center gap-[10px] text-[15px] px-10 py-4 text-[#000] hover:text-[#fff] bg-[#e5e5e5] hover:bg-[#2A2D6D] transition duration-700 font-bold ease-in-out rounded-[8px] lg:mt-6 md:mt-4 mt-4  hover:-translate-y-2">
                    Log In
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:basis-1/2 basis-full flex items-center justify-center flex-col">
              <div className="w-full h-full  flex items-center justify-center bg-[#4d564733] rounded-3xl">
                <Image
                  src={signup}
                  alt="Site Logo"
                  className="w-full max-w-[100%] m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {/* <footer className="pt-16 pb-28 relative bg-white border-t border-[#BABABA]">
        <div className="max-w-screen-2xl  mx-auto px-3">
          <div className="flex lg:flex-row flex-col gap-5 w-full h-full">
            <div className="w-full lg:basis-1/3 basis-full flex items-start justify-start flex-col">
              <Image src={FooterLogo} alt="Site Logo" className="h-[60px]" />
            </div>

            <div className="w-full lg:basis-2/3 basis-full flex items-start justify-start flex-col">
              <div className="flex flex-row lg:flex-nowrap md:flex-wrap flex-wrap lg:gap-5 w-full h-full">
                <div
                  className="w-full lg:basis-1/3 md:basis-1/3 sm:basis-1/2 basis-full flex items-start justify-start flex-col">
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">Explore</a>
                    </li>
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">Community</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="w-full lg:basis-1/3 md:basis-1/3 sm:basis-1/2 basis-full flex items-start justify-start flex-col">
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">Retailers</a>
                    </li>
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">Wholesale</a>
                    </li>
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">FAQ</a>
                    </li>
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">Contact</a>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-4 mt-10">
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-normal">
                        Privacy Policy

                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-normal">Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-normal">Cookie preferences</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="w-full lg:basis-1/3 md:basis-1/3 sm:basis-1/2 basis-full flex items-start justify-start flex-col">
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">CAD $</a>
                    </li>
                    <li>
                      <a href="#" className="text-[#000] text-[17px] font-semibold">Français</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </footer>

      <section className="border-t py-5 border-[#BABABA]">
        <div className="max-w-screen-2xl  mx-auto px-3">
          <div className="flex items-center gap-3 justify-between">
            <p className="text-4 font-normal text-[#000] m-0">
              2025 Mate Libre Inc.
            </p>

            <ul className="flex itmes-center gap-1">
              <li>
                <a href="#">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25 15.0626C24.9766 13.1569 24.4091 11.2977 23.3643 9.70376C22.3196 8.10984 20.8412 6.84762 19.1032 6.06579C17.3651 5.28395 15.4398 5.01505 13.5541 5.29074C11.6684 5.56644 9.90068 6.37524 8.45922 7.62192C7.01775 8.8686 5.96253 10.5012 5.41785 12.3275C4.87317 14.1538 4.8617 16.0977 5.3848 17.9303C5.9079 19.7629 6.94377 21.4078 8.37043 22.6714C9.79708 23.9351 11.5551 24.7647 13.4375 25.0626V17.9751H10.9375V15.0626H13.4375V12.8501C13.3796 12.3356 13.4353 11.8148 13.6008 11.3242C13.7663 10.8337 14.0375 10.3854 14.3951 10.0111C14.7527 9.63677 15.1881 9.34551 15.6706 9.15787C16.1531 8.97022 16.671 8.89076 17.1875 8.92511C17.9372 8.93537 18.6852 9.00224 19.425 9.12511V11.6251H18.175C17.9595 11.5979 17.7405 11.6195 17.5345 11.6883C17.3283 11.7571 17.1403 11.8713 16.9843 12.0225C16.8283 12.1737 16.7083 12.358 16.6332 12.5618C16.558 12.7657 16.5296 12.9838 16.55 13.2001V15.0876H19.325L18.875 18.0001H16.5625V25.0001C18.9248 24.6264 21.0751 23.4184 22.6231 21.5952C24.1711 19.7719 25.0143 17.4543 25 15.0626Z"
                      fill="black" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M15 20.4545C18.0124 20.4545 20.4545 18.0124 20.4545 15C20.4545 11.9875 18.0124 9.54541 15 9.54541C11.9875 9.54541 9.54541 11.9875 9.54541 15C9.54541 18.0124 11.9875 20.4545 15 20.4545ZM15 18.6363C17.0082 18.6363 18.6363 17.0082 18.6363 15C18.6363 12.9916 17.0082 11.3636 15 11.3636C12.9916 11.3636 11.3636 12.9916 11.3636 15C11.3636 17.0082 12.9916 18.6363 15 18.6363Z"
                      fill="#0F0F0F" />
                    <path
                      d="M20.4545 8.63623C19.9524 8.63623 19.5454 9.04325 19.5454 9.54532C19.5454 10.0474 19.9524 10.4544 20.4545 10.4544C20.9566 10.4544 21.3636 10.0474 21.3636 9.54532C21.3636 9.04325 20.9566 8.63623 20.4545 8.63623Z"
                      fill="#0F0F0F" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M5.59451 7.97824C5 9.14503 5 10.6724 5 13.7273V16.2727C5 19.3275 5 20.855 5.59451 22.0217C6.11745 23.0481 6.95189 23.8825 7.97824 24.4055C9.14503 25 10.6724 25 13.7273 25H16.2727C19.3275 25 20.855 25 22.0217 24.4055C23.0481 23.8825 23.8825 23.0481 24.4055 22.0217C25 20.855 25 19.3275 25 16.2727V13.7273C25 10.6724 25 9.14503 24.4055 7.97824C23.8825 6.95189 23.0481 6.11745 22.0217 5.59451C20.855 5 19.3275 5 16.2727 5H13.7273C10.6724 5 9.14503 5 7.97824 5.59451C6.95189 6.11745 6.11745 6.95189 5.59451 7.97824ZM16.2727 6.81818H13.7273C12.1699 6.81818 11.1111 6.8196 10.2928 6.88645C9.49567 6.95158 9.08804 7.06963 8.80367 7.21452C8.11945 7.56315 7.56315 8.11945 7.21452 8.80367C7.06963 9.08804 6.95158 9.49567 6.88645 10.2928C6.8196 11.1111 6.81818 12.1699 6.81818 13.7273V16.2727C6.81818 17.8302 6.8196 18.8888 6.88645 19.7072C6.95158 20.5044 7.06963 20.912 7.21452 21.1964C7.56315 21.8805 8.11945 22.4368 8.80367 22.7855C9.08804 22.9304 9.49567 23.0485 10.2928 23.1135C11.1111 23.1804 12.1699 23.1818 13.7273 23.1818H16.2727C17.8302 23.1818 18.8888 23.1804 19.7072 23.1135C20.5044 23.0485 20.912 22.9304 21.1964 22.7855C21.8805 22.4368 22.4368 21.8805 22.7855 21.1964C22.9304 20.912 23.0485 20.5044 23.1135 19.7072C23.1804 18.8888 23.1818 17.8302 23.1818 16.2727V13.7273C23.1818 12.1699 23.1804 11.1111 23.1135 10.2928C23.0485 9.49567 22.9304 9.08804 22.7855 8.80367C22.4368 8.11945 21.8805 7.56315 21.1964 7.21452C20.912 7.06963 20.5044 6.95158 19.7072 6.88645C18.8888 6.8196 17.8302 6.81818 16.2727 6.81818Z"
                      fill="#0F0F0F" />
                  </svg>

                </a>
              </li>
              <li>
                <a href="#">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.6902 8.1344C19.0171 7.29394 18.6125 6.19805 18.6125 5H17.7691M19.6902 8.1344C20.3036 8.90063 21.1342 9.45788 22.0799 9.67608C22.3738 9.74574 22.6805 9.78293 23 9.78293V13.2191C21.3643 13.2191 19.8477 12.648 18.6123 11.6821V18.6707C18.6123 22.1627 16.0053 25 12.8062 25C11.1321 25 9.6198 24.2198 8.5591 22.98C7.59212 21.847 7 20.3331 7 18.6707C7 15.2298 9.53036 12.4251 12.6656 12.3508M19.6902 8.1344C19.6739 8.12276 19.6575 8.11101 19.6413 8.09914M10.6593 20.3517C10.3441 19.8781 10.1566 19.2977 10.1566 18.6661C10.1566 17.0734 11.3451 15.7778 12.8063 15.7778C13.0789 15.7778 13.343 15.8288 13.5901 15.9124V12.4019C13.3345 12.3647 13.0746 12.3415 12.8063 12.3415C12.7594 12.3415 12.3819 12.3688 12.3351 12.3688M17.7646 5H15.4558L15.4516 18.7775C15.4004 20.3192 14.2332 21.5591 12.8062 21.5591C11.9201 21.5591 11.1406 21.0808 10.655 20.3564"
                      stroke="black" stroke-linejoin="round" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
    </>
  );
}
