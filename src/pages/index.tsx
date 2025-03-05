import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Icon } from '@iconify/react';
import homeOutline from '@iconify-icons/mdi/home-outline';
import siteLogo from '../../public/logo.png';
import UserIcon from '../../public/user.jpeg';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <section>
        <div className="flex align-start justify-between">
          <h1>Welcome to home page</h1>
        </div>
      </section>
    </>
  );
}
