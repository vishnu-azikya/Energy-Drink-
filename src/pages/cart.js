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
import passion from "../../public/product-passion.png";
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

export default function Cart() {
  return (
    <>
      <Header />
      <section
        className="lg:pt-60 relative md:pt-32 sm:pt-32 pt-32 overflow-hidden lg:pb-40 md:pb-28 sm:pb-32 pb-32 bg-gradient-to-br from-[#BFD785] to-[#4D5647]"
        style={{ borderRadius: "0 0 40px 40px" }}
      >
        <div className="max-w-screen-2xl mx-auto h-full px-3 relative z-10">
          <div className="flex lg:flex-col flex-col lg:gap-9 md:gap-5 gap-3 w-full h-full justify-center items-center">
            <h1 className="lg:text-7xl md:text-5xl text-3xl text-[#fff] font-bold w-full m-0 text-center leading-none">
              Cart
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
              <li className="text-white text-lg font-normal">Cart</li>
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
          <div className="flex lg:flex-row md:flex-col flex-col lg:gap-20 md:gap-10 gap-10 w-full h-full justify-start">
            <div className="w-full lg:basis-2/3 basis-full flex items-start justify-center flex-col">
              <h1 className="lg:text-5xl md:text-4xl text-3xl text-dark font-medium leading-tight flex items-center gap-4">
                <Icon icon="akar-icons:cart" />
                Your Cart
              </h1>
              <p className="m-0 lg:text-[17px] md:text-[17px] text-[13px] mt-4 mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <div className="lg:pt-10 md:pt-10 pt-0 w-full space-y-0">
                <div className="w-full flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start gap-5 border-b-0 p-4">
                  <div className="flex items-center gap-3">
                    <Icon className="text-2xl" icon="lineicons:trash-3" />
                    <div className="w-[130px] h-[130px] rounded-3xl overflow-hidden p-3 bg-[#c3c3c34d]">
                      <Image
                        src={passion}
                        alt="Site Logo"
                        className="w-full object-contain h-full"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <h5 className="text-2xl text-[#000] m-0 font-medium">
                      passion energy infusion
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex items-center gap-10 lg:ms-auto md:ms-auto ms-0 me-auto">
                      <h6 className="text-base text-[#797979] m-0 font-medium">
                        $20
                      </h6>
                      <div className="flex items-center justify-between gap-4 rounded-full border border-[#797979] py-2 px-2">
                        <button className="w-[25px] h-[25px] bg-transparent border-0">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-[25px] h-[25px]"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M6 12H18M12 6V18"
                                stroke="#797979"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        </button>

                        <input
                          type="text"
                          className="bg-transparent outline-none border-0 text-[18px] placeholder:text-[18px] text-[#797979] w-[30px] text-center placeholder:font-bold"
                          value={2}
                        />

                        <button className="w-[25px] h-[25px] bg-transparent border-0">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-[25px] h-[25px]"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M6 12L18 12"
                                stroke="#797979"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="lg:ms-auto md:ms-auto ms-0">
                      <h5 className="text-xl text-[#2a2d6d] m-0 font-medium">
                        $40
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:basis-1/3 basis-full flex items-center justify-center flex-col">
              <div className="w-full h-full lg:p-5 p-0 lg:border-s rounded-sm">
                <h5 className="text-2xl text-[#000] m-0 font-medium">
                  Cart Tottal
                </h5>
                <hr className="my-4" />
                <div className="mt-0 flex items-center gap-4 justify-between">
                  <h6 className="text-base font-normal">Subtotal</h6>
                  <h6 className="text-base font-normal">$160</h6>
                </div>
                <div className="mt-4 flex items-center gap-4 justify-between">
                  <h6 className="text-base font-normal">Total</h6>
                  <h6 className="text-base font-normal">$160</h6>
                </div>
                <div className="mt-10">
                  <button className="border-0 w-full flex items-center gap-[10px] font-normal px-10 py-4 text-[16px] text-white bg-[#2A2D6D] hover:bg-[#2A2D6D] transition duration-700 ease-in-out rounded-[8px] justify-center  hover:-translate-y-2">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
