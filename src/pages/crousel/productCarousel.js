import dynamic from "next/dynamic";
import Image from "next/image";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import passion from '../../../public/product-passion.png';
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
const OwlCarousel = dynamic(() => import("react-owl-carousel3"), { ssr: false });

const options = {
     loop: true,
     margin: 10,
     nav: true,
     dots: false,
     autoplay: true,
     autoplayTimeout: 2000,
     responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 },
     },
};

export default function ProductsCarousel() {
     const [isClient, setIsClient] = useState(false);

     useEffect(() => {
          setIsClient(true);
     }, []);
     return (
          <>
               <OwlCarousel className="owl-theme" {...options}>
                    <div className="item flex items-center justify-center">
                         <Image src={passion} alt="Site Logo" className="w-full max-w-[250px]" />
                    </div>
                    <div className="item flex items-center justify-center">
                         <Image src={passion} alt="Site Logo" className="w-full max-w-[250px]" />
                    </div>
                    <div className="item flex items-center justify-center">
                         <Image src={passion} alt="Site Logo" className="w-full max-w-[250px]" />
                    </div>
                    <div className="item flex items-center justify-center">
                         <Image src={passion} alt="Site Logo" className="w-full max-w-[250px]" />
                    </div>
               </OwlCarousel>
          </>
     );
};