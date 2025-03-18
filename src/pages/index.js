import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Icon } from "@iconify/react";
import homeOutline from "@iconify-icons/mdi/home-outline";
import siteLogo from "../../public/whitelogo.png";
import UserIcon from "../../public/user.jpeg";
import bannerImg from "../../public/mate-libre-watermelon-sugarfree.png";
import bannerVector from "../../public/bannerVector.png";
import passion from "../../public/passion.png";
import Marquee from "react-fast-marquee";
import infusionImg from "../../public/infusionImg.png";
import infusionImg2 from "../../public/infusionImg2.png";
import committed from "../../public/committed.png";
import eventImg1 from "../../public/eventImg1.png";
import eventImg2 from "../../public/eventImg2.png";
import eventImg3 from "../../public/eventImg3.png";
import FooterLogo from "../../public/logo.png";
import Header from "@/components/layout/header";
import Footer from "../components/layout/footer";
import { useState, useEffect } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function Home() {
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
              <div className="border border-[#6D96CE] lg:bg-[#4d56474d] bg-[#6D96CE] lg:p-5 md:p-4 p-3 w-full lg:max-w-[600px] rounded-2xl">
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

      <section className="siteBanner overflow-hidden relative xl:h-[90vh] bg-cover bg-bottom lg:pt-40 md:pt-40 pt-32 pb-20">
        <div className="max-w-screen-2xl mx-auto h-full px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 w-full g-3 h-full relative z-10">
            <div className="w-full lg:pr-20">
              <h1 className="xl:text-9xl lg:text-6xl md:text-6xl text-5xl text-white font-medium leading-tight">
                watermelon energy infusion
              </h1>
            </div>
            <div className="w-full z-10 flex justify-end items-end h-full">
              <div className="w-full border border-[#6D96CE] bg-[#4d56474d] lg:py-4 md:py-4 py-3 lg:px-6 md:px-4 px-3 lg:max-w-[470px] md:max-w-[470px] rounded-2xl space-y-4">
                <h2 className="m-0 text-[16px] font-normal text-white">20</h2>
                <h2 className="m-0 text-[16px] font-normal text-white">
                  Our newest member to the sugarfree family! Take a bite
                  straight out of a perfectly ripe watermelon slice. A crisp,
                  juicy flavour that will transport you
                </h2>
                <a href='/products' className="border-0 text-[13px] font-normal px-5 py-2 text-white bg-[#00000080] hover:bg-[#000] transition duration-500 ease-in-out rounded-full hover:-translate-y-2">
                  View Product
                </a>
              </div>
            </div>
          </div>
          <div className="lg:absolute md:absolute relative left-0 right-0 mx-auto flex items-center justify-center lg:-bottom-40 md:-bottom-40 lg:mb-0 md:mb-0 -mb-80">
            <Image
              src={bannerImg}
              alt="Site Logo"
              className="w-full lg:max-w-[552px]"
            />
          </div>

          <div className="absolute left-0 right-0 mx-auto flex items-center justify-center -bottom-3">
            <Image src={bannerVector} alt="Site Logo" className="w-full" />
          </div>
        </div>
      </section>
      <section className="aboutSection lg:py-20 md:py-20 py-10">
        <div className="max-w-screen-2xl  mx-auto px-3">
          <div className="flex lg:flex-row flex-col gap-4 w-full g-3 h-full">
            <div className="w-full lg:basis-1/2 basis-full flex items-start justify-center flex-col">
              <h2 className="lg:lg:text-[70px] md:text-[55px] text-[35px] fw-bold leading-tight mb-5">
                Discover our most popular yerba mate infusions
              </h2>
              <p className="lg:text-[18px] md:text-[15px] text-[13px] font-normal text-[#000] m-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <a href='/products'  className="border-0 flex items-center gap-[10px] text-[13px] font-normal px-5 py-2 text-white bg-[#2A2D6D] hover:bg-[#2A2D6D] transition duration-700 ease-in-out rounded-[8px] lg:mt-10 md:mt-5 mt-5  hover:-translate-y-2">
                View Product{" "}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.6603 7.97605C10.7794 7.53151 11.2364 7.26768 11.6809 7.3868L19.6494 9.52196C20.0939 9.64107 20.3578 10.098 20.2387 10.5426L18.1035 18.5111C17.9844 18.9556 17.5274 19.2194 17.0829 19.1003C16.6384 18.9812 16.3745 18.5242 16.4936 18.0797L18.1081 12.0545L8.30339 17.7152C7.90481 17.9454 7.39516 17.8088 7.16503 17.4102C6.93491 17.0116 7.07148 16.502 7.47005 16.2719L17.2748 10.6111L11.2496 8.99668C10.805 8.87755 10.5412 8.4206 10.6603 7.97605Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="lg:basis-2/5 basis-full lg:ms-auto bg-[#F0C019] rounded-[20px] relative pb-[70px] after:absolute after:bg-white after:w-full after:h-[70px] after:-bottom-[70px] lg:mt-0 md:mt-0 mt-32">
              <Image
                src={passion}
                alt="Site Logo"
                className="w-full max-w-[310px] -mt-[70px] -mb-[140px] mx-auto"
              />

              <div className="bg-[#4d564780] lg:py-3 lg:px-4 px-3 py-3 absolute bottom-4 w-full max-w-[calc(100%-30px)] mx-auto left-0 right-0 rounded-[20px]">
                <div>
                  <div className="flex items-center gap-2 justify-between mt-2">
                    <h3 className="lg:text-[35px] md:text-[25px] text-[20px] mb-2 text-white">
                      passion
                    </h3>
                    <h3 className="lg:text-[35px] md:text-[25px] text-[20px] mb-2 text-white">
                      $20
                    </h3>
                  </div>
                  <p className="lg:text-md md:text-md text-[13px] text-white mb-0">
                    Exotic, rich, and dangerously fruity. A taste worthy of the
                    local fruit markets of South America.
                  </p>
                  <div className="flex items-center gap-2 justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-[32px] h-[32px] rounded-full bg-[#4d5647b3] flex items-center justify-center text-[9px] text-white font-normal hover:bg-white hover:text-[#000] cursor-pointer">
                        50ml
                      </div>
                      <div className="w-[32px] h-[32px] rounded-full bg-[#fff] flex items-center justify-center text-[9px] text-dark font-normal cursor-pointer">
                        60ml
                      </div>
                      <div className="w-[32px] h-[32px] rounded-full bg-[#4d5647b3] flex items-center justify-center text-[9px] text-white font-normal hover:bg-white hover:text-[#000] cursor-pointer">
                        100ml
                      </div>
                    </div>
                    <a href='/products'  className="border-0 text-[13px] font-normal px-5 py-2 text-white bg-[#00000080] hover:bg-[#000] transition duration-700 ease-in-out rounded-full  hover:-translate-y-2">
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marqueeSection pb-6">
        <div className="w-full">
          <div>
            <Marquee speed={50} gradient={false} className="-mb-5">
              <h2 className="lg:text-[60px] md:text-[50px] text-[35px] font-normal text-[#000] px-3">
                energy infusion
              </h2>
              <h2 className="lg:text-[60px] md:text-[50px] text-[35px] font-normal text-[#fff] px-3 textOuter">
                awaken the mind
              </h2>
              <h2 className="lg:text-[60px] md:text-[50px] text-[35px] font-normal text-[#fff] px-3 textOuter">
                60 mg of caffeine
              </h2>
              <h2 className="lg:text-[60px] md:text-[50px] text-[35px] font-normal text-[#000] px-3">
                energy infusion
              </h2>
              <h2 className="lg:text-[60px] md:text-[50px] text-[35px] font-normal text-[#fff] px-3 textOuter">
                awaken the mind
              </h2>
            </Marquee>
            <Marquee speed={50} gradient={false} direction="right">
              <h2 className="lg:text-[60px] md:text-[50px] text-[35px] font-normal text-[#000] px-3">
                energy infusion
              </h2>
              <h2 className="lg:text-[60px] md:text-[50px] text-[35px] font-normal text-[#fff] px-3 textOuter">
                awaken the mind
              </h2>
              <h2 className="lg:text-[60px] md:text-[50px] text-[35px] font-normal text-[#fff] px-3 textOuter">
                60 mg of caffeine
              </h2>
              <h2 className="lg:text-[60px] md:text-[50px] text-[35px] font-normal text-[#000] px-3">
                energy infusion
              </h2>
              <h2 className="lg:text-[60px] md:text-[50px] text-[35px] font-normal text-[#fff] px-3 textOuter">
                awaken the mind
              </h2>
            </Marquee>
          </div>
        </div>
      </section>
      <section className="lg:pt-24 lg:pb-32 md:pt-16 pt-10 md:pb-24 pb-24 benifitsSec bg-bottom bg-cover">
        <div className="max-w-screen-2xl  mx-auto px-3">
          <div className="flex lg:flex-row flex-col gap-4 w-full g-3 h-full">
            <div className="w-full lg:basis-1/2 basis-full flex items-start justify-center flex-col">
              <h2 className="text-white lg:text-[70px] md:text-[55px] text-[35px]">
                The benefits of
                <br className="lg:flex md:hidden hidden" />
                yerba maté?
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-4 w-full g-3 h-full lg:pt-32 md:pt-24 pt-8">
            <div className="w-full lg:basis-1/3 md:lg:basis-1/2 basis-full flex items-start justify-center flex-col">
              <div className="bg-[#4d5647b3] hover:bg-[#4D5647] cursor-pointer transition duration-300 rounded-3xl lg:p-[25px] md:p-[20px] p-[15px] w-full">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M72.6562 37.5C72.6563 40.7449 71.6941 43.9169 69.8913 46.6149C68.0886 49.3129 65.5263 51.4157 62.5284 52.6574C59.5306 53.8992 56.2318 54.2241 53.0493 53.591C49.8668 52.9579 46.9435 51.3954 44.6491 49.1009C44.6156 49.0674 44.5832 49.033 44.5518 48.9976L26.9881 29.1657C25.3439 27.5404 23.2556 26.4378 20.9861 25.9966C18.7167 25.5554 16.3674 25.7954 14.234 26.6863C12.1006 27.5773 10.2784 29.0794 8.9967 31.0035C7.71503 32.9277 7.03116 35.188 7.03116 37.5C7.03116 39.812 7.71503 42.0723 8.9967 43.9965C10.2784 45.9207 12.1006 47.4227 14.234 48.3137C16.3674 49.2046 18.7167 49.4446 20.9861 49.0034C23.2556 48.5622 25.3439 47.4596 26.9881 45.8343L29.4839 43.0162C29.6879 42.7854 29.9353 42.597 30.2121 42.4619C30.4889 42.3267 30.7897 42.2475 31.0971 42.2287C31.4046 42.2098 31.7127 42.2518 32.0039 42.3521C32.2952 42.4525 32.5638 42.6093 32.7943 42.8135C33.0249 43.0177 33.213 43.2654 33.3478 43.5424C33.4826 43.8193 33.5615 44.1202 33.5799 44.4276C33.5984 44.7351 33.556 45.0432 33.4553 45.3343C33.3546 45.6254 33.1975 45.8938 32.993 46.1241L30.4481 48.9976C30.4168 49.0329 30.3844 49.0674 30.3508 49.1009C28.0564 51.3954 25.1331 52.9579 21.9506 53.591C18.7681 54.2241 15.4693 53.8992 12.4714 52.6574C9.47357 51.4157 6.91125 49.3129 5.1085 46.6149C3.30575 43.9169 2.34353 40.7449 2.34353 37.5C2.34353 34.2551 3.30575 31.0832 5.1085 28.3852C6.91125 25.6872 9.47357 23.5843 12.4714 22.3426C15.4693 21.1008 18.7681 20.776 21.9506 21.409C25.1331 22.0421 28.0564 23.6047 30.3508 25.8991C30.3843 25.9326 30.4167 25.967 30.4481 26.0024L48.0118 45.8343C49.656 47.4596 51.7443 48.5622 54.0138 49.0034C56.2833 49.4446 58.6326 49.2046 60.766 48.3137C62.8994 47.4227 64.7216 45.9207 66.0032 43.9965C67.2849 42.0723 67.9688 39.812 67.9688 37.5C67.9688 35.188 67.2849 32.9277 66.0032 31.0035C64.7216 29.0794 62.8994 27.5773 60.766 26.6863C58.6326 25.7954 56.2833 25.5554 54.0138 25.9966C51.7443 26.4378 49.656 27.5404 48.0118 29.1657L45.516 31.9838C45.1036 32.448 44.5237 32.7296 43.9039 32.7667C43.284 32.8038 42.6747 32.5934 42.2099 32.1817C41.745 31.77 41.4625 31.1906 41.4245 30.5708C41.3864 29.951 41.5959 29.3414 42.0069 28.8759L44.5518 26.0024C44.5832 25.9671 44.6156 25.9327 44.6491 25.8991C46.9435 23.6047 49.8668 22.0422 53.0493 21.4092C56.2318 20.7761 59.5305 21.101 62.5283 22.3428C65.5262 23.5845 68.0885 25.6873 69.8912 28.3853C71.694 31.0832 72.6562 34.2552 72.6562 37.5Z"
                    fill="white"
                  />
                </svg>
                <h3 className="lg:text-[32px] md:text-[22px] text-[18px] text-white font-normal lg:mt-9 md:mt-6 mt-0">
                  Stimulates your mind
                </h3>
                <p className="mb-0 lg:mt-6 md:mt-6 mt-3 text-white lg:text-[15px] md:text-[15px] text-[13px]">
                  Put your brain in focus mode: yerba mate infusion can help
                  stimulate brain activity thanks to the natural presence of
                  polyphenols. The end of your sessions will be much more
                  productive.
                </p>
              </div>
            </div>
            <div className="w-full lg:basis-1/3 md:lg:basis-1/2 basis-full flex items-start justify-center flex-col">
              <div className="bg-[#4d5647b3] hover:bg-[#4D5647] cursor-pointer transition duration-300 rounded-3xl lg:p-[25px] md:p-[20px] p-[15px] w-full">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M72.6562 37.5C72.6563 40.7449 71.6941 43.9169 69.8913 46.6149C68.0886 49.3129 65.5263 51.4157 62.5284 52.6574C59.5306 53.8992 56.2318 54.2241 53.0493 53.591C49.8668 52.9579 46.9435 51.3954 44.6491 49.1009C44.6156 49.0674 44.5832 49.033 44.5518 48.9976L26.9881 29.1657C25.3439 27.5404 23.2556 26.4378 20.9861 25.9966C18.7167 25.5554 16.3674 25.7954 14.234 26.6863C12.1006 27.5773 10.2784 29.0794 8.9967 31.0035C7.71503 32.9277 7.03116 35.188 7.03116 37.5C7.03116 39.812 7.71503 42.0723 8.9967 43.9965C10.2784 45.9207 12.1006 47.4227 14.234 48.3137C16.3674 49.2046 18.7167 49.4446 20.9861 49.0034C23.2556 48.5622 25.3439 47.4596 26.9881 45.8343L29.4839 43.0162C29.6879 42.7854 29.9353 42.597 30.2121 42.4619C30.4889 42.3267 30.7897 42.2475 31.0971 42.2287C31.4046 42.2098 31.7127 42.2518 32.0039 42.3521C32.2952 42.4525 32.5638 42.6093 32.7943 42.8135C33.0249 43.0177 33.213 43.2654 33.3478 43.5424C33.4826 43.8193 33.5615 44.1202 33.5799 44.4276C33.5984 44.7351 33.556 45.0432 33.4553 45.3343C33.3546 45.6254 33.1975 45.8938 32.993 46.1241L30.4481 48.9976C30.4168 49.0329 30.3844 49.0674 30.3508 49.1009C28.0564 51.3954 25.1331 52.9579 21.9506 53.591C18.7681 54.2241 15.4693 53.8992 12.4714 52.6574C9.47357 51.4157 6.91125 49.3129 5.1085 46.6149C3.30575 43.9169 2.34353 40.7449 2.34353 37.5C2.34353 34.2551 3.30575 31.0832 5.1085 28.3852C6.91125 25.6872 9.47357 23.5843 12.4714 22.3426C15.4693 21.1008 18.7681 20.776 21.9506 21.409C25.1331 22.0421 28.0564 23.6047 30.3508 25.8991C30.3843 25.9326 30.4167 25.967 30.4481 26.0024L48.0118 45.8343C49.656 47.4596 51.7443 48.5622 54.0138 49.0034C56.2833 49.4446 58.6326 49.2046 60.766 48.3137C62.8994 47.4227 64.7216 45.9207 66.0032 43.9965C67.2849 42.0723 67.9688 39.812 67.9688 37.5C67.9688 35.188 67.2849 32.9277 66.0032 31.0035C64.7216 29.0794 62.8994 27.5773 60.766 26.6863C58.6326 25.7954 56.2833 25.5554 54.0138 25.9966C51.7443 26.4378 49.656 27.5404 48.0118 29.1657L45.516 31.9838C45.1036 32.448 44.5237 32.7296 43.9039 32.7667C43.284 32.8038 42.6747 32.5934 42.2099 32.1817C41.745 31.77 41.4625 31.1906 41.4245 30.5708C41.3864 29.951 41.5959 29.3414 42.0069 28.8759L44.5518 26.0024C44.5832 25.9671 44.6156 25.9327 44.6491 25.8991C46.9435 23.6047 49.8668 22.0422 53.0493 21.4092C56.2318 20.7761 59.5305 21.101 62.5283 22.3428C65.5262 23.5845 68.0885 25.6873 69.8912 28.3853C71.694 31.0832 72.6562 34.2552 72.6562 37.5Z"
                    fill="white"
                  />
                </svg>
                <h3 className="lg:text-[32px] md:text-[22px] text-[18px] text-white font-normal lg:mt-9 md:mt-6 mt-0">
                  Stimulates your mind
                </h3>
                <p className="mb-0 lg:mt-6 md:mt-6 mt-3 text-white lg:text-[15px] md:text-[15px] text-[13px]">
                  Put your brain in focus mode: yerba mate infusion can help
                  stimulate brain activity thanks to the natural presence of
                  polyphenols. The end of your sessions will be much more
                  productive.
                </p>
              </div>
            </div>
            <div className="w-full lg:basis-1/3 md:lg:basis-1/2 basis-full flex items-start justify-center flex-col">
              <div className="bg-[#4d5647b3] hover:bg-[#4D5647] cursor-pointer transition duration-300 rounded-3xl lg:p-[25px] md:p-[20px] p-[15px] w-full">
                <svg
                  width="75"
                  height="75"
                  viewBox="0 0 75 75"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M72.6562 37.5C72.6563 40.7449 71.6941 43.9169 69.8913 46.6149C68.0886 49.3129 65.5263 51.4157 62.5284 52.6574C59.5306 53.8992 56.2318 54.2241 53.0493 53.591C49.8668 52.9579 46.9435 51.3954 44.6491 49.1009C44.6156 49.0674 44.5832 49.033 44.5518 48.9976L26.9881 29.1657C25.3439 27.5404 23.2556 26.4378 20.9861 25.9966C18.7167 25.5554 16.3674 25.7954 14.234 26.6863C12.1006 27.5773 10.2784 29.0794 8.9967 31.0035C7.71503 32.9277 7.03116 35.188 7.03116 37.5C7.03116 39.812 7.71503 42.0723 8.9967 43.9965C10.2784 45.9207 12.1006 47.4227 14.234 48.3137C16.3674 49.2046 18.7167 49.4446 20.9861 49.0034C23.2556 48.5622 25.3439 47.4596 26.9881 45.8343L29.4839 43.0162C29.6879 42.7854 29.9353 42.597 30.2121 42.4619C30.4889 42.3267 30.7897 42.2475 31.0971 42.2287C31.4046 42.2098 31.7127 42.2518 32.0039 42.3521C32.2952 42.4525 32.5638 42.6093 32.7943 42.8135C33.0249 43.0177 33.213 43.2654 33.3478 43.5424C33.4826 43.8193 33.5615 44.1202 33.5799 44.4276C33.5984 44.7351 33.556 45.0432 33.4553 45.3343C33.3546 45.6254 33.1975 45.8938 32.993 46.1241L30.4481 48.9976C30.4168 49.0329 30.3844 49.0674 30.3508 49.1009C28.0564 51.3954 25.1331 52.9579 21.9506 53.591C18.7681 54.2241 15.4693 53.8992 12.4714 52.6574C9.47357 51.4157 6.91125 49.3129 5.1085 46.6149C3.30575 43.9169 2.34353 40.7449 2.34353 37.5C2.34353 34.2551 3.30575 31.0832 5.1085 28.3852C6.91125 25.6872 9.47357 23.5843 12.4714 22.3426C15.4693 21.1008 18.7681 20.776 21.9506 21.409C25.1331 22.0421 28.0564 23.6047 30.3508 25.8991C30.3843 25.9326 30.4167 25.967 30.4481 26.0024L48.0118 45.8343C49.656 47.4596 51.7443 48.5622 54.0138 49.0034C56.2833 49.4446 58.6326 49.2046 60.766 48.3137C62.8994 47.4227 64.7216 45.9207 66.0032 43.9965C67.2849 42.0723 67.9688 39.812 67.9688 37.5C67.9688 35.188 67.2849 32.9277 66.0032 31.0035C64.7216 29.0794 62.8994 27.5773 60.766 26.6863C58.6326 25.7954 56.2833 25.5554 54.0138 25.9966C51.7443 26.4378 49.656 27.5404 48.0118 29.1657L45.516 31.9838C45.1036 32.448 44.5237 32.7296 43.9039 32.7667C43.284 32.8038 42.6747 32.5934 42.2099 32.1817C41.745 31.77 41.4625 31.1906 41.4245 30.5708C41.3864 29.951 41.5959 29.3414 42.0069 28.8759L44.5518 26.0024C44.5832 25.9671 44.6156 25.9327 44.6491 25.8991C46.9435 23.6047 49.8668 22.0422 53.0493 21.4092C56.2318 20.7761 59.5305 21.101 62.5283 22.3428C65.5262 23.5845 68.0885 25.6873 69.8912 28.3853C71.694 31.0832 72.6562 34.2552 72.6562 37.5Z"
                    fill="white"
                  />
                </svg>
                <h3 className="lg:text-[32px] md:text-[22px] text-[18px] text-white font-normal lg:mt-9 md:mt-6 mt-0">
                  Stimulates your mind
                </h3>
                <p className="mb-0 lg:mt-6 md:mt-6 mt-3 text-white lg:text-[15px] md:text-[15px] text-[13px]">
                  Put your brain in focus mode: yerba mate infusion can help
                  stimulate brain activity thanks to the natural presence of
                  polyphenols. The end of your sessions will be much more
                  productive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative lg:pt-16 md:pt-14 pt-5 lg:pb-20 md:pb-16 pb-0">
        <div className="max-w-screen-2xl  mx-auto px-3">
          <div className="flex lg:flex-row flex-col gap-4 w-full g-3 h-full">
            <div className="w-full lg:basis-full basis-full flex items-start justify-center flex-col">
              <h2 className="text-dark lg:text-[60px] md:text-[45px] text-[30px] leading-tight">
                mate libre is made from an infusion of yerba mate, a tree of
                South American origin. A superfood with multiple benefits.
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col w-full h-full mt-9 lg:gap-10 gap-6">
            <div className="w-full lg:basis-2/3 basis-full flex items-end justify-end flex-col">
              <Image
                src={infusionImg}
                alt="Site Logo"
                className="w-full mx-auto"
              />
            </div>
            <div className="w-full lg:basis-1/3 basis-full flex items-start justify-center flex-col">
              <Image
                src={infusionImg2}
                alt="Site Logo"
                className="w-full mx-auto"
              />
              <button className="border-0 flex items-center gap-[10px] text-[13px] font-normal px-5 py-4 text-white bg-[#2A2D6D] hover:bg-[#2A2D6D] transition duration-700 ease-in-out rounded-[8px] lg:mt-6 md:mt-4 mt-4 hover:-translate-y-2">
                Discover yerba maté
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-16 lg:pb-20 md:pb-20 pb-10">
        <div className="max-w-screen-2xl  me-auto px-3 ps-0">
          <div className="flex lg:flex-row flex-col gap-10 w-full h-full">
            <div className="w-full lg:basis-1/2 basis-full flex items-center justify-center flex-col">
              <Image
                src={committed}
                alt="Site Logo"
                className="w-full mx-auto h-full object-cover"
                style={{ borderRadius: "0 20px 20px 0" }}
              />
            </div>
            <div className="w-full lg:basis-1/2 basis-full flex items-center h-full justify-between flex-col lg:min-h-[1040px] lg:ps-0 ps-3">
              <h2 className="text-dark lg:text-[70px] md:text-[55px] text-[35px] leading-tight">
                Committed from our raw material to packaging.
              </h2>

              <div className="mt-5">
                <p className="lg:text-[18px] md:text-md text-[13px] font-medium text-[#000] lg:mb-5 md:mb-5 mb-3">
                  We're not perfect, but we're committed to making an
                  environmental and social difference as best we can. Our
                  carbon-neutral delivery is just one way to work towards making
                  a positive impact because it has never been more important.
                </p>
                <p className="lg:text-[18px] md:text-md text-[13px] font-bold text-[#000] m-0 flex items-center gap-2">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M51.0885 17.5345C53.4566 17.5016 56.128 17.4644 59.0069 16.9315C58.6755 17.5749 58.3796 18.2534 58.1061 18.9461C57.6545 20.0901 57.2442 21.3277 56.8378 22.5537C56.6979 22.9758 56.5584 23.3966 56.4179 23.8117C55.2907 27.1403 54.0685 30.1565 51.8706 31.9828C50.365 33.1714 48.4019 33.8802 46.3655 33.7567C44.3473 33.6344 42.179 32.6905 40.2422 30.4325C38.3347 28.163 37.781 22.9311 41.9333 19.5339C43.9478 17.8856 46.4848 17.625 49.8435 17.5547C50.2483 17.5462 50.6635 17.5404 51.0885 17.5345Z"
                      stroke="black"
                      stroke-width="2"
                    />
                    <path
                      d="M38.7879 32.553L37.6168 34.5931C37.9507 33.9133 38.34 33.2315 38.7879 32.553ZM23.6345 33.7567C21.5981 33.8802 19.635 33.1714 18.1295 31.9828C15.9316 30.1565 14.7093 27.1403 13.5822 23.8117C13.4416 23.3966 13.3021 22.9758 13.1622 22.5537C12.7558 21.3277 12.3455 20.0901 11.8939 18.9461C11.6204 18.2534 11.3245 17.575 10.9931 16.9315C13.872 17.4644 16.5434 17.5016 18.9116 17.5345C19.3365 17.5404 19.7517 17.5462 20.1566 17.5547C23.5152 17.625 26.0522 17.8856 28.0668 19.5339C32.219 22.9311 31.6653 28.1631 29.7578 30.4326C27.8211 32.6905 25.6527 33.6344 23.6345 33.7567Z"
                      stroke="black"
                      stroke-width="2"
                    />
                    <path
                      d="M30.6717 44.6241C31.4809 43.3092 32.9247 42.4185 34.4486 42.208L36 44.9105V42.2341C37.4612 42.4849 38.8291 43.3578 39.6084 44.6241L39.6155 44.6357L39.6229 44.647L45.4722 53.6H24.8079L30.6572 44.647L30.6646 44.6357L30.6717 44.6241ZM31.2121 32.5532C31.66 33.2316 32.0493 33.9134 32.3832 34.5932L31.2121 32.5532Z"
                      stroke="black"
                      stroke-width="2"
                    />
                  </svg>
                  Carbon-free delivery in Greater Montreal
                </p>
                <p className="lg:text-[18px] md:text-md text-[13px] font-bold text-[#000] m-0 flex items-center gap-2">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_26_77" fill="white">
                      <path d="M35.84 27.02C35.42 26.18 35.28 25.34 35.28 24.64C35.28 20.72 40.88 14.14 48.44 15.4C56 16.66 59.08 23.94 63.84 25.48V54.32C59.08 54.32 58.66 49.7 51.38 49.7C46.34 49.7 42.42 51.94 37.94 53.9C36.68 54.46 35.28 53.62 35.28 52.22C35 44.52 49.84 45.08 49.84 34.58C49.84 31.92 48.16 29.12 44.94 29.12C42 29.12 40.88 32.76 38.08 32.76C36.96 32.76 35.28 31.78 35.28 29.82C35.28 26.18 40.6 20.86 46.76 21.7C50.96 22.26 53.62 25.76 53.62 25.76" />
                    </mask>
                    <path
                      d="M63.84 25.48H65.84V24.025L64.4556 23.5771L63.84 25.48ZM63.84 54.32V56.32H65.84V54.32H63.84ZM37.94 53.9L37.1383 52.0677L37.1277 52.0724L37.94 53.9ZM35.28 52.22H37.28V52.1837L37.2787 52.1473L35.28 52.22ZM46.76 21.7L46.4897 23.6817L46.4956 23.6825L46.76 21.7ZM37.6288 26.1256C37.3686 25.6052 37.28 25.08 37.28 24.64H33.28C33.28 25.6 33.4713 26.7548 34.0511 27.9144L37.6288 26.1256ZM37.28 24.64C37.28 23.473 38.2369 21.3583 40.3143 19.6064C42.2995 17.9324 45.0146 16.8567 48.1112 17.3728L48.7688 13.4272C44.3053 12.6833 40.4405 14.2676 37.7356 16.5486C35.1231 18.7517 33.28 21.887 33.28 24.64H37.28ZM48.1112 17.3728C51.281 17.9011 53.5759 19.684 55.8206 21.7927C56.8827 22.7904 58.0707 23.998 59.1902 24.9536C60.3456 25.94 61.6671 26.8791 63.2243 27.3829L64.4556 23.5771C63.6328 23.3109 62.7843 22.7626 61.7872 21.9114C60.7542 21.0295 59.8072 20.0496 58.5593 18.8773C56.1841 16.646 53.1589 14.1589 48.7688 13.4272L48.1112 17.3728ZM61.84 25.48V54.32H65.84V25.48H61.84ZM63.84 52.32C62.2311 52.32 61.4903 51.6543 59.7208 50.3849C57.9006 49.0791 55.5736 47.7 51.38 47.7V51.7C54.4663 51.7 55.9894 52.6309 57.3892 53.6351C58.8397 54.6757 60.6889 56.32 63.84 56.32V52.32ZM51.38 47.7C45.8039 47.7 41.3683 50.2171 37.1383 52.0677L38.7416 55.7323C43.4717 53.6629 46.876 51.7 51.38 51.7V47.7ZM37.1277 52.0724C37.1119 52.0794 37.1157 52.0743 37.1343 52.0756C37.1498 52.0767 37.1701 52.082 37.1922 52.0957C37.215 52.1099 37.2402 52.1336 37.2593 52.1673C37.2805 52.2048 37.28 52.2296 37.28 52.22H33.28C33.28 55.1684 36.2633 56.8338 38.7523 55.7276L37.1277 52.0724ZM37.2787 52.1473C37.2371 51.0034 37.7001 50.1281 38.7611 49.1907C39.9221 48.1649 41.507 47.3137 43.4596 46.1794C47.0966 44.0665 51.84 41.0655 51.84 34.58H47.84C47.84 38.5945 45.1634 40.5635 41.4503 42.7207C39.728 43.7213 37.6553 44.8301 36.1126 46.1931C34.4699 47.6444 33.1829 49.5866 33.2813 52.2927L37.2787 52.1473ZM51.84 34.58C51.84 32.8577 51.3019 31.0375 50.1618 29.6063C48.9844 28.1284 47.1974 27.12 44.94 27.12V31.12C45.9026 31.12 46.5655 31.5116 47.0332 32.0987C47.5381 32.7325 47.84 33.6423 47.84 34.58H51.84ZM44.94 27.12C42.5848 27.12 41.022 28.63 40.1095 29.4625C38.9837 30.4896 38.574 30.76 38.08 30.76V34.76C40.3859 34.76 41.9363 33.2104 42.8054 32.4175C43.8879 31.43 44.3551 31.12 44.94 31.12V27.12ZM38.08 30.76C38.0838 30.76 38.0668 30.7602 38.0303 30.7529C37.9947 30.7458 37.9483 30.733 37.8949 30.7122C37.7853 30.6696 37.673 30.6039 37.577 30.5198C37.4096 30.3734 37.28 30.1704 37.28 29.82H33.28C33.28 33.1271 36.1146 34.76 38.08 34.76V30.76ZM37.28 29.82C37.28 28.8481 38.1072 27.1235 39.9594 25.6417C41.7279 24.2269 44.0635 23.3508 46.4898 23.6817L47.0302 19.7183C43.2965 19.2092 39.892 20.5731 37.4606 22.5183C35.1127 24.3965 33.28 27.1519 33.28 29.82H37.28ZM46.4956 23.6825C48.1147 23.8983 49.498 24.6937 50.5212 25.5062C51.0248 25.9061 51.4165 26.2908 51.6779 26.5704C51.8079 26.7094 51.9038 26.8204 51.9632 26.8914C51.9928 26.9269 52.0132 26.9522 52.0241 26.9659C52.0295 26.9727 52.0326 26.9766 52.0332 26.9774C52.0335 26.9778 52.0332 26.9774 52.0323 26.9762C52.0318 26.9756 52.0312 26.9748 52.0304 26.9738C52.03 26.9733 52.0296 26.9727 52.0292 26.9721C52.0289 26.9718 52.0285 26.9713 52.0284 26.9712C52.028 26.9707 52.0276 26.9702 53.62 25.76C55.2123 24.5498 55.2119 24.5493 55.2115 24.5487C55.2113 24.5485 55.2109 24.548 55.2106 24.5475C55.2099 24.5467 55.2093 24.5459 55.2086 24.5449C55.2071 24.5431 55.2056 24.541 55.2038 24.5387C55.2003 24.5342 55.1961 24.5287 55.1912 24.5225C55.1815 24.51 55.1691 24.4942 55.154 24.4752C55.1239 24.4374 55.0831 24.3869 55.0318 24.3256C54.9293 24.2031 54.7845 24.0362 54.5996 23.8384C54.2309 23.4442 53.6952 22.9189 53.0087 22.3738C51.6519 21.2963 49.6053 20.0617 47.0243 19.7175L46.4956 23.6825Z"
                      fill="black"
                      mask="url(#path-1-inside-1_26_77)"
                    />
                    <mask id="path-3-inside-2_26_77" fill="white">
                      <path d="M34.72 27.02C35.14 26.18 35.28 25.34 35.28 24.64C35.28 20.72 29.68 14.14 22.12 15.4C14.56 16.66 11.48 23.94 6.71997 25.48V54.32C11.48 54.32 11.9 49.7 19.18 49.7C24.22 49.7 28.14 51.94 32.62 53.9C33.88 54.46 35.28 53.62 35.28 52.22C35.56 44.52 20.72 45.08 20.72 34.58C20.72 31.92 22.4 29.12 25.62 29.12C28.56 29.12 29.68 32.76 32.48 32.76C33.6 32.76 35.28 31.78 35.28 29.82C35.28 26.18 29.96 20.86 23.8 21.7C19.6 22.26 16.94 25.76 16.94 25.76" />
                    </mask>
                    <path
                      d="M6.71997 25.48L6.10433 23.5771L4.71997 24.025V25.48H6.71997ZM6.71997 54.32H4.71997V56.32H6.71997V54.32ZM32.62 53.9L33.4323 52.0723L33.4216 52.0677L32.62 53.9ZM35.28 52.22L33.2813 52.1473L33.28 52.1837V52.22H35.28ZM23.8 21.7L24.0643 23.6825L24.0702 23.6817L23.8 21.7ZM36.5088 27.9144C37.0886 26.7548 37.28 25.6 37.28 24.64H33.28C33.28 25.08 33.1913 25.6052 32.9311 26.1256L36.5088 27.9144ZM37.28 24.64C37.28 21.887 35.4369 18.7517 32.8243 16.5486C30.1195 14.2676 26.2546 12.6833 21.7912 13.4272L22.4488 17.3728C25.5453 16.8567 28.2605 17.9324 30.2456 19.6064C32.323 21.3583 33.28 23.473 33.28 24.64H37.28ZM21.7912 13.4272C17.401 14.1589 14.3759 16.646 12.0006 18.8773C10.7527 20.0496 9.80569 21.0295 8.7727 21.9114C7.7756 22.7626 6.92714 23.3109 6.10433 23.5771L7.33561 27.3829C8.8928 26.8791 10.2143 25.94 11.3697 24.9536C12.4892 23.998 13.6772 22.7904 14.7393 21.7927C16.9841 19.684 19.2789 17.9011 22.4488 17.3728L21.7912 13.4272ZM4.71997 25.48V54.32H8.71997V25.48H4.71997ZM6.71997 56.32C9.87108 56.32 11.7203 54.6757 13.1708 53.6351C14.5706 52.6309 16.0936 51.7 19.18 51.7V47.7C14.9863 47.7 12.6594 49.0791 10.8392 50.3849C9.06967 51.6543 8.32887 52.32 6.71997 52.32V56.32ZM19.18 51.7C23.6839 51.7 27.0883 53.6629 31.8183 55.7323L33.4216 52.0677C29.1917 50.2171 24.756 47.7 19.18 47.7V51.7ZM31.8077 55.7276C34.2967 56.8338 37.28 55.1684 37.28 52.22H33.28C33.28 52.2296 33.2795 52.2048 33.3007 52.1673C33.3197 52.1336 33.345 52.1099 33.3677 52.0957C33.3899 52.082 33.4102 52.0767 33.4257 52.0756C33.4443 52.0743 33.448 52.0794 33.4322 52.0724L31.8077 55.7276ZM37.2787 52.2927C37.3771 49.5866 36.0901 47.6444 34.4473 46.1931C32.9046 44.8301 30.832 43.7213 29.1096 42.7207C25.3966 40.5635 22.72 38.5945 22.72 34.58H18.72C18.72 41.0655 23.4634 44.0665 27.1003 46.1794C29.0529 47.3137 30.6378 48.1649 31.7989 49.1907C32.8599 50.1281 33.3229 51.0034 33.2813 52.1473L37.2787 52.2927ZM22.72 34.58C22.72 33.6423 23.0219 32.7325 23.5268 32.0987C23.9944 31.5116 24.6574 31.12 25.62 31.12V27.12C23.3626 27.12 21.5755 28.1284 20.3981 29.6064C19.2581 31.0375 18.72 32.8577 18.72 34.58H22.72ZM25.62 31.12C26.2048 31.12 26.672 31.43 27.7545 32.4175C28.6237 33.2104 30.174 34.76 32.48 34.76V30.76C31.9859 30.76 31.5763 30.4896 30.4504 29.4625C29.5379 28.63 27.9751 27.12 25.62 27.12V31.12ZM32.48 34.76C34.4453 34.76 37.28 33.1271 37.28 29.82H33.28C33.28 30.1704 33.1504 30.3734 32.983 30.5198C32.8869 30.6039 32.7747 30.6696 32.6651 30.7122C32.6116 30.733 32.5653 30.7458 32.5296 30.7529C32.4932 30.7602 32.4761 30.76 32.48 30.76V34.76ZM37.28 29.82C37.28 27.1519 35.4472 24.3965 33.0994 22.5183C30.6679 20.5731 27.2635 19.2092 23.5297 19.7183L24.0702 23.6817C26.4965 23.3508 28.832 24.2269 30.6006 25.6417C32.4527 27.1235 33.28 28.8481 33.28 29.82H37.28ZM23.5356 19.7175C20.9547 20.0617 18.908 21.2963 17.5512 22.3738C16.8647 22.9189 16.329 23.4442 15.9604 23.8384C15.7754 24.0362 15.6306 24.2031 15.5282 24.3256C15.4769 24.3869 15.436 24.4374 15.4059 24.4752C15.3908 24.4942 15.3784 24.51 15.3687 24.5225C15.3638 24.5287 15.3597 24.5342 15.3561 24.5387C15.3544 24.541 15.3528 24.5431 15.3514 24.5449C15.3507 24.5459 15.35 24.5467 15.3494 24.5475C15.3491 24.548 15.3486 24.5485 15.3485 24.5487C15.3481 24.5493 15.3476 24.5498 16.94 25.76C18.5323 26.9702 18.5319 26.9707 18.5315 26.9712C18.5314 26.9713 18.531 26.9718 18.5308 26.9721C18.5303 26.9727 18.5299 26.9733 18.5295 26.9738C18.5288 26.9748 18.5281 26.9756 18.5277 26.9762C18.5268 26.9774 18.5265 26.9778 18.5268 26.9774C18.5274 26.9766 18.5304 26.9727 18.5358 26.9659C18.5467 26.9522 18.5671 26.9269 18.5968 26.8914C18.6562 26.8204 18.752 26.7094 18.8821 26.5704C19.1434 26.2908 19.5352 25.9061 20.0387 25.5062C21.0619 24.6937 22.4453 23.8983 24.0643 23.6825L23.5356 19.7175Z"
                      fill="black"
                      mask="url(#path-3-inside-2_26_77)"
                    />
                  </svg>
                  Fair trade yerba mate
                </p>
                <p className="lg:text-[18px] md:text-md text-[13px] font-bold text-[#000] m-0 flex items-center gap-2">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.904 33.4914C50.6361 33.3108 47.4842 33.9017 44.6455 35.169C44.7704 31.7435 44.1078 28.4401 42.7608 25.3629C45.8643 23.1036 49.3083 21.5778 52.8678 20.9966C54.2174 24.8829 54.6015 29.237 53.904 33.4914ZM25.2148 35.1405C22.3633 33.7814 19.2081 33.3016 15.9555 33.4907C15.2484 29.2268 15.519 24.8788 16.9759 21.0078C20.5588 21.7102 24.1238 23.2406 27.1087 25.3738C25.8846 28.4255 25.116 31.8133 25.2148 35.1405Z"
                      stroke="black"
                    />
                    <path
                      d="M54.32 34.0199C50.82 33.7399 47.18 34.4399 44.1 35.9799M25.76 35.9799C22.68 34.4399 19.18 33.7399 15.54 34.0199"
                      stroke="black"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M54.2801 34.5183L54.2876 34.5189L54.295 34.5193C56.9089 34.65 59.5269 35.2808 61.9068 36.2932C61.2696 42.2608 58.1469 47.9071 53.4752 51.1439C48.8941 54.318 42.7818 55.2058 35.9461 51.7341C41.5433 47.5636 44.2305 42.0105 44.5832 36.3C47.5244 34.8901 50.9673 34.2533 54.2801 34.5183ZM25.2836 36.3031C25.7606 42.001 28.3181 47.5574 33.9142 51.7339C27.0784 55.2058 20.9659 54.318 16.3847 51.1439C11.7131 47.9071 8.59038 42.2608 7.95319 36.2932C10.3331 35.2808 12.9511 34.65 15.565 34.5193L15.565 34.5194L15.5783 34.5184C19.0299 34.2529 22.3476 34.8907 25.2836 36.3031Z"
                      stroke="black"
                    />
                    <path
                      d="M43.6363 33.1284C44.108 39.6829 41.6961 46.4091 35 51.1888C28.3039 46.4091 25.8919 39.6829 26.3637 33.1284C26.8336 26.6006 30.1663 20.2461 35 16.1878C39.8336 20.2461 43.1664 26.6006 43.6363 33.1284Z"
                      stroke="black"
                    />
                  </svg>
                  Certified organic
                </p>

                <button className="border-0 flex items-center gap-[10px] text-[13px] font-normal px-5 py-4 text-white bg-[#2A2D6D] hover:bg-[#2A2D6D] transition duration-700 ease-in-out rounded-[8px] lg:mt-10 md:mt-6 mt-4  hover:-translate-y-2">
                  discover our commitments
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourCommunity bg-cover lg:bg-bottom md:bg-bottom bg-center lg:pt-20 md:pt-20 pt-10 lg:pb-28 md:pb-28 pb-32 relative">
        <div className="max-w-screen-2xl  mx-auto px-3">
          <div className="flex lg:flex-row flex-col gap-5 w-full h-full">
            <div className="w-full lg:basis-1/3 basis-full flex items-start justify-start flex-col">
              <h3 className="text-dark lg:text-[70px] md:text-[55px] text-[35px] leading-tight mb-4 text-white">
                Our community
              </h3>
              <button className="border-0 text-[13px] font-normal px-5 py-2 text-white bg-[#ffffff4d] hover:bg-[#FFFFFF] hover:text-[#000] transition duration-700  hover:-translate-y-2 ease-in-out rounded-full">
                see all articles
              </button>
            </div>
            <div className="w-full lg:basis-2/3 basis-full flex items-start justify-start flex-col space-y-4">
              <div className="w-full bg-[#ffffff4d] p-4 rounded-3xl">
                <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap items-start lg:gap-6 md:gap-6 gap-3">
                  <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center gap-6">
                    <Image
                      src={eventImg1}
                      alt="Site Logo"
                      className="w-full max-w-[190px]"
                    />
                    <div className="h-full">
                      <h3 className="lg:text-[28px] md:text-[25px] text-[18px] text-white leading-tight font-medium mb-3">
                        What Does Yerba Mate Taste Like?
                      </h3>
                      <p className="m-0 lg:text-[15px] md:text-[15px] text-[13px] font-normal text-white leading-6">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-white text-[16px] underline  font-semibold text-nowrap"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="w-full bg-[#ffffff4d] p-4 rounded-3xl">
                <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap items-start lg:gap-6 md:gap-6 gap-3">
                  <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center gap-6">
                    <Image
                      src={eventImg2}
                      alt="Site Logo"
                      className="w-full max-w-[190px]"
                    />
                    <div className="h-full">
                      <h3 className="lg:text-[28px] md:text-[25px] text-[18px] text-white leading-tight font-medium mb-3">
                        What Does Yerba Mate Taste Like?
                      </h3>
                      <p className="m-0 lg:text-[15px] md:text-[15px] text-[13px] font-normal text-white leading-6">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-white text-[16px] underline  font-semibold text-nowrap"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="w-full bg-[#ffffff4d] p-4 rounded-3xl">
                <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap items-start lg:gap-6 md:gap-6 gap-3">
                  <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center gap-6">
                    <Image
                      src={eventImg3}
                      alt="Site Logo"
                      className="w-full max-w-[190px]"
                    />
                    <div className="h-full">
                      <h3 className="lg:text-[28px] md:text-[25px] text-[18px] text-white leading-tight font-medium mb-3">
                        What Does Yerba Mate Taste Like?
                      </h3>
                      <p className="m-0 lg:text-[15px] md:text-[15px] text-[13px] font-normal text-white leading-6">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-white text-[16px] underline  font-semibold text-nowrap"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative lg:pt-20 md:pt-20 pt-0 lg:pb-16 md:pb-16 pb-10">
        <div className="max-w-screen-2xl  mx-auto px-3">
          <div className="flex flex-col items-center justify-center gap-5 w-full h-full bg-gradient-to-br from-[#2A2D6D] to-[#6D96CE] rounded-[50px] lg:p-12 md:p-9 p-5 max-w-[1040px] mx-auto">
            <h3 className="text-dark lg:text-[60px] md:text-[45px] text-[30px] text-center leading-tight lg:mb-5 md:mb-3 mb-0 text-white">
              Get notified when we’re launching
            </h3>
            <p className="text-white lg:text-[19px] md:text-[16px] text-[13px] font-normal text-center">
              Subscribe to our newsletter and receive 10$ off your first
              subscription order.
            </p>
            <div className="w-full border border-white rounded-full lg:p-2 md:p-2 p-1 flex items-center gap-3">
              <input
                type="text"
                placeholder="your emil id"
                className="border-0 outline-none shadow-none w-full bg-transparent text-white placeholder:text-white text-[16px] font-normal lg:h-[50px] md:h-[50px] h-[40px] ps-5"
              />
              <div
                className="lg:w-[56px] lg:h-[56px] md:w-[56px] md:h-[56px] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full"
                style={{ flex: "0 0 auto" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.2441 3.57757C10.5695 3.25214 11.0972 3.25214 11.4226 3.57757L17.2559 9.41091C17.5813 9.73633 17.5813 10.264 17.2559 10.5894L11.4226 16.4227C11.0972 16.7482 10.5695 16.7482 10.2441 16.4227C9.91867 16.0973 9.91867 15.5697 10.2441 15.2442L14.6548 10.8335H3.33333C2.8731 10.8335 2.5 10.4604 2.5 10.0002C2.5 9.53991 2.8731 9.16683 3.33333 9.16683H14.6548L10.2441 4.75609C9.91867 4.43065 9.91867 3.90301 10.2441 3.57757Z"
                    fill="black"
                  />
                </svg>
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

      <section className="border-t-2 py-5 border-[#BABABA]">
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
