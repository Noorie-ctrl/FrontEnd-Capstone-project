import { ChevronRight, Apple } from "lucide-react";
import Image from "../assets/hero.png"

export default function Hero(){
    return(
       <div className="max-w-7xl mx-auto px-4 md:py-9 grid md:grid-cols-4 gap-4">
         
         <div className="col-span-3 relative bg-black rounded-lg shadow flex flex-col md:flex-row items-center mt-5 justify-between p-6 order-1 md:order-2"> 
            
            <div className="order-1 md:order-2 flex-shrink-0">
                <img 
                  className="object-contain w-full  max-w-xs "
                  src={Image} 
                  alt="iPhone" 
                />
            </div>

            {/* Text Content */}
            <div className="order-2 md:order-1 text-white max-w-sm md:ml-[5rem] text-center  md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-5">
                    <Apple className="w-10 h-10" />
                    <h3 className="text-base ml-2">iPhone 14 Series</h3>
                </div>
                
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Up to 10% off Voucher
                </h1>
                
                <div className="flex items-center justify-center md:justify-start">
                    <button className="mt-4 text-white border-b border-gray-300 font-semibold">
                        Shop Now 
                    </button>
                    <ChevronRight className="mt-4 ml-2" />
                </div>
            </div>
         </div>

         {/* Sidebar */}
         <div className="col-span-1 p-2 text-gray-300 md:border-r order-2 md:order-1">
            <ul className="space-y-3 text-black">
                <li className="cursor-pointer hover:text-red-500 text-sm md:text-base">Women's Fashion</li>
                <li className="cursor-pointer hover:text-red-500 text-sm md:text-base">Men's Fashion</li>
                <li className="cursor-pointer hover:text-red-500 text-sm md:text-base">Electronics</li>
                <li className="cursor-pointer hover:text-red-500 text-sm md:text-base">Home & Lifestyle</li>
                <li className="cursor-pointer hover:text-red-500 text-sm md:text-base">Medicine</li>
                <li className="cursor-pointer hover:text-red-500 text-sm md:text-base">Sports & Outdoor</li>
                <li className="cursor-pointer hover:text-red-500 text-sm md:text-base">Baby’s & Toys</li>
                <li className="cursor-pointer hover:text-red-500 text-sm md:text-base">Groceries & Pets</li>
                <li className="cursor-pointer hover:text-red-500 text-sm md:text-base">Health & Beauty</li>
            </ul>
         </div>
       </div>
    )
}
