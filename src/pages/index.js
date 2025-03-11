import Image from "next/image";
import { Icon } from "@iconify/react";
import homeOutline from "@iconify-icons/mdi/home-outline";
import siteLogo from "../../public/logo.png";
import UserIcon from "../../public/user.jpeg";

// Fonts removed since next/font/google is TypeScript-based
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
