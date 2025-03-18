import React, { useState } from "react";
import { Icon } from "@iconify/react";
import homeOutline from "@iconify-icons/mdi/home-outline";
import siteLogo from "../../../public/logo.png";
import UserIcon from "../../../public/user.jpeg";
import Image from "next/image";
import FooterLogo from "../../../public/logo.png";

const footer = () => {
  return (
    <div>
      <footer className="pt-16 pb-28 relative bg-white border-t border-[#BABABA]">
        <div className="max-w-screen-2xl  mx-auto px-3">
          <div className="flex lg:flex-row flex-col gap-5 w-full h-full">
            <div className="w-full lg:basis-1/3 basis-full flex items-start justify-start flex-col">
              <Image src={FooterLogo} alt="Site Logo" className="h-[60px]" />
            </div>

            <div className="w-full lg:basis-2/3 basis-full flex items-start justify-start flex-col">
              <div className="flex flex-row lg:flex-nowrap md:flex-wrap flex-wrap lg:gap-5 w-full h-full">
                <div className="w-full lg:basis-1/3 md:basis-1/3 sm:basis-1/2 basis-full flex items-start justify-start flex-col">
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        Explore
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        Community
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:basis-1/3 md:basis-1/3 sm:basis-1/2 basis-full flex items-start justify-start flex-col">
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        Retailers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        Wholesale
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-4 mt-10">
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-normal"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-normal"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-normal"
                      >
                        Cookie preferences
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:basis-1/3 md:basis-1/3 sm:basis-1/2 basis-full flex items-start justify-start flex-col">
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a
                        href="/login"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        CAD $
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#000] text-[17px] font-semibold"
                      >
                        Français
                      </a>
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
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 15.0626C24.9766 13.1569 24.4091 11.2977 23.3643 9.70376C22.3196 8.10984 20.8412 6.84762 19.1032 6.06579C17.3651 5.28395 15.4398 5.01505 13.5541 5.29074C11.6684 5.56644 9.90068 6.37524 8.45922 7.62192C7.01775 8.8686 5.96253 10.5012 5.41785 12.3275C4.87317 14.1538 4.8617 16.0977 5.3848 17.9303C5.9079 19.7629 6.94377 21.4078 8.37043 22.6714C9.79708 23.9351 11.5551 24.7647 13.4375 25.0626V17.9751H10.9375V15.0626H13.4375V12.8501C13.3796 12.3356 13.4353 11.8148 13.6008 11.3242C13.7663 10.8337 14.0375 10.3854 14.3951 10.0111C14.7527 9.63677 15.1881 9.34551 15.6706 9.15787C16.1531 8.97022 16.671 8.89076 17.1875 8.92511C17.9372 8.93537 18.6852 9.00224 19.425 9.12511V11.6251H18.175C17.9595 11.5979 17.7405 11.6195 17.5345 11.6883C17.3283 11.7571 17.1403 11.8713 16.9843 12.0225C16.8283 12.1737 16.7083 12.358 16.6332 12.5618C16.558 12.7657 16.5296 12.9838 16.55 13.2001V15.0876H19.325L18.875 18.0001H16.5625V25.0001C18.9248 24.6264 21.0751 23.4184 22.6231 21.5952C24.1711 19.7719 25.0143 17.4543 25 15.0626Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 20.4545C18.0124 20.4545 20.4545 18.0124 20.4545 15C20.4545 11.9875 18.0124 9.54541 15 9.54541C11.9875 9.54541 9.54541 11.9875 9.54541 15C9.54541 18.0124 11.9875 20.4545 15 20.4545ZM15 18.6363C17.0082 18.6363 18.6363 17.0082 18.6363 15C18.6363 12.9916 17.0082 11.3636 15 11.3636C12.9916 11.3636 11.3636 12.9916 11.3636 15C11.3636 17.0082 12.9916 18.6363 15 18.6363Z"
                      fill="#0F0F0F"
                    />
                    <path
                      d="M20.4545 8.63623C19.9524 8.63623 19.5454 9.04325 19.5454 9.54532C19.5454 10.0474 19.9524 10.4544 20.4545 10.4544C20.9566 10.4544 21.3636 10.0474 21.3636 9.54532C21.3636 9.04325 20.9566 8.63623 20.4545 8.63623Z"
                      fill="#0F0F0F"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.59451 7.97824C5 9.14503 5 10.6724 5 13.7273V16.2727C5 19.3275 5 20.855 5.59451 22.0217C6.11745 23.0481 6.95189 23.8825 7.97824 24.4055C9.14503 25 10.6724 25 13.7273 25H16.2727C19.3275 25 20.855 25 22.0217 24.4055C23.0481 23.8825 23.8825 23.0481 24.4055 22.0217C25 20.855 25 19.3275 25 16.2727V13.7273C25 10.6724 25 9.14503 24.4055 7.97824C23.8825 6.95189 23.0481 6.11745 22.0217 5.59451C20.855 5 19.3275 5 16.2727 5H13.7273C10.6724 5 9.14503 5 7.97824 5.59451C6.95189 6.11745 6.11745 6.95189 5.59451 7.97824ZM16.2727 6.81818H13.7273C12.1699 6.81818 11.1111 6.8196 10.2928 6.88645C9.49567 6.95158 9.08804 7.06963 8.80367 7.21452C8.11945 7.56315 7.56315 8.11945 7.21452 8.80367C7.06963 9.08804 6.95158 9.49567 6.88645 10.2928C6.8196 11.1111 6.81818 12.1699 6.81818 13.7273V16.2727C6.81818 17.8302 6.8196 18.8888 6.88645 19.7072C6.95158 20.5044 7.06963 20.912 7.21452 21.1964C7.56315 21.8805 8.11945 22.4368 8.80367 22.7855C9.08804 22.9304 9.49567 23.0485 10.2928 23.1135C11.1111 23.1804 12.1699 23.1818 13.7273 23.1818H16.2727C17.8302 23.1818 18.8888 23.1804 19.7072 23.1135C20.5044 23.0485 20.912 22.9304 21.1964 22.7855C21.8805 22.4368 22.4368 21.8805 22.7855 21.1964C22.9304 20.912 23.0485 20.5044 23.1135 19.7072C23.1804 18.8888 23.1818 17.8302 23.1818 16.2727V13.7273C23.1818 12.1699 23.1804 11.1111 23.1135 10.2928C23.0485 9.49567 22.9304 9.08804 22.7855 8.80367C22.4368 8.11945 21.8805 7.56315 21.1964 7.21452C20.912 7.06963 20.5044 6.95158 19.7072 6.88645C18.8888 6.8196 17.8302 6.81818 16.2727 6.81818Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6902 8.1344C19.0171 7.29394 18.6125 6.19805 18.6125 5H17.7691M19.6902 8.1344C20.3036 8.90063 21.1342 9.45788 22.0799 9.67608C22.3738 9.74574 22.6805 9.78293 23 9.78293V13.2191C21.3643 13.2191 19.8477 12.648 18.6123 11.6821V18.6707C18.6123 22.1627 16.0053 25 12.8062 25C11.1321 25 9.6198 24.2198 8.5591 22.98C7.59212 21.847 7 20.3331 7 18.6707C7 15.2298 9.53036 12.4251 12.6656 12.3508M19.6902 8.1344C19.6739 8.12276 19.6575 8.11101 19.6413 8.09914M10.6593 20.3517C10.3441 19.8781 10.1566 19.2977 10.1566 18.6661C10.1566 17.0734 11.3451 15.7778 12.8063 15.7778C13.0789 15.7778 13.343 15.8288 13.5901 15.9124V12.4019C13.3345 12.3647 13.0746 12.3415 12.8063 12.3415C12.7594 12.3415 12.3819 12.3688 12.3351 12.3688M17.7646 5H15.4558L15.4516 18.7775C15.4004 20.3192 14.2332 21.5591 12.8062 21.5591C11.9201 21.5591 11.1406 21.0808 10.655 20.3564"
                      stroke="black"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default footer;
